import { Link, useNavigate } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { products } from '../data/catalog'

const formatCurrency = (amount) => `₹${amount.toLocaleString('en-IN')}`

function WishlistPage() {
  const navigate = useNavigate()
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addItem } = useCart()

  // Helper function to get product details from catalog
  const getProductFromCatalog = (productName) => {
    return products.find(p => p.name.toLowerCase() === productName.toLowerCase())
  }

  const handleAddToCart = (product) => {
    addItem({
      name: product.name,
      type: 'product',
      price: product.price,
      quantity: 1,
    })
    navigate('/cart')
  }

  const handleRemoveFromWishlist = (name) => {
    removeFromWishlist(name)
  }

  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>❤️ My Wishlist</h1>
        <p>Your saved agricultural products for later.</p>
        <span className="page-pill">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''}</span>
      </header>

      {wishlist.length === 0 ? (
        <div className="page-card">
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>💔</div>
            <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '8px' }}>Your wishlist is empty</h3>
            <p style={{ color: '#666', marginBottom: '24px' }}>Start adding agricultural products to save them for later!</p>
            <button 
              className="primary" 
              onClick={() => navigate('/products')}
              style={{ padding: '12px 32px', fontSize: '1rem' }}
            >
              Browse Products
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Wishlist Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div className="page-card" style={{ background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)' }}>
              <p style={{ margin: '0', fontSize: '0.95rem', color: '#6b5a3a' }}>Total Items</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '2rem', fontWeight: '700', color: '#5c4a1f' }}>
                {wishlist.length}
              </p>
            </div>
            <div className="page-card" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }}>
              <p style={{ margin: '0', fontSize: '0.95rem', color: '#2e7d32' }}>Total Value</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '2rem', fontWeight: '700', color: '#4caf50' }}>
                {formatCurrency(totalValue)}
              </p>
            </div>
          </div>

          {/* Wishlist Grid */}
          <div className="page-grid">
            {wishlist.map((wishItem) => {
              const catalogProduct = getProductFromCatalog(wishItem.name)
              return (
                <article 
                  key={wishItem.name} 
                  className="page-card"
                  style={{ position: 'relative' }}
                >
                  {/* Wishlist Heart Badge */}
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: '#ff4081',
                    color: 'white',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    zIndex: 10,
                  }}>
                    ❤️
                  </div>

                  {/* Product Image */}
                  {(catalogProduct?.image || wishItem.image) && (
                    <Link 
                      to={`/detail/product/${encodeURIComponent(wishItem.name)}`}
                      style={{ textDecoration: 'none', display: 'block' }}
                    >
                      <img 
                        src={wishItem.image || catalogProduct.image}
                        alt={wishItem.name}
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '12px',
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    </Link>
                  )}

                  {/* Category */}
                  <div style={{ marginBottom: '12px' }}>
                    <p style={{ 
                      margin: '0 0 4px 0',
                      fontSize: '0.85rem',
                      background: '#e3f2fd',
                      color: '#1976d2',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      display: 'inline-block',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {wishItem.category || catalogProduct?.category || 'Product'}
                    </p>
                  </div>

                  {/* Product Name */}
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#333' }}>
                    {wishItem.name}
                  </h3>

                  {/* Stock Status */}
                  {catalogProduct?.stock && (
                    <p style={{
                      margin: '6px 0 8px 0',
                      fontSize: '0.85rem',
                      color: catalogProduct.stock === 'In stock' ? '#4caf50' : '#ff9800',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}>
                      {catalogProduct.stock}
                    </p>
                  )}

                  {/* Price */}
                  <p style={{ 
                    margin: '12px 0',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#4caf50'
                  }}>
                    {formatCurrency(wishItem.price)}
                  </p>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                    <button
                      onClick={() => handleAddToCart(wishItem)}
                      style={{
                        flex: 1,
                        padding: '10px 16px',
                        background: '#4caf50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseOver={(e) => e.target.style.background = '#45a049'}
                      onMouseOut={(e) => e.target.style.background = '#4caf50'}
                    >
                      🛒 Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(wishItem.name)}
                      style={{
                        flex: 1,
                        padding: '10px 16px',
                        background: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseOver={(e) => e.target.style.background = '#da190b'}
                      onMouseOut={(e) => e.target.style.background = '#f44336'}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Bulk Actions */}
          <div className="page-card" style={{ marginTop: '30px', textAlign: 'center', padding: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Ready to checkout?</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Add all items from your wishlist to cart and complete your purchase
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => {
                  wishlist.forEach(product => {
                    addItem({
                      name: product.name,
                      type: 'product',
                      price: product.price,
                      quantity: 1,
                    })
                  })
                  navigate('/cart')
                }}
                className="primary"
                style={{ padding: '12px 32px' }}
              >
                Add All to Cart
              </button>
              <button
                onClick={() => navigate('/products')}
                className="ghost"
                style={{ padding: '12px 32px' }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default WishlistPage
