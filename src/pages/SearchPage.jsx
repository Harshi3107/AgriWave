import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { searchCatalog } from '../data/catalog'

function SearchPage() {
  const [params] = useSearchParams()
  const query = params.get('query')
  const navigate = useNavigate()
  const normalizedQuery = query ? query.trim().toLowerCase() : ''
  const results = normalizedQuery
    ? searchCatalog.filter((item) => item.name.toLowerCase().includes(normalizedQuery))
    : searchCatalog

  const typeIcons = {
    bundle: '📦',
    category: '🏷️',
    story: '👨‍🌾',
    clearance: '🔥',
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Search Results</h1>
        <p>Find inputs, bundles, and advisory resources.</p>
        {query ? <span className="page-pill">Searching: "{query}"</span> : null}
      </header>
      
      {query && results.length === 0 ? (
        <div className="page-card" style={{ textAlign: 'center', padding: '48px 20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
          <h3>No results found for "{query}"</h3>
          <p>Try searching with different keywords or browse our categories.</p>
          <button
            className="primary"
            onClick={() => navigate('/categories')}
            style={{ marginTop: '20px' }}
          >
            Browse categories
          </button>
        </div>
      ) : (
        <>
          {query && (
            <div className="page-card" style={{ background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)', border: '2px solid #d9c6a3' }}>
              <p style={{ margin: '0', fontWeight: '600', color: '#5c4a1f' }}>
                Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </p>
            </div>
          )}
          
          <div className="page-grid">
            {results.map((item) => (
              <article key={`${item.type}-${item.name}`} className="page-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.8rem' }}>
                    {typeIcons[item.type] || '📌'}
                  </span>
                  <div>
                    <h3 style={{ margin: '0 0 2px 0' }}>{item.name}</h3>
                    <p style={{
                      margin: '0',
                      fontSize: '0.85rem',
                      color: '#6b6457',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {item.type}
                    </p>
                  </div>
                </div>
                <button
                  className="ghost"
                  onClick={() => navigate(`/detail/${item.type}/${encodeURIComponent(item.name)}`)}
                  style={{ marginTop: '8px' }}
                >
                  View details →
                </button>
              </article>
            ))}
          </div>
        </>
      )}

      {!query && (
        <div className="page-card" style={{ background: 'linear-gradient(135deg, #fffdf8 0%, #faf8f2 100%)' }}>
          <div style={{ textAlign: 'center', padding: '32px 20px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔎</div>
            <h3>Start searching</h3>
            <p style={{ marginBottom: '20px' }}>
              Use the search bar at the top to look up products, bundles, categories, and farmer stories.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#9a9288' }}>
              Try searching for "seeds", "bundles", "stories", or product names
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchPage
