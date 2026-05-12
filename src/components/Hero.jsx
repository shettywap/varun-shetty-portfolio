import './Hero.css'
import profileImage from '../assets/profile.jpg'
import { useState } from 'react'

export default function Hero() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="prospect-card">
          <div className="profile-header-row">
            <div className="name-title-section">
              <h1 className="prospect-name">Varun Shetty</h1>
              <p className="prospect-role">Career Draft Profile</p>
            </div>
            <div className="profile-image-container">
              <img src={profileImage} alt="Varun Shetty" className="profile-image" />
              <button className="connect-btn" onClick={() => setShowContactModal(true)}>
                Connect
              </button>
            </div>
          </div>

          <div className="section-summaries">
            <div className="summary-card">
              <h4>Projects</h4>
              <ul className="summary-bullets">
                <li><a href="#projects" style={{color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--primary)', paddingBottom: '1px'}}>WR Projection Model</a></li>
                <li>NBA Summer League Analysis</li>
                <li>NIL Database</li>
              </ul>
              <a href="#projects" className="expand-link">View All Projects →</a>
            </div>
            <div className="summary-card">
              <h4>Articles</h4>
              <ul className="summary-bullets">
                <li>Deep-dive analysis on NFL draft prospects</li>
                <li>Team strategy and football analytics</li>
              </ul>
              <a href="#articles" className="expand-link">Read Articles →</a>
            </div>
            <div className="summary-card">
              <h4>Experience</h4>
            <ul className="summary-bullets">
                <li>Strategic Leadership Program at Stanley Black & Decker</li>
                <li>McKinsey: Process improvement and web development</li>
                <li>PM at tutoring firm</li>
              </ul>
              <a href="#experience" className="expand-link">View Experience →</a>
            </div>
            <div className="summary-card">
              <h4>Education</h4>
              <ul className="summary-bullets">
                <li>Georgia Tech Business Administration (3.97 GPA)</li>
                <li>InnovATL Case Competition winner</li>
                <li>President of MIS Club</li>
              </ul>
              <a href="#education" className="expand-link">View Education →</a>
            </div>
          </div>
        </div>

        <aside className="scouting-sidebar">
          <div className="sidebar-panel">
            <h3>Scouting Report</h3>
            <ul className="scouting-list">
              <li>Passionate about the business of sports from contracts and drafting, to in-game strategy and fan experience</li>
              <li>Combines intuition and analytical tools to help teams, players, fans make better decisions</li>
              <li>Breadth of experience in Business, IT, Data Science, AI, and web development</li>
            </ul>
          </div>

          <div className="sidebar-panel dark-panel">
            <h3>Role Fit</h3>
            <p>Business Intelligence • Data Science • Product Development/UX</p>
          </div>

          <div className="sidebar-panel">
            <h3>Toolbox</h3>
            <p>Python • R (nflfastR) • Excel • SQL • React • Flask</p>
          </div>
        </aside>
      </div>

      {showContactModal && (
        <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>
              ×
            </button>
            <h3>Let's Connect!</h3>
            <p className="modal-subtitle">Reach out via text, email, or social media.</p>
            <div className="contact-links-modal">
              <a href="https://github.com/shettywap" target="_blank" rel="noopener noreferrer" className="contact-link-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/varunyshetty/" target="_blank" rel="noopener noreferrer" className="contact-link-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:shetty.varun@gmail.com" className="contact-link-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
                <span>Email</span>
              </a>
              <a href="sms:+12039398139" className="contact-link-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
                </svg>
                <span>Text: 203-939-8139</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
