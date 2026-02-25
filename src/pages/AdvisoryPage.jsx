import { Link, useNavigate } from 'react-router-dom'

function AdvisoryPage() {
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Advisory Services</h1>
        <p>Book agronomist calls, crop calendars, and weather alerts.</p>
      </header>

      {/* Main CTA Card */}
      <div className="page-card" style={{ background: 'linear-gradient(135deg, #fffdf8 0%, #faf8f2 100%)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Get expert field guidance</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Share your crop stage details and receive personalized recommendations from certified agronomists in your region.
            </p>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#5eb62f', fontWeight: 'bold' }}>✓</span>
                <span>Tailored fertilizer and pesticide plans</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#5eb62f', fontWeight: 'bold' }}>✓</span>
                <span>Weather-based crop management tips</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#5eb62f', fontWeight: 'bold' }}>✓</span>
                <span>Follow-up support throughout the season</span>
              </div>
            </div>
            <button
              className="primary"
              onClick={() => navigate('/detail/advisory/Field%20call')}
              style={{ marginTop: '24px' }}
            >
              Schedule now
            </button>
          </div>
          <div style={{
            backgroundImage: 'linear-gradient(135deg, rgba(94, 122, 58, 0.7), rgba(94, 182, 47, 0.7)), url("https://images.unsplash.com/photo-1473093295203-cad00df16e50?auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '16px',
            height: '320px',
            minHeight: '300px',
          }} />
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ marginTop: '32px' }}>
        <h2 style={{
          fontFamily: '"Fraunces", serif',
          fontSize: '1.8rem',
          marginBottom: '24px',
          color: '#2c281d',
        }}>
          Why choose Agriwave Advisory
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {[
            {
              icon: '📱',
              title: 'Quick booking',
              desc: 'Schedule a call in just 2 minutes with available experts',
            },
            {
              icon: '👨‍🌾',
              title: 'Local experts',
              desc: 'Agronomists familiar with your region and crop patterns',
            },
            {
              icon: '📊',
              title: 'Data-driven',
              desc: 'Recommendations based on soil tests and weather data',
            },
            {
              icon: '💬',
              title: 'Follow-up',
              desc: 'Continuous support messages throughout growing season',
            },
          ].map((item, idx) => (
            <div key={idx} className="page-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#6b6457' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdvisoryPage
