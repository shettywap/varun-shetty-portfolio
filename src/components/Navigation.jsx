import './Navigation.css'

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-icon">🏈</span>
              <h1>Varun Shetty</h1>
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('articles')}>Articles</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Work Experience</button></li>
          <li><button onClick={() => scrollToSection('education')}>College Experience</button></li>
        </ul>
      </div>
    </nav>
  )
}
