import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import FieldVisitModal from './FieldVisitModal'
import BookDemoModal from './BookDemoModal'
import AIChatModal from './AIChatModal'

function FloatingHelpButton() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [fieldVisitOpen, setFieldVisitOpen] = useState(false)
  const [bookDemoOpen, setBookDemoOpen] = useState(false)
  const [aiChatOpen, setAiChatOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const floatingButtons = [
    {
      id: 'field-visit',
      label: 'Field Visit',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 5v7l6 3.5" />
        </svg>
      ),
      onClick: () => {
        setFieldVisitOpen(true)
        setIsMenuOpen(false)
      }
    },
    {
      id: 'book-demo',
      label: 'Book Demo',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h4" />
        </svg>
      ),
      onClick: () => {
        setBookDemoOpen(true)
        setIsMenuOpen(false)
      }
    },
    {
      id: 'ai-chat',
      label: 'AI Chat',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="9" cy="10" r="1" />
          <circle cx="12" cy="10" r="1" />
          <circle cx="15" cy="10" r="1" />
        </svg>
      ),
      onClick: () => {
        setAiChatOpen(true)
        setIsMenuOpen(false)
      }
    },
    {
      id: 'human-interaction',
      label: 'Human Interactions',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      onClick: () => {
        navigate('/contact')
        setIsMenuOpen(false)
      }
    }
  ]

  return (
    <>
      <div className="floating-menu-container" ref={menuRef}>
        {/* Main Toggle Button */}
        <button
          className="floating-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="Help & Support"
          aria-label="Toggle help menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="floating-menu-dropdown">
            {floatingButtons.map((btn) => (
              <button
                key={btn.id}
                className="floating-menu-item"
                onClick={btn.onClick}
                title={btn.label}
              >
                {btn.icon}
                <span className="floating-menu-label">{btn.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <FieldVisitModal isOpen={fieldVisitOpen} onClose={() => setFieldVisitOpen(false)} />
      <BookDemoModal isOpen={bookDemoOpen} onClose={() => setBookDemoOpen(false)} />
      <AIChatModal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
    </>
  )
}

export default FloatingHelpButton
