import { useEffect, useState } from 'react';
import useAOS from '../hooks/useAOS';

const About = () => {
  useAOS();
  const [activeTab, setActiveTab] = useState('about');
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    // Typewriter effect for the main title
    const text = "Building Digital Experiences That Inspire";
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate stats
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const certifications = [
    { 
      name: 'AWS Certified Developer', 
      issuer: 'Amazon', 
      year: '',
      icon: '☁️',
      color: '#FF9900',
      description: 'Associate level certification for AWS cloud services'
    },
    { 
      name: 'React Professional Certificate', 
      issuer: 'Meta', 
      year: '',
      icon: '⚛️',
      color: '#61DAFB',
      description: 'Advanced React development and best practices'
    },
    { 
      name: 'JavaScript Algorithms', 
      issuer: 'freeCodeCamp', 
      year: '',
      icon: '🟨',
      color: '#F7DF1E',
      description: 'Data structures and algorithms certification'
    },
    { 
      name: 'C++ Advanced Programming', 
      issuer: 'Coding Ninjas', 
      year: '',
      icon: '⚡',
      color: '#00599C',
      description: 'Advanced C++ and OOP concepts mastery'
    },
    { 
      name: 'SQL Mastery', 
      issuer: 'Udemy', 
      year: '',
      icon: '🗄️',
      color: '#336791',
      description: 'Database design and advanced query optimization'
    }
  ];

  const interests = [
    { icon: '🚀', name: 'Open Source', color: '#FF6B35', description: 'Contributing to community projects' },
    { icon: '🏆', name: 'Competitive Programming', color: '#00599C', description: 'Solving algorithmic challenges' },
    { icon: '📚', name: 'Tech Blogs', color: '#61DAFB', description: 'Writing and reading tech articles' },
    { icon: '🎨', name: 'UI/UX Design', color: '#E34F26', description: 'Creating beautiful user experiences' },
    { icon: '🌍', name: 'Travel', color: '#47A248', description: 'Exploring new cultures and places' },
    { icon: '🎵', name: 'Music', color: '#FF6B6B', description: 'Playing guitar and listening to music' },
    { icon: '🏋️', name: 'Fitness', color: '#F7DF1E', description: 'Gym workouts and healthy lifestyle' },
    { icon: '📱', name: 'Tech Gadgets', color: '#336791', description: 'Latest technology and gadgets' }
  ];

  const stats = [
    { icon: '💻', value: '25+', label: 'Projects', suffix: 'Completed', color: '#6366f1' },
    { icon: '🏆', value: '100+', label: 'GeeksforGeeks', suffix: 'Solved', color: '#10b981' },
    { icon: '⭐', value: '6+', label: 'Awards', suffix: 'Received', color: '#f59e0b' },
    { icon: '🔢', value: '200+', label: 'LeetCode', suffix: 'Problems', color: '#ef4444' },
    { icon: '📊', value: '50+', label: 'DSA', suffix: 'Concepts', color: '#8b5cf6' },
    { icon: '🚀', value: '15+', label: 'Hackathons', suffix: 'Participated', color: '#06b6d4' }
  ];

  const achievements = [
    { type: 'hackathon', title: 'CodeFest ', result: '3third Place', year: '' },
    { type: 'openSource', title: 'GitHub Contributor', result: '50+ PRs', year: '' },
    { type: 'certification', title: 'Top Performer', result: '99% Score', year: '' },
    { type: 'community', title: 'Tech Speaker', result: '10+ Events', year: '' }
  ];

  // Function to get interest card style
  const getInterestCardStyle = (color) => ({
    '--interest-color': color
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          {/* Enhanced Profile Section with Hover Effects */}
          <div className="about-profile" data-aos="fade-right">
            <div 
              className={`profile-card ${isProfileHovered ? 'hovered' : ''}`}
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              <div className="profile-image-container">
                <div className="profile-image">
                  <img 
                    src="/profile-picture.jpg" 
                    alt="Ranjeet Singh"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextSibling;
                      if (placeholder) {
                        placeholder.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="profile-placeholder">
                    <i className="fas fa-code"></i>
                  </div>
                  {/* Animated border effect */}
                  <div className="profile-glow"></div>
                </div>
                <div className="profile-badge">
                  <i className="fas fa-star"></i>
                  Pro Developer
                </div>
              </div>
              
              <div className="profile-info">
                <h3>Ranjeet Singh</h3>
                <p className="profile-title">Full Stack Developer</p>
                <div className="profile-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>India</span>
                </div>
                
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>Available for projects</span>
                </div>

                {/* Enhanced Social Links with Mirror Effect */}
                <div className="profile-social">
                  <a href="https://github.com" aria-label="GitHub" className="social-btn github">
                    <i className="fab fa-github"></i>
                    <span className="social-tooltip"></span>
                    <div className="mirror-effect"></div>
                  </a>
                  <a href="https://linkedin.com" aria-label="LinkedIn" className="social-btn linkedin">
                    <i className="fab fa-linkedin"></i>
                    <span className="social-tooltip"></span>
                    <div className="mirror-effect"></div>
                  </a>
                  <a href="https://leetcode.com" aria-label="LeetCode" className="social-btn leetcode">
                    <i className="fas fa-code"></i>
                    <span className="social-tooltip"></span>
                    <div className="mirror-effect"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                <span className="stat-number">6+</span>
                <span className="stat-label">Awards</span>
              </div>
              <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>

           
          </div>

          {/* Main Content */}
          <div className="about-main">
            {/* Enhanced Tabs with Smooth Transitions and Mirror Effect */}
            <div className="about-tabs" data-aos="fade-up">
              <button 
                className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => handleTabChange('about')}
              >
                <i className="fas fa-user"></i>
                About
                <span className="tab-underline"></span>
                <div className="mirror-effect"></div>
              </button>
              <button 
                className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => handleTabChange('certifications')}
              >
                <i className="fas fa-award"></i>
                Certifications
                <span className="tab-underline"></span>
                <div className="mirror-effect"></div>
              </button>
              <button 
                className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
                onClick={() => handleTabChange('achievements')}
              >
                <i className="fas fa-trophy"></i>
                Achievements
                <span className="tab-underline"></span>
                <div className="mirror-effect"></div>
              </button>
            </div>

            {/* Tab Content with Smooth Transitions */}
            <div className="tab-content">
              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="about-text" data-aos="fade-up">
                  <h3>
                    <span className="typewriter-text">{typedText}</span>
                    <span className="typewriter-cursor">|</span>
                  </h3>
                  
                  <div className="about-paragraphs">
                    <p data-aos="fade-up" data-aos-delay="200">
                      Hello! I'm <strong>Ranjeet Singh</strong>, a passionate full-stack developer with expertise in modern web technologies. I specialize in creating high-performance applications using <strong>React, Next.js, Node.js, and C++</strong> for competitive programming.
                    </p>
                    
                    <p data-aos="fade-up" data-aos-delay="300">
                      With a strong foundation in <strong>Data Structures and Algorithms</strong>, I approach problem-solving with efficiency and creativity. My goal is to build scalable, maintainable software that delivers exceptional user experiences.
                    </p>

                    <p data-aos="fade-up" data-aos-delay="400">
                      When I'm not coding, you'll find me solving challenges on <strong>LeetCode</strong>, contributing to <strong>open-source projects</strong>, or exploring the latest trends in web development and competitive programming.
                    </p>
                  </div>
                  
                  {/* Enhanced Stats Grid with Carousel */}
                 
                         
                    
                      
                       
                      
                    
                   

                  {/* Enhanced Interests with Hover Effects */}
                  <div className="about-interests" data-aos="fade-up" data-aos-delay="600">
                    <h4>Passions & Interests</h4>
                    <div className="interests-grid">
                      {interests.map((interest, index) => (
                        <div 
                          key={index} 
                          className="interest-card"
                          style={getInterestCardStyle(interest.color)}
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                        >
                          <span className="interest-emoji">{interest.icon}</span>
                          <span className="interest-name">{interest.name}</span>
                          <div className="interest-description">
                            {interest.description}
                          </div>
                          <div className="mirror-effect"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Certifications Tab */}
              {activeTab === 'certifications' && (
                <div className="certifications-container" data-aos="fade-up">
                  <div className="certifications-header">
                    <h3>Professional Certifications</h3>
                    <p>Validated skills and expertise</p>
                  </div>
                  <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                      <div 
                        key={index} 
                        className="certification-card"
                        data-aos="flip-left"
                        data-aos-delay={index * 100}
                      >
                        <div 
                          className="certification-icon"
                          style={{ backgroundColor: cert.color }}
                        >
                          {cert.icon}
                        </div>
                        <div className="certification-content">
                          <h4>{cert.name}</h4>
                          <p className="cert-issuer">{cert.issuer}</p>
                          <p className="cert-description">{cert.description}</p>
                          <div className="cert-meta">
                            <span className="cert-year">{cert.year}</span>
                            <span className="cert-badge">
                              <i className="fas fa-shield-alt"></i>
                              Verified
                            </span>
                          </div>
                        </div>
                        <div className="mirror-effect"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <div className="achievements-container" data-aos="fade-up">
                  <div className="achievements-header">
                    <h3>Notable Achievements</h3>
                    <p>Milestones and recognitions</p>
                  </div>
                  <div className="achievements-timeline">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="timeline-item"
                        data-aos="fade-right"
                        data-aos-delay={index * 150}
                      >
                        <div className="timeline-marker">
                          <i className={`fas fa-${achievement.type === 'hackathon' ? 'trophy' : achievement.type === 'openSource' ? 'code-branch' : achievement.type === 'certification' ? 'certificate' : 'users'}`}></i>
                        </div>
                        <div className="timeline-content">
                          <h4>{achievement.title}</h4>
                          <p>{achievement.result}</p>
                          <span className="timeline-year">{achievement.year}</span>
                        </div>
                        <div className="mirror-effect"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced CTA with Particles Effect and Mirror Buttons */}
        <div className="about-cta" data-aos="fade-up">
          <div className="cta-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
          <div className="cta-content">
            <h3>Ready to Bring Your Ideas to Life?</h3>
            <p>Let's collaborate to create something amazing together!</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">
                <i className="fas fa-paper-plane"></i>
                Start a Project
                <span className="button-glow"></span>
                <div className="mirror-effect"></div>
              </a>
              <a href="#projects" className="cta-button secondary">
                <i className="fas fa-eye"></i>
                View My Work
                <div className="mirror-effect"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;