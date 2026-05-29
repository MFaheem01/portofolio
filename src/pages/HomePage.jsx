import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import SocialIcons from '../components/SocialIcons.jsx';
import ScrollDots from '../components/ScrollDots.jsx';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Muhammad Faheem - Full Stack Web Developer</title>
                <meta name="description" content="Professional Full Stack Web Developer specializing in building responsive, high-performance websites and web applications. Ready to handle your next project." />
            </Helmet>

            <div className="min-h-screen bg-background relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full py-15">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-primary text-lg font-medium tracking-wide"
                            >
                                HI THERE!
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                I'M FAHEEM
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl font-semibold text-muted-foreground"
                            >
                                FULL STACK WEB DEVELOPER
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg font-medium text-accent"
                            >
                                READY TO HANDLE YOUR NEXT PROJECT
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-base leading-relaxed text-muted-foreground max-w-prose"
                            >
                                I am Muhammad Faheem, a Full Stack web developer with 1.5 years experience building responsive, high-performance websites and web applications. Skilled in using modern development tools and frameworks, I craft clean and well-structured code that delivers seamless user experiences.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <Button onClick={() => navigate('/about')}>
                                    MORE ABOUT ME
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="relative"
                                style={{ perspective: '1000px' }}
                            >
                                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary shadow-2xl">
                                    <img
                                        src="/images/hero-seaction-images.jpg"
                                        alt="Muhammad Faheem - Professional portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -inset-4 rounded-full border-2 border-primary/30 -z-10" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <SocialIcons className="fixed right-8 bottom-8 z-30 hidden md:flex" />
                <ScrollDots />
            </div>
        </>
    );
};

export default HomePage;