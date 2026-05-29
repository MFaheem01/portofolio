import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Palette, Camera, Layout, Users, Award, Briefcase } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';

const AnimatedCounter = ({ value, suffix = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const [displayValue, setDisplayValue] = React.useState(0);

    React.useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    React.useEffect(() => {
        springValue.on('change', (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref}>
            {displayValue}
            {suffix}
        </span>
    );
};

const AboutMePage = () => {
    const skills = [
        {
            icon: Layout,
            title: 'Frontend Development',
            description: 'Building beautiful, responsive, and high-performance websites using HTML, Bootstrap, Tailwind, JavaScript, and React.js to ensure a seamless experience on all screens.',
        },
        {
            icon: Award,
            title: 'Backend Development',
            description: 'Crafting reliable, scalable server-side systems and APIs using Node.js and Express.js to power robust dynamic applications and handle complex data.',
        },
        {
            icon: Palette,
            title: 'Branding & CMS',
            description: 'Designing beautiful visual assets with Adobe Photoshop and configuring optimized, search-engine-ready websites with Basic WordPress.',
        },
    ];

    const funFacts = [
        { value: 25, suffix: '+', label: 'Projects Completed' },
        { value: 15, suffix: '+', label: 'Happy Clients' },
        { value: 2, suffix: ' Yrs', label: 'Work Experience' },
        { value: 8, suffix: '+', label: 'Core Skills' },
        { value: 100, suffix: '%', label: 'Client Satisfaction' },
        { value: 99, suffix: '%', label: 'SEO Success Rate' },
    ];

    return (
        <>
            <Helmet>
                <title>About me - Muhammad Faheem</title>
                <meta name="description" content="Learn more about Muhammad Faheem, a passionate Full Stack Web Developer with 1.5 years experience building responsive, high-performance websites and web applications." />
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
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                                About me
                            </h1>
                            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                                I am Muhammad Faheem, a Full Stack web developer with 1.5 years experience building responsive, high-performance websites and web applications. Skilled in using modern development tools and frameworks, I craft clean and well-structured code that delivers seamless user experiences and drives results.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-semibold text-foreground mb-8">What I do!</h2>
                                <div className="space-y-8">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                            className="flex gap-6"
                                        >
                                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <skill.icon className="text-primary" size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-foreground mb-2">{skill.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-semibold text-foreground mb-8">Fun facts</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {funFacts.map((fact, index) => (
                                        <motion.div
                                            key={fact.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col items-center text-center"
                                        >
                                            <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mb-4">
                                                <span className="text-3xl font-bold text-primary">
                                                    <AnimatedCounter value={fact.value} suffix={fact.suffix} />
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium text-muted-foreground">{fact.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>

                <ScrollDots />
            </div>
        </>
    );
};

export default AboutMePage;