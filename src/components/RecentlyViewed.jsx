import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function RecentlyViewed() {
  const [isVisible, setIsVisible] = useState(false)
  const [recentProducts, setRecentProducts] = useState([
    {
      id: 1,
      name: 'Indam 5 Chilli Seeds – High-...',
      image: 'https://images.unsplash.com/photo-1585518419759-872f8a5e071f?auto=format&fit=crop&w=200&q=80'
    }
  ])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="recently-viewed">
      <div className="recently-viewed-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
        </svg>
        <span>Recently Viewed</span>
      </div>
      <div className="recently-viewed-list">
        {recentProducts.map((product) => (
          <Link 
            key={product.id} 
            to={`/detail/product/${encodeURIComponent(product.name)}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div className="recently-viewed-item">
              <div className="recently-viewed-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ cursor: 'pointer' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              <p className="recently-viewed-name">{product.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentlyViewed
