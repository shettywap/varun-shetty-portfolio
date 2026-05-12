import { useState } from 'react'
import './Experience.css'
import stanleyLogo from '../assets/logos/stanley.png'
import mckinseyLogo from '../assets/logos/mckinsey.png'
import patrickCraigLogo from '../assets/logos/patrick-craig.jpeg'
import gtLogo from '../assets/logos/gt.png'

// Company logos
const logos = {
  'Stanley Black & Decker': stanleyLogo,
  'McKinsey Digital Capability Center': mckinseyLogo,
  'Patrick Craig Academy': patrickCraigLogo,
  'Georgia Tech': gtLogo
}

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  const experiences = [
    {
      title: 'SLP Rotation - IT Service Management User Experience',
      company: 'Stanley Black & Decker',
      duration: 'February 2026 - Present',
      description: 'Strategic Leadership Program rotation focused on improving IT service delivery and user experience through ServiceNow optimization.',
      highlights: [
        'Created ServiceNow reports to identify User Experience issues regarding MTTR and user satisfaction metrics',
        'Reduced 2.5k total aging incidents, service requests, and tasks by 10% through individual intervention',
        'Created 3 ServiceNow enhancements and collaborated with vendors to improve IT agent performance and data integrity'
      ]
    },
    {
      title: 'SLP Rotation - User Devices and Collaboration',
      company: 'Stanley Black & Decker',
      duration: 'July 2025 - January 2026',
      description: 'Strategic Leadership Program rotation managing global phone system deployment and collaboration infrastructure across 225+ sites.',
      highlights: [
        'Supported 6-month phone system rollout across 225 manufacturing and corporate sites globally',
        'Led complex Port-Out process for 20 sites across EMEA, APAC, and Americas regions',
        'Tracked procurement and fulfillment for 100+ orders of physical devices in US and Canada',
        'Drove $100k+ in cost savings by auditing carrier expenses, collaboration tools, and reducing excess lines and licenses'
      ]
    },
    {
      title: 'IT Intern - Information Security and Controls',
      company: 'Stanley Black & Decker',
      duration: 'June 2024 - August 2024',
      description: 'Information Security and Controls role focused on SSO enablement and passwordless authentication.',
      highlights: [
        'Retrieved relevant data from CMDB for 177 applications to inform SSO enablement decisions',
        'Constructed step-by-step user guide for TruU passwordless and biometric authentication enrollment',
        'Documented SSO integration decision-making process (SAML, OIDC, Proxy authentication)'
      ]
    },
    {
      title: 'Technology and Analytics Intern - Enterprise Data Strategy',
      company: 'Stanley Black & Decker',
      duration: 'June 2023 - August 2023',
      description: 'Enterprise Data Strategy role developing tools for data project provisioning and governance.',
      highlights: [
        'Developed fields to capture data project information for role provisioning and data product cataloging',
        'Created Power Automate flows to extract project information and automate notifications',
        'Integrated fields into Jira workflow stages and created governance dashboards',
        'Informed Data Governance team about Snowflake data architecture, reporting, and access changes'
      ]
    },
    {
      title: 'Operator',
      company: 'McKinsey Digital Capability Center',
      duration: 'January 2023 - May 2023',
      description: 'Digital transformation specialist demonstrating lean and digital manufacturing solutions.',
      highlights: [
        'Demonstrated lean and digital transformations on production lines and warehouses for Fortune 500 clients',
        'Modeled use cases for emerging digital tools: vision picking, drones, augmented reality maintenance',
        'Worked across various industries to optimize operations and implement digital solutions'
      ]
    },
    {
      title: 'Content Project Manager & Website Developer',
      company: 'Patrick Craig Academy',
      duration: 'May 2022 - August 2022',
      description: 'Project management and web development for education technology platform.',
      highlights: [
        'Oversaw development of 60+ updated ACT and SAT supplemental learning packets and video solutions',
        'Hired and trained 15 employees on LaTeX typesetting using virtual machines',
        'Overhauled www.patrickcraigacademy.com with improved UX and streamlined booking processes',
        'Integrated Acuity Scheduling Software for onboarding, reporting, and session management',
        'Beta tested website to optimize navigation and improve data collection from interactive elements'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <span className="section-eyebrow">Work History</span>
        <h2>Experience</h2>
      </div>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`experience-card ${expanded === idx ? 'expanded' : ''}`}
          >
            <div className="card-header">
              <div className="header-left">
                {logos[exp.company] && (
                  <img src={logos[exp.company]} alt={`${exp.company} logo`} className="company-logo" />
                )}
                <div>
                  <h3>{exp.title}</h3>
                  <span className="company-badge">{exp.company}</span>
                </div>
              </div>
              <button 
                className="expand-btn"
                onClick={() => setExpanded(expanded === idx ? -1 : idx)}
                aria-label={expanded === idx ? 'Collapse' : 'Expand'}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ transform: expanded === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <p className="duration">{exp.duration}</p>
            {expanded === idx && (
              <div className="card-expanded">
                <p className="description">{exp.description}</p>
                <div className="highlights-label">Key Contributions</div>
                <ul className="highlights-list">
                  {exp.highlights.map((hl, i) => (
                    <li key={i} className="highlight-item">{hl}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
