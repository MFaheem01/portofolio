import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import TargetCursor from '@/components/cursor/TargetCursor';
import { cn } from "./lib/utils";

function App() {
    return (
        <>
            <div className={cn('hidden', 'md:none', 'lg:block')}>
                {/* TargetCursor renders into document.body via a portal — no children needed */}
                <TargetCursor
                    targetSelector=".cursor-target"
                    spinDuration={2}
                    hideDefaultCursor={true}
                    parallaxOn={true}
                    cursorColor="#ffffff"
                    cursorColorOnTarget="hsl(45, 100%, 51%)"
                />
            </div>
            <Router>
                <ScrollToTop />
                <Toaster position="top-right" richColors />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutMePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;