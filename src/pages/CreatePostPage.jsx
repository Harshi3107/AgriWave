import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function CreatePostPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    postType: 'question',
    title: '',
    content: '',
    category: 'Crop Management',
    tags: ''
  })

  const postTypes = [
    { value: 'question', label: '❓ Question', description: 'Ask for advice or help' },
    { value: 'success', label: '🎉 Success Story', description: 'Share your achievements' },
    { value: 'discussion', label: '💬 Discussion', description: 'Start a conversation' },
    { value: 'suggestion', label: '💡 Suggestion', description: 'Propose an idea' }
  ]

  const categories = [
    'Crop Management',
    'Plant Disease',
    'Pest Control',
    'Soil Health',
    'Irrigation',
    'Farm Equipment',
    'Market Prices',
    'Success Story',
    'Expert Advice',
    'Platform Suggestion',
    'General Discussion'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in both title and content')
      return
    }

    // In a real app, this would submit to backend
    console.log('Post created:', formData)
    alert('Post created successfully! 🎉')
    navigate('/vedika')
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/vedika">
          ← Back to Vedika
        </Link>
        <h1>Create New Post</h1>
        <p>Share your questions, experiences, or insights with the farming community</p>
      </header>

      <div className="page-card" style={{ maxWidth: '95%', width: '100%', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          {/* Post Type Selection */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '12px', 
              fontWeight: '600',
              color: '#2c281d',
              fontSize: '1rem'
            }}>
              Post Type *
            </label>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px'
            }}>
              {postTypes.map(type => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => handleChange('postType', type.value)}
                  style={{
                    padding: '16px',
                    background: formData.postType === type.value ? '#5eb62f' : 'white',
                    color: formData.postType === type.value ? 'white' : '#2c281d',
                    border: formData.postType === type.value ? 'none' : '2px solid #e5dfd0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    if (formData.postType !== type.value) {
                      e.target.style.borderColor = '#5eb62f'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (formData.postType !== type.value) {
                      e.target.style.borderColor = '#e5dfd0'
                    }
                  }}
                >
                  <div style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '4px' }}>
                    {type.label}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    opacity: formData.postType === type.value ? 0.9 : 0.7
                  }}>
                    {type.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#2c281d',
              fontSize: '1rem'
            }}>
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter a clear and descriptive title..."
              maxLength={150}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '2px solid #e5dfd0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#5eb62f'}
              onBlur={(e) => e.target.style.borderColor = '#e5dfd0'}
              required
            />
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#6b6457', 
              marginTop: '4px',
              textAlign: 'right'
            }}>
              {formData.title.length}/150 characters
            </div>
          </div>

          {/* Category */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#2c281d',
              fontSize: '1rem'
            }}>
              Category *
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '2px solid #e5dfd0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                cursor: 'pointer',
                background: 'white'
              }}
              required
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#2c281d',
              fontSize: '1rem'
            }}>
              Content *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Share your detailed question, experience, or thoughts here...&#10;&#10;Tips:&#10;• Be clear and specific&#10;• Include relevant details&#10;• Use simple language&#10;• Add context about your location/crop if relevant"
              rows={12}
              maxLength={5000}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '2px solid #e5dfd0',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                lineHeight: '1.6',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#5eb62f'}
              onBlur={(e) => e.target.style.borderColor = '#e5dfd0'}
              required
            />
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#6b6457', 
              marginTop: '4px',
              textAlign: 'right'
            }}>
              {formData.content.length}/5000 characters
            </div>
          </div>

          {/* Tags */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '600',
              color: '#2c281d',
              fontSize: '1rem'
            }}>
              Tags (Optional)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => handleChange('tags', e.target.value)}
              placeholder="e.g., wheat, organic, pest control (comma separated)"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '2px solid #e5dfd0',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#6b6457', 
              marginTop: '4px'
            }}>
              Add 2-5 tags to help others find your post
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'flex-end',
            paddingTop: '16px',
            borderTop: '2px solid #e5dfd0'
          }}>
            <button
              type="button"
              onClick={() => navigate('/vedika')}
              style={{
                padding: '12px 32px',
                background: 'white',
                color: '#6b6457',
                border: '2px solid #e5dfd0',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f5ead0'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="primary"
              style={{
                padding: '12px 32px',
                background: '#5eb62f',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#4fa426'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#5eb62f'
              }}
            >
              📤 Publish Post
            </button>
          </div>
        </form>
      </div>

      {/* Helpful Tips Card */}
      <div className="page-card" style={{ 
        maxWidth: '95%',
        width: '100%',
        margin: '24px auto 0',
        background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)',
        border: '2px solid #d9c6a3'
      }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#5c4a1f' }}>
          💡 Tips for Great Posts
        </h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          display: 'grid',
          gap: '8px'
        }}>
          <li style={{ paddingLeft: '24px', position: 'relative', color: '#5c4a1f' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Be respectful and friendly to other community members
          </li>
          <li style={{ paddingLeft: '24px', position: 'relative', color: '#5c4a1f' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Include specific details that help others understand your situation
          </li>
          <li style={{ paddingLeft: '24px', position: 'relative', color: '#5c4a1f' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Use proper language and avoid all caps
          </li>
          <li style={{ paddingLeft: '24px', position: 'relative', color: '#5c4a1f' }}>
            <span style={{ position: 'absolute', left: 0 }}>✓</span>
            Search existing posts to see if your question was already answered
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CreatePostPage
