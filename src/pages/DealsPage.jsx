import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { bundles } from '../data/catalog'
import { useCart } from '../context/CartContext'

// Bundle images from Unsplash
const bundleImages = {
  'Summer paddy bundle': 'https://static.vecteezy.com/system/resources/previews/054/053/508/non_2x/close-up-of-a-farmer-holding-freshly-harvested-rice-stalks-in-golden-sunlight-amidst-a-lush-green-paddy-field-photo.jpg',
  'Vegetable micro kit': 'https://images.unsplash.com/photo-1592061088207-2c4f96e4b3c3?auto=format&fit=crop&w=600&q=80',
  'Cotton defense combo': 'https://th.bing.com/th/id/OIP.N4FhYX8O0AzNrJNfXZUGOQHaEM?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
}

function DealsPage() {
  const [params] = useSearchParams()
  const bundle = params.get('bundle')
  const detail = params.get('detail')
  const navigate = useNavigate()
  const { addItem } = useCart()

  const handleAddBundle = (item) => {
    addItem({
      name: item.name,
      type: 'bundle',
      price: item.price,
      quantity: 1,
    })
    navigate('/cart')
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Deals & Bundles</h1>
        <p>Limited-time bundles and warehouse price drops.</p>
        {bundle ? <span className="page-pill">Added: {bundle}</span> : null}
        {detail ? <span className="page-pill">Viewing: {detail}</span> : null}
      </header>
      <div className="page-grid">
        {bundles.map((item) => (
          <article key={item.name} className="page-card">
            {bundleImages[item.name] && (
              <img
                className="page-card-image"
                src={bundleImages[item.name]}
                alt={item.name}
              />
            )}
            <h3>{item.name}</h3>
            <p style={{ fontSize: '0.95rem', color: '#6b6457' }}>{item.detail}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2c281d', margin: 0 }}>
                ₹{item.price.toLocaleString('en-IN')}
              </p>
              <span
                className="page-pill"
                style={{
                  marginTop: '0',
                  background: 'linear-gradient(135deg, #5eb62f 0%, #4fa426 100%)',
                  color: 'white',
                  border: 'none',
                }}
              >
                {item.deal}
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#5eb62f', fontWeight: '600', margin: '8px 0 0 0' }}>
              ✓ {item.stock}
            </p>
            <div className="page-actions">
              <button
                className="primary"
                onClick={() => handleAddBundle(item)}
              >
                Add bundle
              </button>
              <button
                className="ghost"
                onClick={() => navigate(`/detail/bundle/${encodeURIComponent(item.name)}`)}
              >
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default DealsPage
