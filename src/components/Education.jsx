import './Education.css'
import gtLogo from '../assets/logos/gt.png'

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="section-eyebrow">Academic Background</span>
        <h2>Education</h2>
      </div>

      <div className="education-card">
        <div className="education-top">
          <div className="education-title-wrap">
            <img
              className="education-logo"
              src={gtLogo}
              alt="Georgia Tech logo"
            />
            <div>
              <h3>Georgia Institute of Technology</h3>
              <p className="education-degree">Bachelor of Science in Business Administration • May 2025</p>
            </div>
          </div>
          <span className="education-badge">Academic Profile</span>
        </div>
        <p className="education-school">Scheller College of Business • Concentration: Information Technology Management</p>

        <div className="education-grid">
          <div className="education-item">
            <span className="item-label">GPA</span>
            <span className="item-value">3.97 / 4.00</span>
          </div>
          <div className="education-item">
            <span className="item-label">Concentration</span>
            <span className="item-value">Information Technology Management</span>
          </div>
          <div className="education-item">
            <span className="item-label">Relevant Coursework</span>
            <span className="item-value">Business Analytics (R), Management Info. Systems, Business Programming (Python)</span>
          </div>
          <div className="education-item">
            <span className="item-label">Technical Skills</span>
            <span className="item-value">Python, SQL, R, Tableau, Java, HTML, CSS, JavaScript</span>
          </div>
        </div>

        <div className="education-section featured-section">
          <div className="featured-header">
            <span className="featured-badge">Featured Achievement</span>
          </div>
          <div className="featured-award">
            <div className="featured-title-section">
              <h5>InnovATL Case Competition - 1st Place</h5>
              <div className="featured-org-section">
                <p className="featured-org-main">Arthur M. Blank Sports & Entertainment</p>
                <p className="featured-org-sub">Atlanta Falcons</p>
              </div>
            </div>
            
            <div className="instagram-embed">
              <iframe 
                src="https://www.instagram.com/p/CXkK0yAgK7W/embed" 
                width="100%" 
                height="560" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                title="InnovATL Competition Instagram Post"
              ></iframe>
            </div>

            <div className="featured-content">
              <ul className="featured-highlights">
                <li>Generated an RFID wristband solution to improve fan engagement and convert young fans into season ticket holders</li>
                <li>Cleaned and analyzed the Atlanta Falcons' in-stadium consumer database (ticketing, merchandise, CRM) using SQL</li>
                <li>Employed A/B testing and Collaborative Filtering to integrate 24 of the Falcons' sponsors into the strategy</li>
                <li>Placed 1st Overall</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h4 className="section-subtitle">Additional Honors</h4>
          <ul className="education-list">
            <li>National Merit Finalist</li>
            <li>National Spanish Exam Gold Medal</li>
            <li>CCC YMCA Volunteer of the Year</li>
          </ul>
        </div>

        <div className="education-section">
          <h4 className="section-subtitle">Leadership & Activities</h4>
          <ul className="education-list">
            <li>Management Information Systems Club - President (2022-2024)</li>
            <li>Restarted MIS Club after 2-year hiatus, recruited 75+ members</li>
            <li>Organized BizTech Case Competition with industry judges & $1000 prize pool</li>
            <li>Led panels on Cybersecurity, Project Management, and IT Audit</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
