import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function VedikaPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')

  const posts = [
    {
      id: 1,
      type: 'question',
      author: 'Ramesh Kumar',
      location: 'Punjab',
      avatar: '👨‍🌾',
      title: 'Best time to sow wheat seeds in Punjab region?',
      content: 'I am planning to sow wheat this season. What is the optimal time for sowing in Punjab? Should I wait for more rainfall or start now?',
      category: 'Crop Management',
      upvotes: 45,
      comments: 12,
      timeAgo: '2 hours ago',
      tags: ['wheat', 'punjab', 'sowing'],
      answered: true
    },
    {
      id: 2,
      type: 'success',
      author: 'Lakshmi Devi',
      location: 'Karnataka',
      avatar: '👩‍🌾',
      title: 'Increased tomato yield by 60% using organic methods!',
      content: 'After switching to organic farming and following expert advice from this community, my tomato yield increased dramatically. Here\'s what I did: Used vermicompost, neem oil for pest control, and drip irrigation. Happy to share more details!',
      category: 'Success Story',
      upvotes: 289,
      comments: 34,
      timeAgo: '5 hours ago',
      tags: ['organic', 'tomato', 'success'],
      image: 'https://images.unsplash.com/photo-1571407614e0c4d1bb0f63e73b7032fc7?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      type: 'discussion',
      author: 'Dr. Priya Sharma',
      location: 'Expert',
      avatar: '👩‍🔬',
      title: 'Integrated Pest Management: A Complete Guide',
      content: 'As an agricultural expert, I want to share a comprehensive guide on IPM. This approach reduces chemical pesticide use by 70% while maintaining crop health. Key strategies include: crop rotation, biological pest control, and regular monitoring.',
      category: 'Expert Advice',
      upvotes: 567,
      comments: 89,
      timeAgo: '1 day ago',
      tags: ['ipm', 'pestcontrol', 'expert'],
      verified: true
    },
    {
      id: 4,
      type: 'question',
      author: 'Suresh Patil',
      location: 'Maharashtra',
      avatar: '👨‍🌾',
      title: 'White spots on cotton leaves - what disease is this?',
      content: 'I noticed white powdery spots appearing on my cotton crop leaves. The spots are spreading quickly. Can someone help identify the disease and suggest treatment?',
      category: 'Plant Disease',
      upvotes: 23,
      comments: 8,
      timeAgo: '3 hours ago',
      tags: ['cotton', 'disease', 'help'],
      answered: false
    },
    {
      id: 5,
      type: 'suggestion',
      author: 'Arjun Singh',
      location: 'Rajasthan',
      avatar: '👨‍🌾',
      title: 'Feature Request: Add market price alerts',
      content: 'It would be great if we could get SMS/app notifications when crop prices reach a certain level. This would help us decide the best time to sell our produce.',
      category: 'Platform Suggestion',
      upvotes: 156,
      comments: 22,
      timeAgo: '12 hours ago',
      tags: ['feature', 'marketprices', 'suggestion']
    },
    {
      id: 6,
      type: 'discussion',
      author: 'Meena Kumari',
      location: 'Gujarat',
      avatar: '👩‍🌾',
      title: 'Anyone using solar water pumps? Share your experience',
      content: 'I\'m considering installing solar pumps for irrigation. Looking for feedback from farmers who are already using them. What are the costs, benefits, and challenges?',
      category: 'Farm Equipment',
      upvotes: 78,
      comments: 45,
      timeAgo: '8 hours ago',
      tags: ['solar', 'irrigation', 'equipment']
    },
    {
      id: 7,
      type: 'success',
      author: 'Vijay Reddy',
      location: 'Telangana',
      avatar: '👨‍🌾',
      title: 'Doubled income with multi-crop farming strategy',
      content: 'Switched from single crop to intercropping cotton with pulses. Not only did my income double, but soil health also improved significantly. The risk of total crop failure reduced too!',
      category: 'Success Story',
      upvotes: 445,
      comments: 67,
      timeAgo: '2 days ago',
      tags: ['intercropping', 'income', 'success']
    },
    {
      id: 8,
      type: 'question',
      author: 'Santosh Kumar',
      location: 'Bihar',
      avatar: '👨‍🌾',
      title: 'Government subsidy for drip irrigation - how to apply?',
      content: 'I heard there\'s 90% subsidy available for drip irrigation systems. Can someone guide me through the application process? What documents are needed?',
      category: 'Government Schemes',
      upvotes: 91,
      comments: 15,
      timeAgo: '6 hours ago',
      tags: ['subsidy', 'dripirrigation', 'government'],
      answered: true
    }
  ]

  const categories = [
    { name: 'All Posts', value: 'all', icon: '📋', count: posts.length },
    { name: 'Questions', value: 'question', icon: '❓', count: posts.filter(p => p.type === 'question').length },
    { name: 'Success Stories', value: 'success', icon: '⭐', count: posts.filter(p => p.type === 'success').length },
    { name: 'Discussions', value: 'discussion', icon: '💬', count: posts.filter(p => p.type === 'discussion').length },
    { name: 'Suggestions', value: 'suggestion', icon: '💡', count: posts.filter(p => p.type === 'suggestion').length },
  ]

  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeTab)

  const getTypeColor = (type) => {
    const colors = {
      question: '#2196F3',
      success: '#4CAF50',
      discussion: '#FF9800',
      suggestion: '#9C27B0'
    }
    return colors[type] || '#757575'
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Vedika - Farmer Community</h1>
        <p>Connect, share, and learn from fellow farmers and agricultural experts</p>
      </header>

      {/* Hero Section */}
      <div className="page-card" style={{ 
        background: 'linear-gradient(135deg, #5eb62f 0%, #4a9625 100%)', 
        color: 'white',
        padding: '32px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'white' }}>
              🌾 Welcome to Vedika
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '16px', opacity: 0.95 }}>
              Join thousands of farmers sharing knowledge, experiences, and success stories
            </p>
            <div style={{ display: 'flex', gap: '24px', fontSize: '0.95rem' }}>
              <div>
                <strong style={{ fontSize: '1.4rem', display: 'block' }}>50K+</strong>
                <span style={{ opacity: 0.9 }}>Farmers</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.4rem', display: 'block' }}>500+</strong>
                <span style={{ opacity: 0.9 }}>Experts</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.4rem', display: 'block' }}>15K+</strong>
                <span style={{ opacity: 0.9 }}>Discussions</span>
              </div>
            </div>
          </div>
          <button
            style={{
              padding: '14px 28px',
              background: 'white',
              color: '#5eb62f',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onClick={() => navigate('/create-post')}
          >
            ✍️ Create Post
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginBottom: '24px',
        overflowX: 'auto',
        padding: '4px'
      }}>
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setActiveTab(cat.value)}
            style={{
              padding: '12px 20px',
              background: activeTab === cat.value ? '#5eb62f' : 'white',
              color: activeTab === cat.value ? 'white' : '#2c281d',
              border: activeTab === cat.value ? 'none' : '2px solid #e5dfd0',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              fontSize: '0.95rem',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{cat.icon}</span>
            <span>{cat.name}</span>
            <span style={{
              background: activeTab === cat.value ? 'rgba(255,255,255,0.3)' : '#f5ead0',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '0.85rem'
            }}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Posts Feed */}
      <div style={{ display: 'grid', gap: '16px' }}>
        {filteredPosts.map(post => (
          <article 
            key={post.id} 
            className="page-card" 
            style={{ 
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative'
            }}
            onClick={() => navigate(`/vedika/post/${post.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Post Header */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <div style={{ 
                fontSize: '2.5rem',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f5ead0',
                borderRadius: '50%'
              }}>
                {post.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '1rem', color: '#2c281d' }}>
                    {post.author}
                  </strong>
                  {post.verified && (
                    <span style={{
                      background: '#2196F3',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      ✓ Expert
                    </span>
                  )}
                  <span style={{ 
                    padding: '2px 10px',
                    background: getTypeColor(post.type),
                    color: 'white',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                  }}>
                    {post.type}
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#6b6457' }}>
                  📍 {post.location} • ⏰ {post.timeAgo}
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                marginBottom: '8px', 
                color: '#2c281d',
                fontWeight: '600'
              }}>
                {post.title}
              </h3>
              <p style={{ 
                margin: '0 0 12px 0', 
                color: '#6b6457', 
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {post.content}
              </p>
              {post.image && (
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginTop: '12px'
                  }}
                />
              )}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
              {post.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: '4px 10px',
                    background: '#f5ead0',
                    color: '#5c4a1f',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Post Footer */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              paddingTop: '12px',
              borderTop: '1px solid #e5dfd0'
            }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <button 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6b6457',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  👍 {post.upvotes}
                </button>
                <button 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#6b6457',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/vedika/post/${post.id}`)
                  }}
                >
                  💬 {post.comments} replies
                </button>
              </div>
              {post.type === 'question' && (
                <span style={{
                  padding: '4px 12px',
                  background: post.answered ? '#4CAF50' : '#FF9800',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  {post.answered ? '✓ Answered' : '⏳ Pending'}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="page-card" style={{ 
        marginTop: '32px', 
        background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)',
        border: '2px solid #d9c6a3'
      }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#5c4a1f' }}>
          📜 Community Guidelines
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '12px'
        }}>
          {[
            'Be respectful and supportive',
            'Share genuine experiences',
            'Verify information before posting',
            'Help fellow farmers learn',
            'Report spam or misleading content'
          ].map((guideline, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ color: '#5eb62f', fontWeight: 'bold', fontSize: '1.1rem' }}>✓</span>
              <span style={{ color: '#5c4a1f', fontSize: '0.9rem' }}>{guideline}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="page-card" style={{ 
        marginTop: '24px', 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #5eb62f 0%, #4a9625 100%)', 
        color: 'white' 
      }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'white' }}>
          Have a Question or Success Story?
        </h3>
        <p style={{ fontSize: '1rem', marginBottom: '20px', color: 'rgba(255, 255, 255, 0.9)' }}>
          Share your experience with the community and get expert advice
        </p>
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
          onClick={() => navigate('/create-post')}
        >
          Create Your First Post
        </button>
      </div>
    </div>
  )
}

export default VedikaPage
