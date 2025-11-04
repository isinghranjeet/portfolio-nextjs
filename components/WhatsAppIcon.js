import { FaWhatsapp, FaTimes, FaExpand, FaCompress } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = "919315058665";
  const defaultMessage = "Hello! I'm interested in your services";
  
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [notification, setNotification] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [theme, setTheme] = useState('default');
  const [clickCount, setClickCount] = useState(0);
  const widgetRef = useRef(null);

  // Feature 1: Auto-close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Feature 2: Notification effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Feature 3: Send message handler
  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setClickCount(prev => prev + 1);
    setNotification(false);
    
    // Feature: Special effect on 5th click
    if (clickCount + 1 >= 5) {
      setTheme('golden');
      setTimeout(() => setTheme('default'), 3000);
    }
  };

  // Feature 4: Quick responses
  const quickResponses = [
    "Hello! I need your services",
    "Can you share your portfolio?",
    "What are your rates?",
    "Are you available for a call?"
  ];

  // Feature 5: Theme styles
  const themes = {
    default: {
      bg: 'linear-gradient(135deg, #25D366, #128C7E)',
      hoverBg: 'linear-gradient(135deg, #128C7E, #25D366)',
      shadow: 'rgba(37, 211, 102, 0.4)'
    },
    golden: {
      bg: 'linear-gradient(135deg, #FFD700, #FFA500)',
      hoverBg: 'linear-gradient(135deg, #FFA500, #FFD700)',
      shadow: 'rgba(255, 215, 0, 0.4)'
    },
    dark: {
      bg: 'linear-gradient(135deg, #333, #555)',
      hoverBg: 'linear-gradient(135deg, #555, #333)',
      shadow: 'rgba(0, 0, 0, 0.4)'
    }
  };

  return (
    <>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 100px;
          left: 25px;
          background: ${themes[theme].bg};
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px ${themes[theme].shadow};
          transition: all 0.3s ease;
          z-index: 1000;
          text-decoration: none;
          animation: ${pulse ? 'float 3s ease-in-out infinite' : 'none'};
          cursor: pointer;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 30px ${themes[theme].shadow};
          background: ${themes[theme].hoverBg};
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #ff4444;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 1s infinite;
        }

        .widget-container {
          position: fixed;
          bottom: ${isExpanded ? '50px' : '170px'};
          left: 25px;
          width: ${isExpanded ? '350px' : '300px'};
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          z-index: 1001;
          transition: all 0.3s ease;
          transform: ${isOpen ? 'scale(1)' : 'scale(0)'};
          opacity: ${isOpen ? '1' : '0'};
          transform-origin: bottom left;
        }

        .widget-header {
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          padding: 15px;
          border-radius: 15px 15px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .widget-body {
          padding: 15px;
          max-height: ${isExpanded ? '400px' : '300px'};
          overflow-y: auto;
        }

        .quick-responses {
          display: grid;
          gap: 8px;
          margin-bottom: 15px;
        }

        .quick-response-btn {
          background: #f1f1f1;
          border: none;
          padding: 8px 12px;
          border-radius: 20px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .quick-response-btn:hover {
          background: #e1e1e1;
        }

        .message-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
        }

        .send-button {
          background: #25D366;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 20px;
          cursor: pointer;
          margin-top: 10px;
          width: 100%;
          transition: all 0.2s;
        }

        .send-button:hover {
          background: #128C7E;
        }

        .control-buttons {
          display: flex;
          gap: 10px;
        }

        .control-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 5px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
        }

        .control-btn:hover {
          background: rgba(255,255,255,0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 55px;
            height: 55px;
            bottom: 80px;
            left: 20px;
          }
          
          .widget-container {
            left: 20px;
            right: 20px;
            width: auto;
          }
        }
      `}</style>

      {/* Feature 6: Main WhatsApp Button */}
      <div 
        className="whatsapp-float" 
        onClick={() => setIsOpen(!isOpen)}
        ref={widgetRef}
      >
        <FaWhatsapp size={28} />
        
        {/* Feature 7: Notification Badge */}
        {notification && (
          <div className="notification-badge">!</div>
        )}
      </div>

      {/* Feature 8: Expandable Chat Widget */}
      {isOpen && (
        <div className="widget-container" ref={widgetRef}>
          <div className="widget-header">
            <div>
              <strong>Chat with Us</strong>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>We'll respond quickly</div>
            </div>
            
            {/* Feature 9: Widget Controls */}
            <div className="control-buttons">
              <button 
                className="control-btn"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <FaCompress size={14} /> : <FaExpand size={14} />}
              </button>
              <button 
                className="control-btn"
                onClick={() => {
                  setIsOpen(false);
                  setIsExpanded(false);
                }}
              >
                <FaTimes size={14} />
              </button>
            </div>
          </div>

          <div className="widget-body">
            {/* Feature 10: Quick Responses */}
            <div className="quick-responses">
              <strong>Quick Messages:</strong>
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  className="quick-response-btn"
                  onClick={() => setMessage(response)}
                >
                  {response}
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <textarea
              className="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows="3"
            />

            {/* Send Button */}
            <button className="send-button" onClick={handleSendMessage}>
              Send via WhatsApp
            </button>

            {/* Easter Egg Message */}
            {clickCount >= 5 && (
              <div style={{ 
                fontSize: '12px', 
                color: '#25D366', 
                textAlign: 'center', 
                marginTop: '10px',
                animation: 'pulse 1s infinite'
              }}>
                🎉 WhatsApp Pro User! 🎉
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppIcon;