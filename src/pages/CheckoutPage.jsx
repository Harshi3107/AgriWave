import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`

function CheckoutPage() {
  const navigate = useNavigate()
  const { items, getTotalPrice, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState('customer') // customer, address, payment, review
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
  })
  const [errors, setErrors] = useState({})

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 120 : 0
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + shipping + tax

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateCustomerInfo = () => {
    const newErrors = {}
    if (!formState.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formState.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid'
    if (!formState.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(formState.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateAddressInfo = () => {
    const newErrors = {}
    if (!formState.address.trim()) newErrors.address = 'Address is required'
    if (!formState.city.trim()) newErrors.city = 'City is required'
    if (!formState.state.trim()) newErrors.state = 'State is required'
    if (!formState.zipCode.trim()) newErrors.zipCode = 'Zip code is required'
    else if (!/^\d{6}$/.test(formState.zipCode)) newErrors.zipCode = 'Zip code must be 6 digits'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePaymentInfo = () => {
    const newErrors = {}
    if (paymentMethod === 'card') {
      if (!formState.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
      else if (!/^\d{16}$/.test(formState.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Card number must be 16 digits'
      if (!formState.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required'
      else if (!/^\d{2}\/\d{2}$/.test(formState.expiryDate)) newErrors.expiryDate = 'Format must be MM/YY'
      if (!formState.cvv.trim()) newErrors.cvv = 'CVV is required'
      else if (!/^\d{3,4}$/.test(formState.cvv)) newErrors.cvv = 'CVV must be 3-4 digits'
    } else if (paymentMethod === 'upi') {
      if (!formState.upiId.trim()) newErrors.upiId = 'UPI ID is required'
      else if (!/^[\w.-]+@[\w.-]+$/.test(formState.upiId)) newErrors.upiId = 'Invalid UPI ID format'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (currentStep === 'customer') {
      if (validateCustomerInfo()) setCurrentStep('address')
    } else if (currentStep === 'address') {
      if (validateAddressInfo()) setCurrentStep('payment')
    } else if (currentStep === 'payment') {
      if (validatePaymentInfo()) setCurrentStep('review')
    }
  }

  const handlePrevStep = () => {
    if (currentStep === 'address') setCurrentStep('customer')
    else if (currentStep === 'payment') setCurrentStep('address')
    else if (currentStep === 'review') setCurrentStep('payment')
  }

  const handlePlaceOrder = () => {
    // Save order details to localStorage for success page
    const orderDetails = {
      id: `ORD-${Date.now()}`,
      customerName: formState.fullName,
      email: formState.email,
      phone: formState.phone,
      address: `${formState.address}, ${formState.city}, ${formState.state} ${formState.zipCode}`,
      items: items,
      subtotal: subtotal,
      tax: tax,
      shipping: shipping,
      total: total,
      paymentMethod: paymentMethod,
      orderDate: new Date().toLocaleDateString(),
      orderTime: new Date().toLocaleTimeString(),
    }

    localStorage.setItem('lastOrder', JSON.stringify(orderDetails))
    clearCart()
    navigate('/order-success')
  }

  if (items.length === 0) {
    return (
      <div className="page-shell">
        <header className="page-header">
          <Link className="back-link" to="/">
            Back to home
          </Link>
          <h1>Checkout</h1>
        </header>
        <div className="page-card">
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add items to proceed with checkout.</p>
            <button className="primary" onClick={() => navigate('/categories')} style={{ marginTop: '20px' }}>
              Browse products
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/cart">
          Back to cart
        </Link>
        <h1>Checkout</h1>
        <p>Complete your order in a few simple steps.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1200px' }}>
        {/* Left Column - Form */}
        <div>
          {/* Step 1: Customer Information */}
          <div className="page-card" style={{ display: currentStep === 'customer' ? 'block' : 'none' }}>
            <h3 style={{ marginBottom: '24px' }}>Step 1: Your Information</h3>
            <form className="form-grid" onSubmit={(e) => { e.preventDefault(); handleNextStep() }}>
              <label className="form-field">
                Full Name
                <input
                  className="input"
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                {errors.fullName && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.fullName}</span>}
              </label>

              <label className="form-field">
                Email Address
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.email}</span>}
              </label>

              <label className="form-field">
                Phone Number
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                />
                {errors.phone && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.phone}</span>}
              </label>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button type="button" className="ghost" onClick={() => navigate('/cart')} style={{ flex: 1 }}>
                  Back to Cart
                </button>
                <button type="submit" className="primary" style={{ flex: 1 }}>
                  Continue to Address
                </button>
              </div>
            </form>
          </div>

          {/* Step 2: Address Information */}
          <div className="page-card" style={{ display: currentStep === 'address' ? 'block' : 'none' }}>
            <h3 style={{ marginBottom: '24px' }}>Step 2: Delivery Address</h3>
            <form className="form-grid" onSubmit={(e) => { e.preventDefault(); handleNextStep() }}>
              <label className="form-field">
                Street Address
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={formState.address}
                  onChange={handleChange}
                  placeholder="123 Farm Lane"
                />
                {errors.address && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.address}</span>}
              </label>

              <label className="form-field">
                City
                <input
                  className="input"
                  type="text"
                  name="city"
                  value={formState.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
                {errors.city && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.city}</span>}
              </label>

              <label className="form-field">
                State
                <input
                  className="input"
                  type="text"
                  name="state"
                  value={formState.state}
                  onChange={handleChange}
                  placeholder="Your state"
                />
                {errors.state && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.state}</span>}
              </label>

              <label className="form-field">
                Zip Code
                <input
                  className="input"
                  type="text"
                  name="zipCode"
                  value={formState.zipCode}
                  onChange={handleChange}
                  placeholder="123456"
                />
                {errors.zipCode && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.zipCode}</span>}
              </label>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button type="button" className="ghost" onClick={handlePrevStep} style={{ flex: 1 }}>
                  Back
                </button>
                <button type="submit" className="primary" style={{ flex: 1 }}>
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>

          {/* Step 3: Payment Information */}
          <div className="page-card" style={{ display: currentStep === 'payment' ? 'block' : 'none' }}>
            <h3 style={{ marginBottom: '24px' }}>Step 3: Payment Method</h3>
            <form className="form-grid" onSubmit={(e) => { e.preventDefault(); handleNextStep() }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <label style={{ flex: 1, cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  <span style={{ fontWeight: '600' }}>Credit/Debit Card</span>
                </label>
                <label style={{ flex: 1, cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  <span style={{ fontWeight: '600' }}>UPI</span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <>
                  <label className="form-field">
                    Card Number
                    <input
                      className="input"
                      type="text"
                      name="cardNumber"
                      value={formState.cardNumber}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\s/g, '')
                        if (value.length <= 16) {
                          setFormState((prev) => ({ ...prev, cardNumber: value }))
                        }
                      }}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                    {errors.cardNumber && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.cardNumber}</span>}
                  </label>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <label className="form-field">
                      Expiry (MM/YY)
                      <input
                        className="input"
                        type="text"
                        name="expiryDate"
                        value={formState.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '')
                          if (value.length <= 4) {
                            if (value.length >= 2) {
                              value = value.slice(0, 2) + '/' + value.slice(2)
                            }
                            setFormState((prev) => ({ ...prev, expiryDate: value }))
                          }
                        }}
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                      {errors.expiryDate && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.expiryDate}</span>}
                    </label>

                    <label className="form-field">
                      CVV
                      <input
                        className="input"
                        type="password"
                        name="cvv"
                        value={formState.cvv}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '')
                          if (value.length <= 4) {
                            setFormState((prev) => ({ ...prev, cvv: value }))
                          }
                        }}
                        placeholder="123"
                        maxLength="4"
                      />
                      {errors.cvv && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.cvv}</span>}
                    </label>
                  </div>
                </>
              )}

              {paymentMethod === 'upi' && (
                <label className="form-field">
                  UPI ID
                  <input
                    className="input"
                    type="text"
                    name="upiId"
                    value={formState.upiId}
                    onChange={handleChange}
                    placeholder="name@bankname"
                  />
                  {errors.upiId && <span style={{ color: '#d32f2f', fontSize: '0.85rem' }}>{errors.upiId}</span>}
                </label>
              )}

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <button type="button" className="ghost" onClick={handlePrevStep} style={{ flex: 1 }}>
                  Back
                </button>
                <button type="submit" className="primary" style={{ flex: 1 }}>
                  Review Order
                </button>
              </div>
            </form>
          </div>

          {/* Step 4: Order Review */}
          <div className="page-card" style={{ display: currentStep === 'review' ? 'block' : 'none' }}>
            <h3 style={{ marginBottom: '24px' }}>Step 4: Order Review</h3>
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: '#333' }}>Delivery Information</h4>
              <p style={{ margin: '6px 0', fontSize: '0.95rem' }}><strong>Name:</strong> {formState.fullName}</p>
              <p style={{ margin: '6px 0', fontSize: '0.95rem' }}><strong>Email:</strong> {formState.email}</p>
              <p style={{ margin: '6px 0', fontSize: '0.95rem' }}><strong>Phone:</strong> {formState.phone}</p>
              <p style={{ margin: '6px 0', fontSize: '0.95rem' }}><strong>Address:</strong> {formState.address}, {formState.city}, {formState.state} {formState.zipCode}</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: '#333' }}>Payment Method</h4>
              <p style={{ margin: '6px 0', fontSize: '0.95rem' }}>{paymentMethod === 'card' ? '💳 Credit/Debit Card' : '📱 UPI'}</p>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <button type="button" className="ghost" onClick={handlePrevStep} style={{ flex: 1 }}>
                Back
              </button>
              <button type="button" className="primary" onClick={handlePlaceOrder} style={{ flex: 1 }}>
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
          <div className="page-card">
            <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
            
            <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px', paddingBottom: '20px', borderBottom: '2px solid #e5dfd0' }}>
              {items.map((item) => (
                <div key={`${item.name}-${item.type}`} style={{ marginBottom: '12px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '500' }}>{item.name}</span>
                    <span>×{item.quantity}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.85rem' }}>
                    <span>{formatCurrency(item.price)} each</span>
                    <span style={{ fontWeight: '600' }}>{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: '600' }}>{formatCurrency(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Tax (5%)</span>
                <span style={{ fontWeight: '600' }}>{formatCurrency(tax)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping</span>
                <span style={{ fontWeight: '600' }}>{formatCurrency(shipping)}</span>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '16px', 
              paddingTop: '16px', 
              borderTop: '2px solid #e5dfd0',
              fontSize: '1.1rem',
              fontWeight: '700'
            }}>
              <span>Total</span>
              <span style={{ color: '#5eb62f' }}>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
