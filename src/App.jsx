import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Qualification from './components/Qualification'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

return(
  <>
  
  <Navbar/>
  <Hero/>
  <Skills/>
  <Services/>
  <Qualification/>
  <Portfolio/>
  <Testimonial/>
  <Contact/>

  </>
)
}

export default App
