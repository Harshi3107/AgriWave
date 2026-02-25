import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateAccountPage() {
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { fullName, phone, email, password } = formState
    if (!fullName || !phone || !email || !password) {
      return
    }
    setSubmitted(true)
    setTimeout(() => navigate('/advisory'), 1000)
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Create Account</h1>
        <p>Set up your farm profile to unlock curated inputs and personalized advice.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', maxWidth: '1000px' }}>
        {/* Image Section */}
        <div style={{
          backgroundImage: 'linear-gradient(135deg, rgba(94, 122, 58, 0.7), rgba(94, 182, 47, 0.7)), url("https://images.unsplash.com/photo-1640503028192-e5ed1e4f5d38?auto=format&fit=crop&w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          height: '500px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '32px',
          color: 'white',
          position: 'relative',
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', margin: 0 }}>Join 120k+ farmers</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Growing better with smarter farming solutions</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="page-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
              <div className="success-banner">
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Account created successfully!</p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>Redirecting to advisory...</p>
              </div>
            </div>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div>
                <h3 style={{ marginBottom: '24px' }}>Get started farming smarter</h3>
              </div>

              <label className="form-field">
                Full name
                <input
                  className="input"
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="form-field">
                Phone number
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 00000"
                  required
                />
              </label>

              <label className="form-field">
                Email address
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@farmmail.com"
                  required
                />
              </label>

              <label className="form-field">
                Password
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Create a secure password"
                  required
                />
              </label>

              <button className="primary" type="submit" style={{ marginTop: '8px' }}>
                Create account
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6b6457', margin: '16px 0 0 0' }}>
                Already have an account?{' '}
                <Link to="/sign-in" style={{ color: '#5e7a3a', fontWeight: '600', textDecoration: 'underline' }}>
                  Sign in
                </Link>
              </p>

              <p style={{
                fontSize: '0.8rem',
                color: '#9a9288',
                margin: '16px 0 0 0',
                padding: '12px',
                background: 'rgba(94, 182, 47, 0.05)',
                borderRadius: '8px',
                borderLeft: '3px solid #5eb62f',
              }}>
                ✓ Your data is secure and only used to personalize your farming experience
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateAccountPage
