import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/NavBar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'; // Ensure you have this component
import Committee from './pages/Committee';
import AdvisoryCommittee from './pages/AdvisoryCommittee';
import Dropdown from './components/dropdown/Dropdown';


function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > document.querySelector('.header').offsetHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Navbar isSticky={isSticky} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<Committee/>} />
        <Route path="/advisorycommittee" element={<AdvisoryCommittee/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
