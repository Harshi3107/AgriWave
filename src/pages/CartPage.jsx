import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { bundles, clearanceItems } from '../data/catalog'
import { useCart } from '../context/CartContext'

const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`

function CartPage() {
  const [params] = useSearchParams()
  const { items, addItem, removeItem, updateQuantity, getTotalPrice } = useCart()
  const navigate = useNavigate()
  const addName = params.get('add')

  // Add item from query parameter if provided
  if (addName && !items.some((item) => item.name.toLowerCase() === addName.toLowerCase())) {
    const addFromCatalog = [...bundles, ...clearanceItems].find(
      (item) => item.name.toLowerCase() === addName.toLowerCase(),
    )

    if (addFromCatalog) {
      addItem({
        name: addFromCatalog.name,
        type: bundles.some((bundle) => bundle.name === addFromCatalog.name)
          ? 'bundle'
          : 'clearance',
        price: addFromCatalog.price,
        quantity: 1,
      })
    }
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 120 : 0
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + shipping + tax

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Shopping Cart</h1>
        <p>Review your selected inputs before checkout.</p>
        <span className="page-pill">{items.length} item{items.length !== 1 ? 's' : ''}</span>
      </header>

      {items.length === 0 ? (
        <div className="page-card">
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🛒</div>
            <h3>Your cart is empty</h3>
            <p>Start adding items to your cart to proceed with checkout.</p>
            <button className="primary" onClick={() => navigate('/categories')} style={{ marginTop: '20px' }}>
              Browse products
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="page-grid">
            {items.map((item) => (
              <div key={`${item.name}-${item.type}`} className="page-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ marginBottom: '4px' }}>{item.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#6b6457', margin: '0 0 8px 0' }}>
                      {item.type.toUpperCase()}
                    </p>
                  </div>
                  <button
                    className="ghost"
                    style={{ padding: '4px 8px', fontSize: '0.8rem' }}
                    onClick={() => removeItem(item.name)}
                  >
                    Remove
                  </button>
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2c281d', margin: '8px 0' }}>
                  {formatCurrency(item.price)}
                </p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '12px', marginBottom: '12px' }}>
                  <label htmlFor={`qty-${item.name}`} style={{ fontSize: '0.9rem', fontWeight: '600' }}>Qty:</label>
                  <input
                    id={`qty-${item.name}`}
                    type="number"
                    min="1"
                    step="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.name, parseInt(e.target.value, 10))}
                    style={{
                      width: '70px',
                      padding: '8px 10px',
                      border: '2px solid #e5dfd0',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
                <p style={{ marginTop: '12px', fontWeight: '700', color: '#5e7a3a', fontSize: '0.95rem' }}>
                  Subtotal: {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>
          <div className="page-card" style={{ maxWidth: '400px', marginLeft: 'auto' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Order Summary</h3>
            <div style={{ display: 'grid', gap: '12px', borderBottom: '2px solid #e5dfd0', paddingBottom: '16px' }}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>Total</span>
              <span style={{ fontSize: '1.3rem', fontWeight: '700', color: '#5eb62f' }}>
                {formatCurrency(total)}
              </span>
            </div>
            <div className="page-actions" style={{ flexDirection: 'column' }}>
              <button className="primary" onClick={() => navigate('/checkout')} style={{ width: '100%' }}>
                Proceed to checkout
              </button>
              <button className="ghost" onClick={() => navigate('/categories')} style={{ width: '100%' }}>
                Continue shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
