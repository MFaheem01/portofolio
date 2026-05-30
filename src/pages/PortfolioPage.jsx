import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const categories = ['ALL'];

    const portfolioItems = [
        {
            category: 'Full Stack',
            title: 'Boat Trip Booking System',
            image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
        },
        {
            category: 'Full Stack',
            title: 'Technical Support Platform',
            image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        },
        {
            category: 'Full Stack',
            title: 'Responsive Portfolio Site',
            image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6',
        },
        {
            category: 'Full Stack',
            title: 'Custom RESTful API Service',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
        },
        {
            category: 'Full Stack',
            title: 'Secure Authentication System',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
        },
        {
            category: 'Full Stack',
            title: 'Shopify App & Landing Page',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
        },
        {
            category: 'Full Stack',
            title: 'Optimized Appliances Niche Site',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a',
        },
        {
            category: 'Full Stack',
            title: 'JSON-LD Schema Marketing',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        },
    ];

    const filteredItems = activeCategory === 'ALL'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <>
            <Helmet>
                <title>Portfolio - Muhammad Faheem</title>
                <meta name="description" content="Explore Muhammad Faheem's portfolio featuring responsive websites, backend applications, and SEO optimized platforms." />
            </Helmet>

            <div className="flex min-h-screen bg-background">
                <Sidebar />

                <main className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                                Portfolio
                            </h1>
                            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                                A curated selection of my work across frontend development, backend logic, and search engine optimization. Each project is crafted with high performance and usability in mind.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${activeCategory === category
                                        ? 'bg-primary text-secondary'
                                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {filteredItems.map((item, index) => (
                                    <PortfolioCard
                                        key={`${item.category}-${index}`}
                                        image={item.image}
                                        title={item.title}
                                        category={item.category}
                                        index={index}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredItems.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <p className="text-muted-foreground text-lg">No items found in this category.</p>
                            </motion.div>
                        )}
                    </div>
                </main>

                <ScrollDots />
            </div>
        </>
    );
};

export default PortfolioPage;