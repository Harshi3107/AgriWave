import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignInPage() {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState('farmer')
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!formState.email || !formState.password) {
      return
    }
    setSubmitted(true)
    window.localStorage.setItem('agriwaveRole', role)
    setTimeout(() => navigate(`/dashboard/${role}`), 1000)
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Sign In</h1>
        <p>Access your orders, advisory plans, and saved bundles.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', maxWidth: '1000px' }}>
        {/* Form Card */}
        <div className="page-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
              <div className="success-banner">
                <p style={{ margin: 0, fontSize: '1.1rem' }}>Sign in successful!</p>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>Redirecting...</p>
              </div>
            </div>
          ) : (
            <form className="form-grid" onSubmit={handleSubmit}>
              <div>
                <h3 style={{ marginBottom: '24px' }}>Welcome back</h3>
                <p style={{ color: '#6b6457', marginBottom: '20px' }}>
                  Sign in to access personalized product recommendations and order history.
                </p>
              </div>
              
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
                  placeholder="Enter your password"
                  required
                />
              </label>

              <label className="form-field">
                Role
                <select
                  className="input"
                  name="role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  required
                >
                  <option value="admin">Admin</option>
                  <option value="farmer">Farmer</option>
                  <option value="expert">Agricultural Expert</option>
                  <option value="public">Public</option>
                </select>
              </label>

              <button className="primary" type="submit" style={{ marginTop: '8px' }}>
                Continue to dashboard
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6b6457', margin: '16px 0 0 0' }}>
                Don't have an account?{' '}
                <Link to="/create-account" style={{ color: '#5e7a3a', fontWeight: '600', textDecoration: 'underline' }}>
                  Create one
                </Link>
              </p>
            </form>
          )}
        </div>

        {/* Image Section */}
        <div style={{
          backgroundImage: 'linear-gradient(135deg, rgba(94, 122, 58, 0.7), rgba(94, 182, 47, 0.7)), url("https://images.unsplash.com/photo-1488459716781-6818f2af28cc?auto=format&fit=crop&w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          height: '400px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '32px',
          color: 'white',
          position: 'relative',
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', margin: 0 }}>Farm smarter with Agriwave</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Access tailored advice and curated products for your crops.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
