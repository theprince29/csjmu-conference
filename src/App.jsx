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
import CallForPaper from './pages/callForPaper';
import Impdate from './pages/Impdate';
import AuthorInfo from './pages/AuthorInfo';
import Registration from './pages/Registration';
import Publication from './pages/Publication';
import Willbesoon from './components/sections/about/Willbesoon';
import Contactus from './pages/Contactus';
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
        <Route path="/call-for-papers" element={<CallForPaper/>} />
        <Route path="/important-dates" element={<Impdate/>} />
        <Route path="/author-info" element={<AuthorInfo/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/publications" element={<Publication/>} />
        <Route path="/speakers" element={<Willbesoon/>} />
        <Route path="/gallery" element={<Willbesoon/>} />
        <Route path="/nearby-attractions" element={<Willbesoon/>} />
        <Route path="/contact-us" element={<Contactus/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
