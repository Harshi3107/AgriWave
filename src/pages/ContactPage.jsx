import { Link, useNavigate } from 'react-router-dom'

function ContactPage() {
  const navigate = useNavigate()

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Contact Us</h1>
        <p>Reach the Agriwave support team - we're here to help!</p>
      </header>

      {/* Main contact card */}
      <div className="page-card">
        <div style={{ display: 'grid', gap: '24px' }}>
          <div>
            <h3 style={{
              fontFamily: '"Fraunces", serif',
              fontSize: '1.4rem',
              marginBottom: '8px',
            }}>
              Get in touch
            </h3>
            <p style={{ color: '#6b6457', marginTop: '12px' }}>
              Have questions about our products, services, or account? Our dedicated support team responds within 24 hours.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '16px',
            paddingTop: '24px',
            borderTop: '2px solid #e5dfd0',
          }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📧</div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px', color: '#2c281d' }}>Email</h4>
              <p style={{ margin: '0', color: '#6b6457' }}>hello@agriwave.com</p>
              <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem', color: '#9a9288' }}>
                We respond within 24 hours
              </p>
            </div>

            <div>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📱</div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px', color: '#2c281d' }}>Phone</h4>
              <p style={{ margin: '0', color: '#6b6457' }}>+91 90000 00000</p>
              <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem', color: '#9a9288' }}>
                Available 9 AM - 6 PM IST
              </p>
            </div>

            <div>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💬</div>
              <h4 style={{ fontWeight: '700', marginBottom: '8px', color: '#2c281d' }}>Live Chat</h4>
              <button
                className="ghost"
                onClick={() => navigate('/detail/support/Chat%20request')}
                style={{ padding: '6px 12px', fontSize: '0.9rem', marginTop: '4px' }}
              >
                Start a chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support topics */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{
          fontFamily: '"Fraunces", serif',
          fontSize: '1.8rem',
          marginBottom: '24px',
          color: '#2c281d',
        }}>
          Popular support topics
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {[
            {
              title: 'Account Help',
              desc: 'Password reset, profile updates, and account recovery',
              link: '/support/help',
            },
            {
              title: 'Delivery & Shipping',
              desc: 'Track orders, delivery timelines, and coverage areas',
              link: '/support/delivery',
            },
            {
              title: 'Returns & Refunds',
              desc: 'Return eligibility, pickup scheduling, and refund status',
              link: '/support/returns',
            },
          ].map((topic, idx) => (
            <div key={idx} className="page-card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                {topic.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#6b6457', marginBottom: '12px' }}>
                {topic.desc}
              </p>
              <button
                className="ghost"
                onClick={() => navigate(topic.link)}
                style={{ fontSize: '0.9rem', padding: '8px 16px' }}
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
