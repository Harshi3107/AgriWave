import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="page-shell">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '500px',
        textAlign: 'center',
        gap: '24px',
      }}>
        <div style={{ fontSize: '5rem', animation: 'float-in 1s ease' }}>
          🚜
        </div>
        <h1 style={{ fontSize: '3rem', margin: '0 0 8px 0', color: '#2c281d' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.8rem', margin: '0 0 12px 0', color: '#5d5547' }}>
          Page not found
        </h2>
        <p style={{
          maxWidth: '400px',
          fontSize: '1rem',
          color: '#6b6457',
          margin: '0 0 24px 0',
        }}>
          The page you're looking for has been plowed under. Let's get you back on track!
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link className="primary" to="/" style={{ maxWidth: '200px' }}>
            Back to home
          </Link>
          <Link className="ghost" to="/categories" style={{ maxWidth: '200px' }}>
            Browse categories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
