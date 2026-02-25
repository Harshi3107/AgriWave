import { Link } from 'react-router-dom'

function InfoPage({ title, summary, detailTitle, detailText, linkTo, linkLabel }) {
  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>{title}</h1>
        {summary ? <p>{summary}</p> : null}
      </header>
      <div className="page-card">
        <h3>{detailTitle || `Explore ${title}`}</h3>
        <p>{detailText || 'More details will be added soon.'}</p>
        {linkTo && linkLabel ? (
          <Link className="ghost" to={linkTo}>
            {linkLabel}
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default InfoPage
