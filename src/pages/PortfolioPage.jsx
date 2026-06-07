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
            title: 'A Digital Evolution, Blending Creativity',
            image: '/images/Adm-digital-solution.png',
            itemUrl: 'https://www.admdigitalsolutions.com/',
        },
        {
            category: 'Full Stack',
            title: 'E-Commerce Platform for Book Lovers and Bibliophiles',
            image: '/images/book-sphere-web.png',
            itemUrl: 'https://books-spheres.vercel.app/',
        },
        {
            category: 'Full Stack',
            title: 'E-commerce Platform for General Trading in Oman',
            image: '/images/Extbuy-e-com-web.png',
            itemUrl: 'https://www.extbuy.om/',
        },
        {
            category: 'Full Stack',
            title: 'Organic & Tasty Food for your Table.',
            image: '/images/the-cove-web.png',
            itemUrl: 'https://thecove.jojig.shop/',
        },
        {
            category: 'Full Stack',
            title: 'Next-Generation Social Media and Analytics Platform',
            image: '/images/procaise-web.png',
            itemUrl: 'https://papyrus.pocais.com/',
        },
        {
            category: 'Full Stack',
            title: 'Data-Driven Content Marketing and Collaboration Platform',
            image: '/images/Clustivo.png',
            itemUrl: 'https://clustivo.vercel.app/login?callbackUrl=%2Fadmin%2Fdashboard',
        },
        {
            category: 'Full Stack',
            title: 'Fashion E-Commerce Platform for Boutique',
            image: '/images/laraib.png',
            itemUrl: 'https://laraibfashion.foryouwin.com/',
        },
        {
            category: 'Full Stack',
            title: 'E-Commerce Platform for Motorcycles and Bicycles Store',
            image: '/images/RideOn.png',
            itemUrl: 'https://rideon-six.vercel.app/',
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
                            <h1 className="page-heading text-foreground mb-4 flex items-center">
                                <span className="text-primary mb-4 lg:mb-5 md:mb-3" aria-hidden="true">→</span>
                                Portfolio
                            </h1>
                            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                                A curated selection of my work across frontend development, backend logic, and search engine optimization. Each project is crafted with high performance and usability in mind.
                            </p>
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
                                {portfolioItems.map((item, index) => (
                                    <PortfolioCard
                                        key={`${item.category}-${index}`}
                                        image={item.image}
                                        title={item.title}
                                        category={item.category}
                                        itemUrl={item.itemUrl}
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