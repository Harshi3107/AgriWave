import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`

function OrderSuccessPage() {
  const navigate = useNavigate()
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder')
    if (lastOrder) {
      try {
        setOrderDetails(JSON.parse(lastOrder))
      } catch (error) {
        console.error('Failed to load order details:', error)
      }
    }
  }, [])

  if (!orderDetails) {
    return (
      <div className="page-shell">
        <div className="page-card" style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⏳</div>
          <h3>Loading order details...</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1>Order Placed Successfully! 🎉</h1>
        <p>Thank you for your order. We're preparing your items for shipment.</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Success Message */}
        <div className="page-card" style={{ 
          background: 'linear-gradient(135deg, rgba(94, 182, 47, 0.1), rgba(94, 182, 47, 0.05))',
          border: '2px solid #5eb62f',
          textAlign: 'center',
          padding: '40px',
          marginBottom: '30px'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✓</div>
          <h2 style={{ color: '#5eb62f', marginBottom: '8px' }}>Order Confirmed!</h2>
          <p style={{ fontSize: '1.1rem', color: '#333', margin: '0' }}>Order ID: <strong>{orderDetails.id}</strong></p>
          <p style={{ fontSize: '0.95rem', color: '#666', margin: '8px 0 0 0' }}>Placed on {orderDetails.orderDate} at {orderDetails.orderTime}</p>
        </div>

        {/* Order Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
          {/* Delivery Information */}
          <div className="page-card">
            <h3 style={{ marginBottom: '16px', color: '#333' }}>📍 Delivery Information</h3>
            <div style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              <p style={{ margin: '8px 0', fontWeight: '600', color: '#333' }}>{orderDetails.customerName}</p>
              <p style={{ margin: '4px 0', color: '#666' }}>{orderDetails.address}</p>
              <p style={{ margin: '4px 0', color: '#666' }}>Email: {orderDetails.email}</p>
              <p style={{ margin: '4px 0', color: '#666' }}>Phone: {orderDetails.phone}</p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="page-card">
            <h3 style={{ marginBottom: '16px', color: '#333' }}>💳 Payment Information</h3>
            <div style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              <p style={{ margin: '8px 0' }}>
                <strong>Payment Method:</strong> {orderDetails.paymentMethod === 'card' ? 'Credit/Debit Card' : 'UPI'}
              </p>
              <p style={{ margin: '8px 0' }}>
                <strong>Status:</strong> <span style={{ color: '#5eb62f', fontWeight: '600' }}>Confirmed</span>
              </p>
              <p style={{ margin: '8px 0' }}>
                <strong>Total Amount:</strong> <span style={{ fontSize: '1.2rem', color: '#5eb62f', fontWeight: '700' }}>{formatCurrency(orderDetails.total)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="page-card" style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>📦 Order Items</h3>
          <div style={{ borderTop: '2px solid #e5dfd0', paddingTop: '16px' }}>
            {orderDetails.items.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  paddingBottom: '12px',
                  marginBottom: '12px',
                  ...(index !== orderDetails.items.length - 1 && { borderBottom: '1px solid #e5dfd0' })
                }}
              >
                <div>
                  <p style={{ margin: '0', fontWeight: '600', color: '#333' }}>{item.name}</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#666' }}>
                    {formatCurrency(item.price)} × {item.quantity}
                  </p>
                </div>
                <p style={{ margin: '0', fontWeight: '700', color: '#333', fontSize: '1rem' }}>
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '20px', 
            paddingTop: '20px', 
            borderTop: '2px solid #e5dfd0',
            display: 'grid',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span>Subtotal</span>
              <span>{formatCurrency(orderDetails.subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span>Tax (5%)</span>
              <span>{formatCurrency(orderDetails.tax)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
              <span>Shipping</span>
              <span>{formatCurrency(orderDetails.shipping)}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              fontSize: '1.1rem', 
              fontWeight: '700',
              color: '#333',
              paddingTop: '12px',
              borderTop: '1px solid #e5dfd0'
            }}>
              <span>Total</span>
              <span style={{ color: '#5eb62f' }}>{formatCurrency(orderDetails.total)}</span>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="page-card" style={{ 
          background: 'rgba(94, 182, 47, 0.05)',
          border: '1px solid #5eb62f',
          borderRadius: '8px'
        }}>
          <h4 style={{ marginBottom: '12px', color: '#333' }}>📧 What's Next?</h4>
          <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem', color: '#666' }}>
            <li>You will receive an order confirmation email shortly</li>
            <li>Your items will be prepared and shipped within 2-3 business days</li>
            <li>You can track your order status using the order ID: <strong>{orderDetails.id}</strong></li>
            <li>For any queries, contact our customer support team</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          marginTop: '40px',
          justifyContent: 'center'
        }}>
          <button 
            className="ghost" 
            onClick={() => navigate('/')}
            style={{ padding: '12px 32px', fontSize: '1rem' }}
          >
            Back to Home
          </button>
          <button 
            className="primary" 
            onClick={() => navigate('/categories')}
            style={{ padding: '12px 32px', fontSize: '1rem' }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccessPage
