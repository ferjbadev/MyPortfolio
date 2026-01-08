import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skrills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import WhatsappButton from './components/WhatsappButton'

function App() {

  return (
    <div>
      <Navbar />
      <About />
      <WhatsappButton />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
