import { Link, useParams, useNavigate } from 'react-router-dom'

function SchemesSubPage() {
  const { topic } = useParams()
  const navigate = useNavigate()

  const schemesContent = {
    government: {
      title: 'Government Schemes',
      icon: '🏛️',
      description: 'Access central and state government agricultural schemes',
      image: 'https://images.unsplash.com/photo-1592888889488-0d1cbc23c6c3?auto=format&fit=crop&w=800&q=80',
      schemes: [
        {
          name: 'PM-KISAN',
          fullName: 'Pradhan Mantri Kisan Samman Nidhi',
          benefit: '₹6,000 per year',
          description: 'Direct income support to all farmer families across the country',
          eligibility: 'All landholding farmers',
          docs: ['Aadhaar Card', 'Land Records', 'Bank Account']
        },
        {
          name: 'PMFBY',
          fullName: 'Pradhan Mantri Fasal Bima Yojana',
          benefit: 'Crop Insurance Coverage',
          description: 'Comprehensive crop insurance scheme covering yield losses',
          eligibility: 'All farmers including sharecroppers and tenant farmers',
          docs: ['Land Records', 'Sowing Certificate', 'Bank Account']
        },
        {
          name: 'KCC',
          fullName: 'Kisan Credit Card',
          benefit: 'Credit up to ₹3 lakhs',
          description: 'Short-term credit for crop production and related expenses',
          eligibility: 'All farmers with cultivable land',
          docs: ['Land Records', 'Identity Proof', 'Address Proof']
        },
        {
          name: 'PKVY',
          fullName: 'Paramparagat Krishi Vikas Yojana',
          benefit: '₹50,000 per hectare',
          description: 'Promotes organic farming through cluster approach',
          eligibility: 'Farmer groups practicing organic farming',
          docs: ['Group Registration', 'Land Documents', 'Training Certificate']
        },
      ]
    },
    subsidy: {
      title: 'Subsidy Programs',
      icon: '💵',
      description: 'Financial assistance programs for farmers',
      image: 'https://images.unsplash.com/photo-1614953382498-ee9a4d77ad37?auto=format&fit=crop&w=800&q=80',
      programs: [
        {
          name: 'Fertilizer Subsidy',
          subsidy: 'Up to 50% off',
          description: 'Subsidized fertilizers at discounted rates through registered dealers',
          benefit: 'Reduced input costs for crop nutrition'
        },
        {
          name: 'Seed Subsidy',
          subsidy: 'Up to 50% off',
          description: 'Quality seeds at subsidized rates for improved crop production',
          benefit: 'Access to high-yielding variety seeds at lower cost'
        },
        {
          name: 'Drip Irrigation Subsidy',
          subsidy: 'Up to 90% subsidy',
          description: 'Financial assistance for installation of drip irrigation systems',
          benefit: 'Water conservation and improved irrigation efficiency'
        },
        {
          name: 'Farm Mechanization',
          subsidy: 'Up to 50% subsidy',
          description: 'Subsidy on tractors, tillers, and other farm equipment',
          benefit: 'Reduced labor costs and improved farming efficiency'
        },
        {
          name: 'Solar Pump Subsidy',
          subsidy: 'Up to 90% subsidy',
          description: 'Solar-powered irrigation pumps at subsidized rates',
          benefit: 'Reduced electricity costs and sustainable farming'
        },
      ]
    },
    loans: {
      title: 'Loan Schemes',
      icon: '🏦',
      description: 'Agricultural credit facilities and financing options',
      image: 'https://images.unsplash.com/photo-1628148524233-30aeb4ecc16d?auto=format&fit=crop&w=800&q=80',
      loans: [
        {
          name: 'Crop Loan',
          rate: '7% interest',
          amount: 'Up to ₹3 lakhs',
          description: 'Short-term loans for crop cultivation expenses',
          features: ['Interest subvention', 'Flexible repayment', 'No collateral required'],
          tenure: '1 year'
        },
        {
          name: 'Agricultural Term Loan',
          rate: '9-11% interest',
          amount: 'Up to ₹50 lakhs',
          description: 'Long-term loans for farm development and equipment purchase',
          features: ['Collateral-based', 'Tax benefits', 'Grace period available'],
          tenure: '5-7 years'
        },
        {
          name: 'Dairy Loan',
          rate: '8% interest',
          amount: 'Up to ₹10 lakhs',
          description: 'Loans for dairy farming and cattle purchase',
          features: ['Subsidized rates', 'Livestock insurance', 'Training support'],
          tenure: '3-5 years'
        },
        {
          name: 'Horticulture Loan',
          rate: '9% interest',
          amount: 'Up to ₹25 lakhs',
          description: 'Financing for fruit and vegetable cultivation',
          features: ['Grace period', 'Flexible repayment', 'Technical guidance'],
          tenure: '7-10 years'
        },
      ]
    },
    insurance: {
      title: 'Insurance Schemes',
      icon: '🛡️',
      description: 'Protect your crops and livestock with comprehensive insurance',
      image: 'https://images.unsplash.com/photo-1523288915684-7ad2ca27f1d7?auto=format&fit=crop&w=800&q=80',
      policies: [
        {
          name: 'Crop Insurance',
          coverage: 'Full crop value',
          premium: 'Only 2% of sum insured',
          description: 'Coverage against natural calamities, pests, and diseases',
          covers: ['Drought', 'Flood', 'Hailstorm', 'Pest attack', 'Fire'],
          claim: 'Quick claim settlement process'
        },
        {
          name: 'Livestock Insurance',
          coverage: 'Up to market value',
          premium: 'Subsidized rates',
          description: 'Insurance for cattle, buffalo, sheep, goat, and poultry',
          covers: ['Death due to disease', 'Accidents', 'Natural disasters', 'Surgery expenses'],
          claim: 'Hassle-free claims'
        },
        {
          name: 'Farm Equipment Insurance',
          coverage: 'Full equipment value',
          premium: 'Competitive rates',
          description: 'Protection for tractors, harvesters, and other farm machinery',
          covers: ['Fire', 'Theft', 'Accidents', 'Natural calamities', 'Transit damage'],
          claim: 'Cashless repairs available'
        },
        {
          name: 'Harvest Insurance',
          coverage: 'Expected harvest value',
          premium: 'Low premium rates',
          description: 'Insurance against post-harvest losses',
          covers: ['Storage losses', 'Transit damage', 'Price fluctuation', 'Quality deterioration'],
          claim: 'Fast track settlements'
        },
      ]
    },
    training: {
      title: 'Training Programs',
      icon: '📚',
      description: 'Skill development and capacity building for farmers',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da068326?auto=format&fit=crop&w=800&q=80',
      programs: [
        {
          name: 'Modern Farming Techniques',
          duration: '5 days',
          mode: 'Offline + Online',
          description: 'Learn latest farming methods, precision agriculture, and crop management',
          topics: ['Soil health management', 'Integrated farming', 'Water conservation', 'Crop rotation'],
          certification: 'Government recognized certificate',
          fee: 'Free of cost'
        },
        {
          name: 'Organic Farming Certification',
          duration: '10 days',
          mode: 'Offline',
          description: 'Complete training on organic farming practices and certification process',
          topics: ['Organic inputs', 'Composting', 'Pest management', 'Certification process'],
          certification: 'Organic farming certificate',
          fee: 'Subsidized'
        },
        {
          name: 'Farm Mechanization',
          duration: '3 days',
          mode: 'Hands-on',
          description: 'Training on operation and maintenance of farm machinery',
          topics: ['Tractor operation', 'Equipment maintenance', 'Safety protocols', 'Troubleshooting'],
          certification: 'Operator license',
          fee: 'Free of cost'
        },
        {
          name: 'Digital Agriculture',
          duration: 'Self-paced',
          mode: 'Online',
          description: 'Learn to use technology for smart farming',
          topics: ['Mobile apps', 'Weather monitoring', 'Market linkage', 'Online payments'],
          certification: 'Digital literacy certificate',
          fee: 'Free of cost'
        },
        {
          name: 'Value Addition',
          duration: '7 days',
          mode: 'Workshop',
          description: 'Processing, packaging, and marketing of agricultural products',
          topics: ['Food processing', 'Packaging techniques', 'Quality standards', 'Marketing'],
          certification: 'Value addition certificate',
          fee: 'Nominal charges'
        },
      ]
    }
  }

  const content = schemesContent[topic] || {
    title: 'Schemes & Programs',
    icon: '📋',
    description: 'Explore agricultural schemes and programs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab6c6ddb0?auto=format&fit=crop&w=800&q=80'
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </header>

      {/* Hero Section */}
      <div className="page-card" style={{ background: 'linear-gradient(135deg, #fffdf8 0%, #faf8f2 100%)', padding: '0', overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          alignItems: 'center',
          minHeight: '350px',
        }}>
          <div style={{ padding: '40px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{content.icon}</div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#2c281d' }}>
              {content.title}
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px', color: '#6b6457' }}>
              {content.description}
            </p>
            <button
              className="primary"
              onClick={() => navigate('/contact')}
            >
              Apply Now
            </button>
          </div>
          <div style={{
            backgroundImage: `linear-gradient(135deg, rgba(94, 122, 58, 0.6), rgba(94, 182, 47, 0.6)), url("${content.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            minHeight: '350px',
          }} />
        </div>
      </div>

      {/* Government Schemes */}
      {content.schemes && (
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#2c281d' }}>
            Available Schemes
          </h2>
          {content.schemes.map((scheme, idx) => (
            <div key={idx} className="page-card" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '4px', color: '#2c281d' }}>
                    {scheme.name}
                  </h3>
                  <p style={{ margin: '0 0 8px 0', color: '#6b6457', fontSize: '0.95rem', fontStyle: 'italic' }}>
                    {scheme.fullName}
                  </p>
                </div>
                <span style={{
                  padding: '8px 16px',
                  background: '#5eb62f',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {scheme.benefit}
                </span>
              </div>
              <p style={{ margin: '0 0 16px 0', color: '#6b6457', lineHeight: '1.6' }}>
                {scheme.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#5c4a1f' }}>Eligibility:</p>
                  <p style={{ margin: 0, color: '#6b6457' }}>{scheme.eligibility}</p>
                </div>
                <div>
                  <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#5c4a1f' }}>Required Documents:</p>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#6b6457' }}>
                    {scheme.docs.map((doc, didx) => (
                      <li key={didx}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subsidy Programs */}
      {content.programs && (
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#2c281d' }}>
            Subsidy Programs
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {content.programs.map((program, idx) => (
              <div key={idx} className="page-card" style={{ background: 'linear-gradient(135deg, #fffdf8 0%, #faf8f2 100%)' }}>
                <div style={{
                  background: '#5eb62f',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '12px',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  {program.subsidy}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#2c281d' }}>
                  {program.name}
                </h3>
                <p style={{ margin: '0 0 12px 0', color: '#6b6457', lineHeight: '1.6' }}>
                  {program.description}
                </p>
                <div style={{
                  padding: '12px',
                  background: 'rgba(94, 182, 47, 0.1)',
                  borderRadius: '6px',
                  borderLeft: '3px solid #5eb62f'
                }}>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#2f3a25', fontWeight: '500' }}>
                    ✓ {program.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loan Schemes */}
      {content.loans && (
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#2c281d' }}>
            Agricultural Loan Schemes
          </h2>
          {content.loans.map((loan, idx) => (
            <div key={idx} className="page-card" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#2c281d' }}>
                    {loan.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#5eb62f', fontWeight: '600' }}>
                      📊 {loan.rate}
                    </span>
                    <span style={{ color: '#5eb62f', fontWeight: '600' }}>
                      💰 {loan.amount}
                    </span>
                    <span style={{ color: '#5eb62f', fontWeight: '600' }}>
                      ⏱️ {loan.tenure}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ margin: '0 0 16px 0', color: '#6b6457', lineHeight: '1.6' }}>
                {loan.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {loan.features.map((feature, fidx) => (
                  <span key={fidx} style={{
                    padding: '6px 12px',
                    background: '#f5ead0',
                    color: '#5c4a1f',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    ✓ {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insurance Policies */}
      {content.policies && (
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#2c281d' }}>
            Insurance Policies
          </h2>
          {content.policies.map((policy, idx) => (
            <div key={idx} className="page-card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, #fffdf8 0%, #faf8f2 100%)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: '#2c281d' }}>
                {policy.name}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: '#6b6457' }}>Coverage</p>
                  <p style={{ margin: 0, fontWeight: '600', color: '#5eb62f', fontSize: '1.1rem' }}>{policy.coverage}</p>
                </div>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: '#6b6457' }}>Premium</p>
                  <p style={{ margin: 0, fontWeight: '600', color: '#5eb62f', fontSize: '1.1rem' }}>{policy.premium}</p>
                </div>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: '#6b6457' }}>Claim Process</p>
                  <p style={{ margin: 0, fontWeight: '600', color: '#5eb62f', fontSize: '1.1rem' }}>{policy.claim}</p>
                </div>
              </div>
              <p style={{ margin: '0 0 16px 0', color: '#6b6457', lineHeight: '1.6' }}>
                {policy.description}
              </p>
              <div>
                <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#5c4a1f' }}>What's Covered:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {policy.covers.map((cover, cidx) => (
                    <span key={cidx} style={{
                      padding: '4px 12px',
                      background: '#e8f5e9',
                      color: '#2e7d32',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      ✓ {cover}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Training Programs */}
      {content.programs && topic === 'training' && (
        <div style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: '#2c281d' }}>
            Available Training Programs
          </h2>
          {content.programs.map((program, idx) => (
            <div key={idx} className="page-card" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#2c281d' }}>
                    {program.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.95rem' }}>
                    <span style={{ color: '#6b6457' }}>
                      ⏱️ <strong>{program.duration}</strong>
                    </span>
                    <span style={{ color: '#6b6457' }}>
                      📍 <strong>{program.mode}</strong>
                    </span>
                    <span style={{ color: '#5eb62f', fontWeight: '600' }}>
                      💰 {program.fee}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ margin: '0 0 16px 0', color: '#6b6457', lineHeight: '1.6' }}>
                {program.description}
              </p>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#5c4a1f' }}>Topics Covered:</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                  {program.topics.map((topic, tidx) => (
                    <div key={tidx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: '#5eb62f', fontWeight: 'bold' }}>•</span>
                      <span style={{ color: '#6b6457' }}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{
                padding: '12px',
                background: 'linear-gradient(135deg, rgba(94, 182, 47, 0.1), rgba(94, 122, 58, 0.1))',
                borderRadius: '6px',
                borderLeft: '3px solid #5eb62f'
              }}>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#2f3a25', fontWeight: '500' }}>
                  🎓 Certification: {program.certification}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="page-card" style={{ marginTop: '32px', textAlign: 'center', background: 'linear-gradient(135deg, #5eb62f 0%, #4a9625 100%)', color: 'white' }}>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', color: 'white' }}>
          Need Help with Application?
        </h3>
        <p style={{ fontSize: '1.05rem', marginBottom: '24px', color: 'rgba(255, 255, 255, 0.9)' }}>
          Our experts can help you apply for schemes and programs
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
            Get Assistance
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
            onClick={() => navigate('/support/application')}
          >
            View FAQs
          </button>
        </div>
      </div>
    </div>
  )
}

export default SchemesSubPage
