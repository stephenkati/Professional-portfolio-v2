import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/Hero/HeroSection'
import Skills from './components/Skills'

function App() {
  return (
    <div className='bg-red-100'>
      <HeroSection />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
