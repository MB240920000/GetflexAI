import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Benefits from './pages/Benefits';
import Testimonials from './pages/Testimonials';
import HowItWorks from './pages/HowItWorks';
import Support from './pages/Support';
import BookDemo from './pages/BookDemo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import GettingStarted from './pages/GettingStarted';
import BestPractices from './pages/BestPractices';
import CaseStudy from './pages/CaseStudy';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/chat/Chatbot';
import './styles/animations.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/support" element={<Support />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}