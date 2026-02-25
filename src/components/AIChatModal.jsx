import { useState } from 'react'

function AIChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! 👋 I\'m your Agriwave AI Assistant. I can help you with crop advisory, product recommendations, and farming tips. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const quickReplies = [
    'Crop advisory',
    'Product suggestions',
    'Weather tips',
    'Pest management',
  ]

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  const handleQuickReply = (reply) => {
    const userMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateBotResponse(reply),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase()

    if (input.includes('crop') || input.includes('advisory')) {
      return '🌾 For crop advisory, I recommend checking soil pH, ensuring proper irrigation, and monitoring weather patterns. What specific crop are you growing? I can provide more detailed guidance!'
    }
    if (input.includes('product') || input.includes('suggestion')) {
      return '🛒 Based on your needs, I can recommend fertilizers, seeds, pesticides, and equipment. Tell me more about your farming needs - what season you\'re in, your crops, or any specific challenges?'
    }
    if (input.includes('weather') || input.includes('rain')) {
      return '🌤️ Current weather patterns show good rainfall expected soon. Make sure to prepare your crops with proper nutrient fortification and check drainage systems.'
    }
    if (input.includes('pest') || input.includes('disease')) {
      return '🐛 Common pests right now include armyworms and leaf hoppers. I recommend organic pest management methods or targeted spraying. Would you like specific product recommendations?'
    }
    return '✅ Great question! Our team of agronomists is also available for personalized advice. Would you like to schedule a demo or field visit with our experts?'
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-chat" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: '1.3rem', margin: 0, color: '#2c281d' }}>
            🤖 AI Assistant
          </h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-message ${msg.sender}`}
              style={{
                marginBottom: '12px',
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  backgroundColor: msg.sender === 'user' ? '#5eb62f' : '#f0f0f0',
                  color: msg.sender === 'user' ? 'white' : '#2c281d',
                  wordWrap: 'break-word',
                  fontSize: '14px',
                  lineHeight: '1.4',
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message bot" style={{ marginBottom: '12px', display: 'flex' }}>
              <div style={{ padding: '12px 16px', color: '#999', fontSize: '14px' }}>
                ⌛ AI is thinking...
              </div>
            </div>
          )}
        </div>

        {messages.length === 1 && (
          <div style={{ padding: '16px', borderTop: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '12px', marginTop: 0 }}>
              Quick options:
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #d0d0d0',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#2c281d',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#5eb62f'
                    e.target.style.color = 'white'
                    e.target.style.borderColor = '#5eb62f'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f0f0f0'
                    e.target.style.color = '#2c281d'
                    e.target.style.borderColor = '#d0d0d0'
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSendMessage} style={{ borderTop: '1px solid #e5e5e5', padding: '12px 16px', display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            style={{
              flex: 1,
              padding: '10px 12px',
              border: '1px solid #d0d0d0',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
            }}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            style={{
              padding: '10px 16px',
              backgroundColor: '#5eb62f',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              opacity: isLoading ? 0.6 : 1,
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default AIChatModal
