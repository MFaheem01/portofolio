import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ScrollDots = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pages = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/resume', label: 'Resume' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/testimonials', label: 'Testimonials' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
            {pages.map((page) => {
                const isActive = location.pathname === page.path;
                return (
                    <motion.button
                        key={page.path}
                        onClick={() => navigate(page.path)}
                        className="group relative"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Navigate to ${page.label}`}
                    >
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-primary/50'
                                }`}
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-secondary text-primary px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            {page.label}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
};

export default ScrollDots;