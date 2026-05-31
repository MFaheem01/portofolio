import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SocialIcons from './SocialIcons.jsx';

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { path: '/', label: 'HOME' },
        { path: '/about', label: 'ABOUT ME' },
        { path: '/resume', label: 'RESUME' },
        { path: '/portfolio', label: 'PORTFOLIO' },
        { path: '/testimonials', label: 'TESTIMONIALS' },
        { path: '/contact', label: 'CONTACT' },
    ];

    const SidebarContent = () => (
        <>
            <div className="flex flex-col bg-slate-900 items-center pt-12 pb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary mb-6">
                    <img
                        src="/images/hero-seaction-images.jpg"
                        alt="Muhammad Faheem - MERN Stack Web Developer"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-2xl font-bold text-primary underline underline-offset-4 decoration-primary">Muhammad Faheem</h2>
                <p className="text-primary underline underline-offset-4 decoration-primary text-sm mt-1">MERN Stack Web Developer</p>
            </div>

            <nav className="flex-1 px-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${isActive
                                        ? 'bg-secondary text-primary'
                                        : 'text-secondary hover:bg-secondary/10'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* <div className="px-6 pb-8">
                <div className="flex justify-center gap-3">
                    <SocialIcons className="flex-row" />
                </div>
            </div> */}
        </>
    );

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary shadow-lg"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside className="hidden lg:flex lg:w-80 bg-primary h-screen sticky top-0 flex-col">
                <SidebarContent />
            </aside>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-primary z-50 flex flex-col"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;