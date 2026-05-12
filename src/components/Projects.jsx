import { useState } from 'react'
import './Projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Wide Receiver Projections 2026',
      featured: true,
      badge: 'Football Analytics',
      category: 'data-science',
      description: 'Advanced ML analysis projecting 2026 fantasy-relevant wide receivers using Decision Trees and GLM. Built on 2018-2024 historical data with 85%+ accuracy on top prospects.',
      tags: ['Machine Learning', 'GLM', 'Decision Trees', 'Data Analysis', 'Python', 'Fantasy Sports'],
      link: 'https://shettywap.github.io/Reliable-Recievers/'
    },
    {
      title: 'Player Comparisons Database',
      badge: 'Research',
      category: 'data-science',
      description: 'Interactive Notion database for NFL draft scouting. Input player information to dynamically find comparable prospects with similar metrics and profiles. Enables scouts, agents, and analysts to benchmark prospects against historical players and identify underrated talent through data-driven comparisons.',
      tags: ['NFL Scouting', 'Prospect Analysis', 'Data Comparison', 'Benchmarking'],
      link: 'https://branch-emoji-7d7.notion.site/NFL-PROSPECT-PLAYER-COMPARISONS-1d9464f02ae88194a9d5ea500296a69a'
    },
    {
      title: 'Transfer Tracker Database',
      badge: 'Data Product',
      category: 'web',
      description: 'Comprehensive database system tracking NCAA athlete Name, Image, and Likeness (NIL) deals post-July 2021 NCAA ruling. Built normalized MySQL database with complex entity relationships between athletes, agents, sponsors, and deals. Implemented analytics queries to identify highest-valued NIL players, track agent performance, and scout athletes by specific metrics.',
      tags: ['MySQL', 'Database Design', 'SQL Analytics', 'ER Modeling', 'Data Management'],
      link: '/Transfer-Tracker-Project.pptx'
    },
    {
      title: 'NBA Summer League Analysis',
      badge: 'Modeling',
      category: 'data-science',
      description: 'Predictive analytics model helping NBA teams allocate payroll by identifying rookie talent worth extending contracts. Used Summer League data (2,848 observations) with logistic regression and decision trees to predict 5+ year NBA career success. Found steals per game (+51% odds) and PPG (+20% odds) as strongest predictors. Real-world validation on 2022 draft class.',
      tags: ['Logistic Regression', 'Decision Trees', 'Tableau', 'R Programming', 'Predictive Analytics', 'Machine Learning'],
      link: '/Scouting-Summer-League.pptx'
    },
    {
      title: 'Zerve AI Hackathon',
      badge: 'Judging in Progress',
      category: 'data-science',
      description: 'NBA prediction model built for Zerve AI hackathon competition. Currently under evaluation by judges.',
      tags: ['AI', 'NBA Analytics', 'Hackathon', 'Machine Learning'],
      link: 'https://zerve-nba-prediction-production.up.railway.app/'
    }
  ]

  const categories = ['all', 'web', 'data-science']
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)
  const featuredProject = filtered.find((project) => project.featured)
  const otherProjects = filtered.filter((project) => !project.featured)

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-eyebrow">Portfolio</span>
        <h2>Projects</h2>
      </div>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'All' : cat === 'web' ? 'Web Dev' : 'Data Science'}
          </button>
        ))}
      </div>

      {featuredProject && (
        <div className="featured-project">
          <div className="featured-badge">Featured</div>
          <div className="featured-content">
            <div className="featured-text">
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
            </div>
            <span className="project-badge">{featuredProject.badge}</span>
            <div className="featured-tags">
              {featuredProject.tags.map((tag, i) => (
                <span key={i} className="tag featured-tag">{tag}</span>
              ))}
            </div>
            <a href={featuredProject.link} className="featured-link">Open Full Report →</a>
          </div>
        </div>
      )}

      {otherProjects.length > 0 && <div className="section-divider">More Projects</div>}

      <div className="projects-grid other-projects">
        {otherProjects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <h3>{proj.title}</h3>
            </div>
            <span className="project-badge">{proj.badge}</span>
            <p className="project-description">{proj.description}</p>
            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={proj.link} className="project-link">View Project File →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
