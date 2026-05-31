import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';

const TestimonialsPage = () => {
    const testimonials = [
        {
            name: 'Maya Chen',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            rating: 5,
            text: 'Working with Faheem was an absolute pleasure. His attention to detail and ability to build high-performance React applications transformed our digital presence. The clean code he wrote was highly readable and perfectly structured.',
        },
        {
            name: 'Raj Patel',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
            rating: 5,
            text: 'Faheem delivered exceptional web development and SEO improvements for our boat trip booking platform. His JSON-LD schema implementation significantly boosted our visibility on Google and brought in consistent organic traffic.',
        },
        {
            name: 'Lucia Torres',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
            rating: 5,
            text: 'I hired Faheem for our company landing page and Shopify application development, and the results exceeded all expectations. He combined beautiful responsive layouts with excellent, robust backend integrations.',
        },
        {
            name: 'Kwame Asante',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
            rating: 5,
            text: 'Faheem is a true professional who brings both modern frontend expertise (React, Tailwind) and solid backend logic to every project. He completed our projects on time while maintaining incredibly high quality standards.',
        },
        {
            name: 'Anika Bergström',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
            rating: 5,
            text: 'From concept to execution, Faheem demonstrated exceptional skill in digital growth and link-building strategies. He successfully helped us strengthen our domain authority and outrank our core search competitors.',
        },
    ];

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
                                Don't just take my word for it. Here's what clients have to say about working with me on their web development, custom coding, and search engine optimization projects.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    image={testimonial.image}
                                    name={testimonial.name}
                                    rating={testimonial.rating}
                                    text={testimonial.text}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </main>

                <ScrollDots />
            </div>
        </>
    );
};

export default TestimonialsPage;