import { Link, useParams, useNavigate } from 'react-router-dom'

function AdvisorySubPage() {
  const { topic } = useParams()
  const navigate = useNavigate()

  const advisoryContent = {
    crop: {
      title: 'Crop Advisory',
      icon: '🌾',
      description: 'Expert guidance for crop management and cultivation practices',
      image: 'https://images.unsplash.com/photo-1498847559558-2a76c1a1d1e5?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: '📋', title: 'Crop Planning', desc: 'Get recommendations on crop selection based on soil type, season, and market demand' },
        { icon: '💧', title: 'Irrigation Schedule', desc: 'Optimize water usage with customized irrigation plans for your crops' },
        { icon: '🌱', title: 'Growth Stages', desc: 'Track and manage different growth stages with expert guidance' },
        { icon: '📊', title: 'Yield Optimization', desc: 'Maximize productivity with data-driven farming techniques' },
      ],
      services: [
        'Crop selection consultation',
        'Sowing time recommendations',
        'Intercropping guidance',
        'Harvest time optimization',
        'Crop rotation planning',
      ]
    },
    weather: {
      title: 'Weather Updates',
      icon: '🌤️',
      description: 'Real-time weather forecasts and agricultural alerts',
      image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: '⛈️', title: 'Weather Forecast', desc: '7-day detailed weather predictions for your farm location' },
        { icon: '🚨', title: 'Alert System', desc: 'Get instant alerts for adverse weather conditions' },
        { icon: '🌡️', title: 'Temperature Tracking', desc: 'Monitor daily temperature ranges critical for crop growth' },
        { icon: '💨', title: 'Wind & Rainfall', desc: 'Track wind patterns and rainfall predictions for better planning' },
      ],
      services: [
        'Hourly weather updates',
        'Frost and heatwave alerts',
        'Rainfall predictions',
        'Wind speed monitoring',
        'Humidity tracking',
      ]
    },
    pest: {
      title: 'Pest Management',
      icon: '🐛',
      description: 'Integrated pest management solutions and expert consultations',
      image: 'https://images.unsplash.com/photo-1574895838981-27451cf1a882?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: '🔍', title: 'Pest Identification', desc: 'Identify pests and diseases affecting your crops with photo analysis' },
        { icon: '💊', title: 'Treatment Plans', desc: 'Get customized treatment recommendations for pest control' },
        { icon: '🌿', title: 'Organic Solutions', desc: 'Eco-friendly pest management alternatives for organic farming' },
        { icon: '📅', title: 'Prevention Schedule', desc: 'Preventive measures and spray schedules to avoid infestations' },
      ],
      services: [
        'Pest identification service',
        'Disease diagnosis',
        'Pesticide recommendations',
        'IPM strategy planning',
        'Regular monitoring support',
      ]
    },
    soil: {
      title: 'Soil Health',
      icon: '🌍',
      description: 'Soil testing, analysis, and improvement recommendations',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: '🧪', title: 'Soil Testing', desc: 'Comprehensive soil analysis for NPK, pH, and micronutrients' },
        { icon: '📈', title: 'Health Reports', desc: 'Detailed soil health reports with improvement recommendations' },
        { icon: '🌱', title: 'Nutrient Management', desc: 'Customized fertilizer plans based on soil test results' },
        { icon: '♻️', title: 'Soil Restoration', desc: 'Guidance on improving soil structure and organic matter' },
      ],
      services: [
        'Soil sample collection',
        'Laboratory testing',
        'pH level analysis',
        'Nutrient deficiency reports',
        'Soil improvement plans',
      ]
    },
    market: {
      title: 'Market Prices',
      icon: '💰',
      description: 'Real-time market rates and price trend analysis',
      image: 'https://images.unsplash.com/photo-1487700270215-9519e022edd0?auto=format&fit=crop&w=800&q=80',
      features: [
        { icon: '📊', title: 'Live Prices', desc: 'Real-time market rates for crops, vegetables, and commodities' },
        { icon: '📈', title: 'Price Trends', desc: 'Historical data and trend analysis for better selling decisions' },
        { icon: '🏪', title: 'Mandi Rates', desc: 'Daily rates from nearby mandis and agricultural markets' },
        { icon: '🎯', title: 'Best Time to Sell', desc: 'Recommendations on optimal selling time for maximum profit' },
      ],
      services: [
        'Daily market updates',
        'Price comparison across mandis',
        'Demand forecasting',
        'Seasonal price analysis',
        'Buyer connection support',
      ]
    }
  }

  const content = advisoryContent[topic] || {
    title: 'Advisory Service',
    icon: '📋',
    description: 'Expert agricultural advisory services',
    image: 'https://images.unsplash.com/photo-1519915212910-d9b718456d4b?auto=format&fit=crop&w=800&q=80',
    features: [],
    services: []
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/advisory">
          Back to Advisory
        </Link>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </header>

      {/* Hero Card */}
      <div className="page-card" style={{ background: 'linear-gradient(135deg, #fffdf8 0%, #faf8f2 100%)', padding: '0', overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          alignItems: 'center',
          minHeight: '400px',
        }}>
          <div style={{ padding: '40px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{content.icon}</div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#2c281d' }}>
              {content.title}
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px', color: '#6b6457' }}>
              {content.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                className="primary"
                onClick={() => navigate(`/detail/advisory/${encodeURIComponent(content.title)}`)}
              >
                Get Started
              </button>
              <button
                className="ghost"
                onClick={() => navigate('/contact')}
              >
                Contact Expert
              </button>
            </div>
          </div>
          <div style={{
            backgroundImage: `linear-gradient(135deg, rgba(94, 122, 58, 0.6), rgba(94, 182, 47, 0.6)), url("${content.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            minHeight: '400px',
          }} />
        </div>
      </div>

      {/* Features Grid */}
      {content.features.length > 0 && (
        <div style={{ marginTop: '32px' }}>
          <h2 style={{
            fontFamily: '"Fraunces", serif',
            fontSize: '1.8rem',
            marginBottom: '24px',
            color: '#2c281d',
          }}>
            Key Features
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {content.features.map((feature, idx) => (
              <div key={idx} className="page-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ margin: 0, color: '#6b6457', lineHeight: '1.6' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services List */}
      {content.services.length > 0 && (
        <div className="page-card" style={{ marginTop: '32px', background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)', border: '2px solid #d9c6a3' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#5c4a1f' }}>
            Available Services
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
          }}>
            {content.services.map((service, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ color: '#5eb62f', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                <span style={{ color: '#5c4a1f', fontWeight: '500' }}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="page-card" style={{ marginTop: '32px', textAlign: 'center', background: 'linear-gradient(135deg, #5eb62f 0%, #4a9625 100%)', color: 'white' }}>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', color: 'white' }}>
          Need Expert Assistance?
        </h3>
        <p style={{ fontSize: '1.05rem', marginBottom: '24px', color: 'rgba(255, 255, 255, 0.9)' }}>
          Connect with our agricultural experts for personalized guidance
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={{
              padding: '12px 32px',
              background: 'white',
              color: '#5eb62f',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
          <button
            style={{
              padding: '12px 32px',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/advisory')}
          >
            View All Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdvisorySubPage
