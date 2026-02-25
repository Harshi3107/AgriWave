import { Link, useNavigate, useParams } from 'react-router-dom'
import { bundles, categories, clearanceItems, stories, products } from '../data/catalog'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const typeMeta = {
  category: {
    title: 'Category',
    description: 'Explore curated inputs and verified suppliers in this category.',
    icon: '🏷️',
  },
  bundle: {
    title: 'Bundle',
    description: 'Bundle details include pricing, availability, and advisor tips.',
    icon: '📦',
  },
  story: {
    title: 'Farmer story',
    description: 'Impact highlights and outcomes from growers in your region.',
    icon: '👨‍🌾',
  },
  clearance: {
    title: 'Clearance offer',
    description: 'Limited stock discounts on tools and spare parts.',
    icon: '🔥',
  },
  product: {
    title: 'Product',
    description: 'View product details, pricing, and specifications.',
    icon: '📦',
  },
  advisory: {
    title: 'Advisory booking',
    description: 'Share crop details to receive a tailored plan from experts.',
    icon: '💬',
  },
  support: {
    title: 'Support request',
    description: 'We will route your request to the right specialist.',
    icon: '🆘',
  },
}

function DetailPage() {
  const { type, name } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const decodedName = name ? decodeURIComponent(name) : 'Overview'
  const meta = typeMeta[type] || {
    title: 'Detail',
    description: 'More information will be available soon.',
    icon: 'ℹ️',
  }
  const lookupName = decodedName.toLowerCase()
  const catalogLookup = {
    category: categories.map((item) => ({
      name: item.name,
      description: item.description,
    })),
    bundle: bundles.map((item) => ({
      name: item.name,
      description: item.detail,
      price: item.price,
      deal: item.deal,
    })),
    clearance: clearanceItems.map((item) => ({
      name: item.name,
      description: item.note,
      price: item.price,
      deal: item.discount,
    })),
    story: stories.map((item) => ({
      name: item.name,
      description: item.note,
      outcome: item.outcome,
    })),
    product: products.map((item) => ({
      name: item.name,
      description: `Category: ${item.category}`,
      price: item.price,
      stock: item.stock,
      image: item.image,
    })),
  }
  const match = catalogLookup[type]?.find((item) => item.name.toLowerCase() === lookupName)
  const detailDescription = match?.description || 'Detailed content will appear soon.'

  const handleAddToCart = () => {
    if (match && typeof match.price === 'number') {
      addItem({
        name: decodedName,
        type: type === 'bundle' ? 'bundle' : type === 'clearance' ? 'clearance' : 'product',
        price: match.price,
        quantity: 1,
      })
      navigate('/cart')
    }
  }

  const handleWishlistToggle = () => {
    if (type === 'product' && match) {
      if (isInWishlist(decodedName)) {
        removeFromWishlist(decodedName)
      } else {
        addToWishlist({
          name: decodedName,
          price: match.price,
          category: match.category,
          image: match.image,
        })
      }
    }
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
        <span className="page-pill">{decodedName}</span>
      </header>
      <div className="page-card">
        {match?.image && type === 'product' && (
          <img 
            src={match.image} 
            alt={decodedName}
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '12px', 
              marginBottom: '20px' 
            }}
          />
        )}
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
          <span style={{ fontSize: '2rem' }}>{meta.icon}</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 8px 0' }}>{decodedName}</h3>
            <p style={{ margin: 0, color: '#6b6457' }}>{detailDescription}</p>
            {match?.stock && type === 'product' && (
              <p style={{ 
                margin: '8px 0 0 0', 
                fontSize: '0.9rem', 
                fontWeight: '600',
                color: match.stock === 'In stock' ? '#4caf50' : '#ff9800',
                textTransform: 'uppercase'
              }}>
                {match.stock}
              </p>
            )}
          </div>
        </div>

        {match?.outcome && (
          <div style={{
            padding: '12px',
            background: 'linear-gradient(135deg, rgba(94, 182, 47, 0.1), rgba(94, 122, 58, 0.1))',
            borderRadius: '8px',
            borderLeft: '4px solid #5eb62f',
            marginTop: '16px',
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#2f3a25', fontWeight: '600' }}>
              ✓ {match.outcome}
            </p>
          </div>
        )}

        {match?.deal && (
          <div style={{ marginTop: '12px' }}>
            <span
              className="page-pill"
              style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                color: 'white',
                border: 'none',
              }}
            >
              {match.deal}
            </span>
          </div>
        )}

        {typeof match?.price === 'number' && (
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: '#faf8f2',
            borderRadius: '12px',
            border: '2px solid #e5dfd0',
          }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#6b6457' }}>Price</p>
            <p style={{ margin: 0, fontSize: '1.6rem', fontWeight: '700', color: '#2c281d' }}>
              ₹{match.price.toLocaleString('en-IN')}
            </p>
          </div>
        )}

        <div className="page-actions" style={{ marginTop: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {(type === 'bundle' || type === 'clearance' || type === 'product') ? (
            <button
              className="primary"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          ) : null}
          {type === 'product' && (
            <button
              onClick={handleWishlistToggle}
              style={{
                background: 'none',
                border: '2px solid #ddd',
                fontSize: '1.4rem',
                cursor: 'pointer',
                padding: '10px 16px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
              title={isInWishlist(decodedName) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {isInWishlist(decodedName) ? '❤️' : '🖤'}
            </button>
          )}
          <Link className="ghost" to="/search">
            Browse related items →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
