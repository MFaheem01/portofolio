import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';

const TestimonialsPage = () => {
    

    return (
        <>
            <Helmet>
                <title>Testimonials - Muhammad Faheem</title>
                <meta name="description" content="Read what clients say about working with Muhammad Faheem. Discover testimonials from satisfied clients across various web development and SEO projects." />
            </Helmet>

            <div className="flex min-h-screen bg-background">
                <Sidebar />

                <main className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <h1 className="page-heading text-foreground mb-4 flex items-center">
                                <span className="text-primary mb-4 lg:mb-5 md:mb-3" aria-hidden="true">→</span>
                                Testimonials
                            </h1>
                            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                                Your feedback could be featured here after we work together. I'm committed to providing high-quality work and ensuring every client has a great experience.....</p>
                        </motion.div>
                    </div>
                </main>

                <ScrollDots />
            </div>
        </>
    );
};

export default TestimonialsPage;