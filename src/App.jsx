import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Toaster position="top-right" richColors />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;