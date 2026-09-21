import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import { cn } from "../lib/utils";

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');

    const categories = ['ALL'];

    const portfolioItems = [
        {
            category: 'Full Stack',
            title: 'A Digital Evolution, Blending Creativity',
            image: '/images/Adm-digital-solution.jpeg',
            itemUrl: 'https://www.admdigitalsolutions.com/',
        },
        {
            category: 'Full Stack',
            title: 'E-Commerce Platform for Book Lovers and Bibliophiles',
            image: '/images/book-sphere-web.jpeg',
            itemUrl: 'https://books-spheres.vercel.app/',
        },
        {
            category: 'Full Stack',
            title: 'E-Commerce Platform for Scrap and Waste Management Services',
            image: '/images/Ascrap.online-web.jpeg',
            itemUrl: 'https://www.ascrap.online/',
        },
        {
            category: 'Full Stack',
            title: 'Digital marketplace for selling industrial waste in Dubai, UAE.',
            image: '/images/Al-adnan-web.jpeg',
            itemUrl: 'https://www.scrapuae.online/',
        },
        {
            category: 'Full Stack',
            title: 'Next-Generation Social Media and Analytics Platform',
            image: '/images/procaise-web.png',
            itemUrl: 'https://papyrus.pocais.com/',
        },

        {
            category: 'Full Stack',
            title: 'Idevyai is a platform for validating and selling ideas, as well as for securing funding and finding partners.',
            image: '/images/idevya-web.jpeg',
            itemUrl: 'https://www.idevya.com/',
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
            image: '/images/RideOn.jpeg',
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

            <div className={cn('flex', 'min-h-screen', 'bg-background')}>
                <Sidebar />

                <main className={cn('flex-1', 'overflow-y-auto')}>
                    <div className={cn('container', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-20')}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <h1 className={cn('page-heading', 'text-foreground', 'mb-4', 'flex', 'items-center')}>
                                <span className={cn('text-primary', 'mb-4', 'lg:mb-5', 'md:mb-3')} aria-hidden="true">→</span>
                                Portfolio
                            </h1>
                            <p className={cn('text-lg', 'leading-relaxed', 'text-muted-foreground', 'max-w-3xl')}>
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
                                className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-6')}
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
                                className={cn('text-center', 'py-20')}
                            >
                                <p className={cn('text-muted-foreground', 'text-lg')}>No items found in this category.</p>
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