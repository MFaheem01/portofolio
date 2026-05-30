import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, FileText, Briefcase, Star, Mail } from 'lucide-react';

const pages = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
    { path: '/testimonials', label: 'Testimonials', icon: Star },
    { path: '/contact', label: 'Contact', icon: Mail },
];

const ScrollDots = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Home page uses its own arc navigation — don't render here
    if (location.pathname === '/') return null;

    return (
        <motion.div
            className="fixed right-6 top-40 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Top accent dot */}
            <motion.div
                className="w-2.5 h-2.5 rounded-full bg-primary mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
            />
            <div className="w-px h-2 bg-primary/40" />

            {pages.map((page, index) => {
                const isActive = location.pathname === page.path;
                const Icon = page.icon;
                return (
                    <React.Fragment key={page.path}>
                        <motion.button
                            onClick={() => navigate(page.path)}
                            className="group relative"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.07 }}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Navigate to ${page.label}`}
                        >
                            <div
                                className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${isActive
                                    ? 'bg-primary text-primary-foreground shadow-primary/40 scale-110'
                                    : 'bg-secondary text-primary hover:bg-primary hover:text-primary-foreground'
                                    }`}
                            >
                                <Icon size={18} />
                            </div>

                            {/* Tooltip */}
                            <span className="absolute right-[54px] top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-border/50">
                                {page.label}
                            </span>
                        </motion.button>

                        {index < pages.length - 1 && (
                            <div className="w-px h-2 bg-primary/30" />
                        )}
                    </React.Fragment>
                );
            })}

            <div className="w-px h-2 bg-primary/40" />
            {/* Bottom accent dot */}
            <motion.div
                className="w-2.5 h-2.5 rounded-full bg-primary mt-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
            />
        </motion.div>
    );
};

export default ScrollDots;