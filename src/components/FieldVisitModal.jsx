import { useState } from 'react'

function FieldVisitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    purpose: '',
    preferredDate: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log('Field Visit Request:', formData)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        purpose: '',
        preferredDate: '',
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
              Schedule a Field Visit
            </h2>
            <p style={{ color: '#6b6457', marginBottom: '24px' }}>
              Our agricultural experts will visit your farm to provide personalized guidance
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
                  Farm Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City/District, State"
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                  Purpose of Visit
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                >
                  <option value="">Select a purpose</option>
                  <option value="crop-advisory">Crop Advisory</option>
                  <option value="soil-testing">Soil Testing</option>
                  <option value="pest-management">Pest Management</option>
                  <option value="product-demo">Product Demonstration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#2c281d' }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #d0d0d0', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>

              <button type="submit" className="primary" style={{ marginTop: '8px', padding: '12px 24px' }}>
                Schedule Visit
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: '1.4rem', marginBottom: '8px', color: '#2c281d' }}>
              Visit Scheduled!
            </h3>
            <p style={{ color: '#6b6457' }}>
              Our team will contact you soon to confirm the details.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FieldVisitModal
