import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { stories } from '../data/catalog'

// Story images from Unsplash
const storyImages = {
  'Ravi, Maharashtra': 'https://images.unsplash.com/photo-1556075798-4825dfacccf1?auto=format&fit=crop&w=600&q=80',
  'Anita, Karnataka': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
  'Iqbal, Punjab': 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80',
}

function StoriesPage() {
  const [params] = useSearchParams()
  const name = params.get('name')
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Farmer stories</h1>
        <p>Learn how growers improved outcomes with Agriwave.</p>
        {name ? <span className="page-pill">Reading: {name}</span> : null}
      </header>
      <div className="page-grid">
        {stories.map((item) => (
          <article key={item.name} className="page-card">
            {storyImages[item.name] && (
              <img
                className="page-card-image"
                src={storyImages[item.name]}
                alt={item.name}
              />
            )}
            <h3>{item.name}</h3>
            <p>{item.note}</p>
            <p style={{ fontSize: '0.95rem', fontWeight: '500', color: '#5e7a3a', marginTop: '4px' }}>
              ✓ {item.outcome}
            </p>
            <button
              className="ghost"
              onClick={() => navigate(`/detail/story/${encodeURIComponent(item.name)}`)}
            >
              Read full story
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default StoriesPage
