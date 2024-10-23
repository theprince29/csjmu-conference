import { useState } from 'react'


import './App.css'
import Navbar from './components/NavBar/Navbar'
import Header from './components/header/Header'
import Carousel from './components/crousels/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Carousel/>
 
    </>
  )
}

export default App
