import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import CallForPaper from "./pages/CallForPaper";
import Impdate from "./pages/Impdate";
import AuthorInfo from "./pages/AuthorInfo";
import Registration from "./pages/Registration";
import Publication from "./pages/Publication";
import Willbesoon from "./components/sections/about/Willbesoon";
import Contactus from "./pages/Contactus";
import Gallery from "./pages/Gallery";
import Markey from "./components/markey/Markey";
import TouristSpots from "./pages/TouristSpots";
import NotFound from "./components/sections/notfound/NotFound";
import CountdownTimer from "./components/countdown/CountdownTimer";
import SubmissionGuide from "./pages/SubmissinGuide";
import TechnicalProgramCommittee from "./pages/TechnicalProgramCommittee";
import CallForSpecialSessions from "./pages/CallForSpecialSessions";
import CallForSponser from "./pages/CallForSponser";
import Speakers from "./pages/Speakers";
function AppContent() {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(
        window.scrollY > document.querySelector(".header").offsetHeight &&
          window.innerWidth > 1024
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SpeedInsights />
      <Header />
      <div className="flex justify-center mt-0">
        <CountdownTimer />
      </div>
      <Markey />
      {location.pathname === '/' && (
        <a
          href="https://cmt3.research.microsoft.com/ICRAECCT2025/Submission/Index"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mb-4 bg-primary-600 text-white font-semibold text-sm rounded-lg shadow hover:bg-primary hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform"
        >
          Submit Paper
        </a>)}
      <Navbar isSticky={isSticky} />
   
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/steering-committee" element={<Committee />} />
            <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
            <Route path="/call-for-papers" element={<CallForPaper />} />
            <Route
              path="/call-for-special-sessions"
              element={<CallForSpecialSessions />}
            />
            <Route path="/call-for-sponsopship" element={<CallForSponser />} />
            <Route path="/important-dates" element={<Impdate />} />
            <Route path="/crc-guidelines" element={<AuthorInfo />} />
            <Route
              path="/submission-guidelines"
              element={<SubmissionGuide />}
            />
            <Route
              path="/technical-program-committee"
              element={<TechnicalProgramCommittee />}
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/publications" element={<Publication />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/nearby-attractions" element={<TouristSpots />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
