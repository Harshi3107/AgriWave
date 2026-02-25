import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function VedikaPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [replyText, setReplyText] = useState('')

  // Sample post data - in real app, fetch based on id
  const post = {
    id: parseInt(id) || 2,
    type: 'success',
    author: 'Lakshmi Devi',
    location: 'Karnataka',
    avatar: '👩‍🌾',
    title: 'Increased tomato yield by 60% using organic methods!',
    content: `After switching to organic farming and following expert advice from this community, my tomato yield increased dramatically. 

Here's what I did step by step:

1. **Soil Preparation**: Started with vermicompost enrichment 2 weeks before planting
2. **Seed Selection**: Used disease-resistant hybrid varieties recommended by local experts
3. **Pest Control**: Implemented neem oil spray schedule (weekly application)
4. **Irrigation**: Installed drip irrigation system with 90% government subsidy
5. **Monitoring**: Regular soil testing every 3 months

The results have been amazing - not only did yield increase, but the quality of tomatoes improved significantly. Market price is also better for organic produce!

Happy to answer any questions from fellow farmers.`,
    category: 'Success Story',
    upvotes: 289,
    comments: 34,
    timeAgo: '5 hours ago',
    tags: ['organic', 'tomato', 'success'],
    image: 'https://images.unsplash.com/photo-1464226184884-650e59cfe1d4?auto=format&fit=crop&w=800&q=80'
  }

  const comments = [
    {
      id: 1,
      author: 'Ramesh Kumar',
      location: 'Punjab',
      avatar: '👨‍🌾',
      text: 'Congratulations Lakshmi ji! Very inspiring. Can you share more details about the neem oil preparation? Do you make it yourself or buy from market?',
      timeAgo: '4 hours ago',
      upvotes: 12
    },
    {
      id: 2,
      author: 'Dr. Priya Sharma',
      location: 'Expert',
      avatar: '👩‍🔬',
      text: 'Excellent work! This is a perfect example of integrated organic farming. For others looking to follow this approach, I recommend starting with soil testing first to understand nutrient requirements.',
      timeAgo: '3 hours ago',
      upvotes: 45,
      verified: true
    },
    {
      id: 3,
      author: 'Suresh Patil',
      location: 'Maharashtra',
      avatar: '👨‍🌾',
      text: 'Very helpful post! I am also planning to shift to organic. How long did it take to see significant improvement in yield?',
      timeAgo: '2 hours ago',
      upvotes: 8
    },
    {
      id: 4,
      author: 'Lakshmi Devi',
      location: 'Karnataka',
      avatar: '👩‍🌾',
      text: '@Ramesh Kumar - I buy concentrated neem oil from local organic store and dilute it as per instructions. Making it at home is also possible but takes time. @Suresh Patil - It took about 2 seasons to see major improvement. First season was transition period.',
      timeAgo: '1 hour ago',
      upvotes: 23,
      isAuthor: true
    },
    {
      id: 5,
      author: 'Arjun Singh',
      location: 'Rajasthan',
      avatar: '👨‍🌾',
      text: 'Thanks for sharing! What was the approximate cost of setting up drip irrigation? I am interested in applying for subsidy.',
      timeAgo: '45 minutes ago',
      upvotes: 5
    }
  ]

  const handleReplySubmit = (e) => {
    e.preventDefault()
    if (replyText.trim()) {
      // In real app, submit to backend
      console.log('Reply:', replyText)
      setReplyText('')
      alert('Reply posted successfully!')
    }
  }

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
        <Link className="back-link" to="/vedika">
          Back to Vedika
        </Link>
        <h1>Discussion</h1>
        <p>Community post and replies</p>
      </header>

      {/* Main Post */}
      <article className="page-card" style={{ marginBottom: '24px' }}>
        {/* Post Header */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <div style={{ 
            fontSize: '3rem',
            width: '60px',
            height: '60px',
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
              <strong style={{ fontSize: '1.1rem', color: '#2c281d' }}>
                {post.author}
              </strong>
              <span style={{ 
                padding: '3px 12px',
                background: getTypeColor(post.type),
                color: 'white',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'capitalize'
              }}>
                {post.type}
              </span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#6b6457' }}>
              📍 {post.location} • ⏰ {post.timeAgo}
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ 
            fontSize: '1.6rem', 
            marginBottom: '16px', 
            color: '#2c281d',
            fontWeight: '600',
            lineHeight: '1.4'
          }}>
            {post.title}
          </h2>
          <div style={{ 
            color: '#6b6457', 
            lineHeight: '1.8',
            fontSize: '1rem',
            whiteSpace: 'pre-line'
          }}>
            {post.content}
          </div>
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                marginTop: '20px'
              }}
            />
          )}
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          {post.tags.map((tag, idx) => (
            <span 
              key={idx}
              style={{
                padding: '6px 14px',
                background: '#f5ead0',
                color: '#5c4a1f',
                borderRadius: '6px',
                fontSize: '0.85rem',
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
          paddingTop: '16px',
          borderTop: '2px solid #e5dfd0'
        }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button 
              style={{
                background: 'none',
                border: 'none',
                color: '#5eb62f',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '8px 16px',
                borderRadius: '6px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#f5ead0'}
              onMouseLeave={(e) => e.target.style.background = 'none'}
            >
              👍 Upvote ({post.upvotes})
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#6b6457'
            }}>
              💬 {post.comments} replies
            </div>
          </div>
          <button
            style={{
              padding: '8px 16px',
              background: 'transparent',
              color: '#6b6457',
              border: '2px solid #e5dfd0',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            🔗 Share
          </button>
        </div>
      </article>

      {/* Comments Section */}
      <div className="page-card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#2c281d' }}>
          💬 Replies ({comments.length})
        </h3>

        {/* Add Reply Form */}
        <form onSubmit={handleReplySubmit} style={{ marginBottom: '24px' }}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Share your thoughts or ask a question..."
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #e5dfd0',
              fontSize: '0.95rem',
              fontFamily: 'inherit',
              resize: 'vertical',
              marginBottom: '12px'
            }}
          />
          <button
            type="submit"
            className="primary"
            disabled={!replyText.trim()}
          >
            Post Reply
          </button>
        </form>

        {/* Comments List */}
        <div style={{ display: 'grid', gap: '16px' }}>
          {comments.map(comment => (
            <div 
              key={comment.id}
              style={{
                padding: '16px',
                background: comment.isAuthor ? '#f5ead0' : '#faf8f2',
                borderRadius: '8px',
                borderLeft: comment.verified ? '4px solid #2196F3' : comment.isAuthor ? '4px solid #5eb62f' : 'none'
              }}
            >
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <div style={{ 
                  fontSize: '2rem',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  borderRadius: '50%'
                }}>
                  {comment.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '0.95rem', color: '#2c281d' }}>
                      {comment.author}
                    </strong>
                    {comment.verified && (
                      <span style={{
                        background: '#2196F3',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        ✓ Expert
                      </span>
                    )}
                    {comment.isAuthor && (
                      <span style={{
                        background: '#5eb62f',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        Author
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#6b6457' }}>
                    📍 {comment.location} • ⏰ {comment.timeAgo}
                  </div>
                </div>
              </div>
              <p style={{ 
                margin: '0 0 12px 0', 
                color: '#2c281d', 
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {comment.text}
              </p>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b6457',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}
              >
                👍 {comment.upvotes}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      <div className="page-card" style={{ 
        background: 'linear-gradient(135deg, #f5ead0 0%, #efe3c6 100%)',
        border: '2px solid #d9c6a3'
      }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#5c4a1f' }}>
          📚 Related Discussions
        </h3>
        <div style={{ display: 'grid', gap: '12px' }}>
          {[
            { title: 'Organic fertilizer alternatives for tomatoes', replies: 23 },
            { title: 'Drip irrigation setup guide and costs', replies: 45 },
            { title: 'Best tomato varieties for organic farming', replies: 18 }
          ].map((related, idx) => (
            <div 
              key={idx}
              style={{
                padding: '12px',
                background: 'white',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onClick={() => navigate(`/vedika/post/${idx + 10}`)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#2c281d', marginBottom: '4px' }}>
                {related.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6b6457' }}>
                💬 {related.replies} replies
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VedikaPostPage
