import { useState,useEffect } from 'react'


import './App.css'
import Navbar from './components/NavBar/Navbar'
import Header from './components/header/Header'
import Carousel from './components/crousels/Carousel'
import AboutConference from './components/sections/about/AboutConference'
import AboutUniversity from './components/sections/about/AboutUniversity'

function App() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      
      setIsSticky(window.scrollY > document.querySelector('.header').offsetHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header/>
      <Navbar isSticky={isSticky} />
      <Carousel/>
      <AboutConference/>
      <AboutUniversity/>
    </>
  )
}

export default App
