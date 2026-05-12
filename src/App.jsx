import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Projects />
      <Articles />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}

export default App
