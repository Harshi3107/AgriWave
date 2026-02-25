import { Link, useNavigate } from 'react-router-dom'
import { clearanceItems } from '../data/catalog'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

// Clearance images from Unsplash
const clearanceImages = {
  'Sprayers': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
  'Field tools': 'https://images.unsplash.com/photo-1563523514-f0c0e0262e5f?auto=format&fit=crop&w=600&q=80',
  'Spare parts': 'https://images.unsplash.com/photo-1588898657959-f8f13ca4c6a6?auto=format&fit=crop&w=600&q=80',
}

function ClearancePage() {
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddClearanceItem = (item) => {
    addItem({
      name: item.name,
      type: 'clearance',
      price: item.price,
      quantity: 1,
    })
    navigate('/cart')
  }

  const handleWishlistToggle = (item) => {
    if (isInWishlist(item.name)) {
      removeFromWishlist(item.name)
    } else {
      addToWishlist({
        name: item.name,
        price: item.price,
        type: 'clearance',
      })
    }
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Clearance Sale</h1>
        <p>Warehouse clearance items with limited stock - Heavy discounts available!</p>
      </header>
      <div className="page-grid">
        {clearanceItems.map((item) => (
          <article key={item.name} className="page-card">
            {clearanceImages[item.name] && (
              <Link to={`/detail/clearance/${encodeURIComponent(item.name)}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '0px' }}>
                <img
                  className="page-card-image"
                  src={clearanceImages[item.name]}
                  alt={item.name}
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            )}
            <h3>{item.name}</h3>
            <p>{item.note}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2c281d', marginTop: '8px' }}>
              ₹{item.price.toLocaleString('en-IN')}
            </p>
            <span
              className="page-pill"
              style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                color: 'white',
                marginTop: '0.5em',
                display: 'inline-block',
                border: 'none',
              }}
            >
              {item.discount}
            </span>
            <div className="page-actions">
              <button
                className="primary"
                onClick={() => handleAddClearanceItem(item)}
              >
                Add to cart
              </button>
              <button
                className="ghost"
                onClick={() => navigate(`/detail/clearance/${encodeURIComponent(item.name)}`)}
              >
                View offers
              </button>
              <button
                onClick={() => handleWishlistToggle(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  padding: '8px',
                }}
                title={isInWishlist(item.name) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {isInWishlist(item.name) ? '❤️' : '🖤'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ClearancePage
