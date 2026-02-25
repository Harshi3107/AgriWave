import { Link, useNavigate, useParams } from 'react-router-dom'

const supportCopy = {
  help: 'Find answers to common questions and account support.',
  delivery: 'Track shipments, delivery times, and coverage areas.',
  returns: 'Review return eligibility and schedule pickups.',
}

function SupportPage() {
  const { topic } = useParams()
  const description = supportCopy[topic] || 'Support resources are loading soon.'
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Support</h1>
        <p>{description}</p>
      </header>
      <div className="page-card">
        <h3>{topic ? topic.toUpperCase() : 'HELP'}</h3>
        <p>Detailed support content will appear after backend integration.</p>
        <button className="primary" onClick={() => navigate('/contact')}>
          Contact support
        </button>
      </div>
    </div>
  )
}

export default SupportPage
