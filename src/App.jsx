import { useState } from 'react'


import './App.css'
import Navbar from './components/NavBar/Navbar'
import Header from './components/header/Header'
import Carousel from './components/crousels/Carousel'
import AboutConference from './components/sections/about/AboutConference'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Carousel/>
      <AboutConference/>
 
    </>
  )
}

export default App
