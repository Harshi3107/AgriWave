import { useState } from 'react'

function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    demoType: '',
    preferredTime: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Book Demo Request:', formData)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        demoType: '',
        preferredTime: '',
      })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {!submitted ? (
          <>
            <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: '1.6rem', marginBottom: '8px', color: '#2c281d' }}>
              Book a Demo
            </h2>
            <p style={{ color: '#6b6457', marginBottom: '24px' }}>
              Get a personalized walkthrough of Agriwave features and see how we can help your farm
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 digit number"
                    required
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                  Farm/Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your farm or organization name"
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                  Demo Type
                </label>
                <select
                  name="demoType"
                  value={formData.demoType}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                >
                  <option value="">Select demo type</option>
                  <option value="platform-overview">Platform Overview</option>
                  <option value="product-catalog">Product Catalog</option>
                  <option value="advisory-services">Advisory Services</option>
                  <option value="market-insights">Market Insights</option>
                  <option value="full-demo">Full Demo</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                >
                  <option value="">Select time</option>
                  <option value="9-11am">9:00 - 11:00 AM</option>
                  <option value="11am-1pm">11:00 AM - 1:00 PM</option>
                  <option value="2-4pm">2:00 - 4:00 PM</option>
                  <option value="4-6pm">4:00 - 6:00 PM</option>
                </select>
              </div>

              <button type="submit" className="primary" style={{ marginTop: '8px', padding: '12px 24px' }}>
                Book Demo
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: '1.4rem', marginBottom: '8px', color: '#2c281d' }}>
              Demo Scheduled!
            </h3>
            <p style={{ color: '#6b6457' }}>
              Check your email for confirmation details and joining link.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookDemoModal
