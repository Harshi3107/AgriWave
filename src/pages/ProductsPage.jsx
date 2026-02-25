import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { products } from '../data/catalog'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function ProductsPage() {
  const [params] = useSearchParams()
  const category = params.get('category')
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  // Filter products based on category
  const filteredProducts = category 
    ? products.filter(product => product.category === category)
    : products

  const handleAddToCart = (product) => {
    addItem({
      name: product.name,
      type: 'product',
      price: product.price,
      quantity: 1,
    })
    navigate('/cart')
  }

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.name)) {
      removeFromWishlist(product.name)
    } else {
      addToWishlist({
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
      })
    }
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Products</h1>
        <p>Browse our wide range of agricultural products.</p>
        {category ? <span className="page-pill">Category: {category}</span> : null}
      </header>
      
      {filteredProducts.length === 0 ? (
        <div className="page-card" style={{ textAlign: 'center', padding: '48px 20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📦</div>
          <h3>No products found</h3>
          <p>No products available in this category yet.</p>
          <button
            className="primary"
            onClick={() => navigate('/categories')}
            style={{ marginTop: '20px' }}
          >
            Browse all categories
          </button>
        </div>
      ) : (
        <>
          {category === 'Sprayers' && (
            <div className="page-card" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', border: '2px solid #81c784', marginBottom: '20px' }}>
              <h2 style={{ margin: '0 0 12px 0', color: '#2e7d32', fontSize: '1.5rem' }}>🌾 Agricultural Sprayers Guide</h2>
              <p style={{ margin: '0 0 16px 0', color: '#1b5e20', lineHeight: '1.6' }}>
                Choose the right sprayer for your farm size and requirements. From compact manual sprayers for home gardens to advanced drone technology for precision agriculture.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '8px' }}>
                  <strong style={{ color: '#2e7d32' }}>🎒 Manual</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>Best for small farms & gardens</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '8px' }}>
                  <strong style={{ color: '#2e7d32' }}>🔋 Battery-Powered</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>Efficient for medium-sized fields</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '8px' }}>
                  <strong style={{ color: '#2e7d32' }}>⚙️ Motorized</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>High-power for large operations</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '8px' }}>
                  <strong style={{ color: '#2e7d32' }}>✈️ Advanced Tech</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>Drone & precision agriculture</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="page-card" style={{ background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)', border: '2px solid #d9c6a3' }}>
            <p style={{ margin: '0', fontWeight: '600', color: '#5c4a1f' }}>
              Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              {category ? ` in ${category}` : ''}
            </p>
          </div>
          
          <div className="page-grid">
            {filteredProducts.map((product) => (
              <article key={product.name} className="page-card">
                {product.image && (
                  <Link to={`/detail/product/${encodeURIComponent(product.name)}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <img 
                      className="page-card-image" 
                      src={product.image} 
                      alt={product.name}
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px', cursor: 'pointer' }}
                    />
                  </Link>
                )}
                <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{product.name}</h3>
                {product.description && (
                  <p style={{ 
                    margin: '0 0 12px 0', 
                    fontSize: '0.85rem', 
                    color: '#666',
                    lineHeight: '1.4'
                  }}>
                    {product.description}
                  </p>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <p style={{ 
                    margin: '0', 
                    fontSize: '1.2rem', 
                    fontWeight: '700', 
                    color: '#4caf50' 
                  }}>
                    ₹{product.price}
                  </p>
                  <span style={{ 
                    fontSize: '0.85rem', 
                    color: product.stock === 'In stock' ? '#4caf50' : '#ff9800',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {product.stock}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    className="ghost"
                    onClick={() => navigate(`/detail/product/${encodeURIComponent(product.name)}`)}
                    style={{ flex: 1 }}
                  >
                    View details
                  </button>
                  <button
                    className="primary"
                    onClick={() => handleAddToCart(product)}
                    style={{ flex: 1 }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleWishlistToggle(product)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                      padding: '8px',
                      transition: 'transform 0.2s',
                    }}
                    title={isInWishlist(product.name) ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    {isInWishlist(product.name) ? '❤️' : '🖤'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ProductsPage