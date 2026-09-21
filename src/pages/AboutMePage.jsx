import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Palette, Camera, Layout, Users, Award, Briefcase, GraduationCap } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';
import { any } from 'zod';
import { cn } from "../lib/utils";

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
            description: '– Built responsive, user-friendly interfaces using HTML, Bootstrap, Tailwind CSS, and React.js, ensuring a seamless experience across devices – Integrated dynamic components and reusable UI elements to improve performance and maintainability – Collaborated with backend teams to connect APIs, ensuring smooth data flow and consistent frontend rendering.',
        },
        {
            icon: Award,
            title: 'Backend Development',
            description: '– Built and optimized RESTful APIs, efficiently handling user interactions for news, video, and comments, boosting platform engagement. – Seamlessly integrated these APIs with EJS templates, delivering dynamic, smooth frontend updates across the entire application. – Utilized MongoDB capabilities for fast, scalable data storage and efficient retrieval, ensuring high performance.',
        },
    ];

    const resumeData = {
        experience: [
            {
                title: 'Web Developer & Link Builder',
                company: 'Max Core',
                period: '03/2025 - 05/2026',
                description: 'Contributed to Max Core digital growth by combining web development with SEO and link-building efforts. Developed and published optimized web pages, landing pages, technical sites, and Shopify-based applications. Implemented on-page SEO best practices using Yoast SEO and Rank Math, complete with JSON-LD schema markup for superior search engine visibility and ranking.',
            },
            {
                title: 'MERN Stack Web Developer',
                company: 'Freelance',
                period: '06/2026 - Present',
                description: 'Developed and maintained dynamic and responsive websites for clients across multiple niches, including home appliances, and technical platforms. Built and optimized web pages with clean, structured code to ensure fast load times and cross-browser compatibility. Implemented SEO best practices including JSON-LD schema markup, and worked closely with design and marketing teams.',
            },
        ],
        education: [
            {
                degree: 'I.C.S (Intermediate in Computer Science)',
                institution: 'Al Razi College',
                period: 'Completed',
                description: 'Completed Intermediate in Computer Science with a strong academic foundation, focusing on computer science, programming logic, and computational science. \n Relevant coursework: Data Structures, Database Systems, Algorithms, Artificial Intelligence, Information Retrieval, Data Science, Natural Language Processing.',
            },
        ],
        skills: {
            frontend: ['HTML', 'Bootstrap', 'Tailwind', 'JavaScript', 'React.js', 'Responsive Design'],
            backend: ['Node.js', 'Express.js', 'REST APIs', 'JSON Schema', 'SEO Optimization', 'Database Basics'],
            other: ['Adobe Photoshop', 'Basic WordPress', 'Link Building', 'Domain Authority Growth'],
        },
    };

    const funFacts = [
        { value: 12, suffix: '+', label: 'Projects Completed' },
        { value: 1.5, suffix: '+', label: 'Work Experience' },
        { value: 100, suffix: '%', label: 'Client Satisfaction' },
    ];

    return (
        <>
            <Helmet>
                <title>About me - Muhammad Faheem</title>
                <meta name="description" content="Learn more about Muhammad Faheem, a passionate Full Stack Web Developer with 1.5 years experience building responsive, high-performance websites and web applications." />
            </Helmet>

            <div className={cn('flex', 'min-h-screen', 'bg-background')}>
                <Sidebar />

                <main className={cn('flex-1', 'overflow-y-auto')}>
                    <div className={cn('container', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'py-20')}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-16"
                        >
                            <h1 className={cn('page-heading', 'text-foreground', 'mb-4', 'flex', 'items-center')}>
                                <span className={cn('text-primary', 'mb-4', 'lg:mb-4', 'md:mb-3')} aria-hidden="true">→</span>
                                About me
                            </h1>
                            <p className={cn('text-lg', 'leading-relaxed', 'text-muted-foreground', 'max-w-3xl')}>
                                A comprehensive overview of my journey, educational background, and technical expertise in full stack web development, design, and search engine optimization.
                            </p>
                        </motion.div>

                        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'mb-20')}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className={cn('text-3xl', 'font-semibold', 'text-foreground', 'mb-8')}>What I do!</h2>
                                <div className="space-y-8">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                            className={cn('flex', 'gap-6')}
                                        >
                                            <div className={cn('flex-shrink-0', 'w-16', 'h-16', 'rounded-xl', 'bg-primary/10', 'flex', 'items-center', 'justify-center')}>
                                                <skill.icon className="text-primary" size={30} />
                                            </div>
                                            <div>
                                                <h3 className={cn('text-xl', 'font-semibold', 'text-foreground', 'mb-2')}>{skill.title}</h3>
                                                <p className={cn('text-muted-foreground', 'leading-relaxed')}>{skill.description}</p>
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
                                <h2 className={cn('text-3xl', 'font-semibold', 'text-foreground', 'mb-8')}>Fun facts</h2>
                                <div className={cn('grid', 'grid-cols-2', 'gap-6')}>
                                    {funFacts.map((fact, index) => (
                                        <motion.div
                                            key={fact.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={cn('flex', 'flex-col', 'items-center', 'text-center')}
                                        >
                                            <div className={cn('w-32', 'h-32', 'rounded-full', 'bg-secondary', 'flex', 'items-center', 'justify-center', 'mb-4')}>
                                                <span className={cn('text-3xl', 'font-bold', 'text-primary')}>
                                                    <AnimatedCounter value={fact.value} suffix={fact.suffix} />
                                                </span>
                                            </div>
                                            <p className={cn('text-sm', 'font-medium', 'text-muted-foreground')}>{fact.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-16">
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={cn('flex', 'items-center', 'gap-4', 'mb-8')}>
                                    <div className={cn('w-12', 'h-12', 'rounded-xl', 'bg-primary/10', 'flex', 'items-center', 'justify-center')}>
                                        <Briefcase className="text-primary" size={30} />
                                    </div>
                                    <h2 className={cn('text-3xl', 'font-semibold', 'text-foreground')}>Professional experience</h2>
                                </div>

                                <div className="space-y-8">
                                    {resumeData.experience.map((job, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={cn('relative', 'pl-8', 'border-l-2', 'border-primary/30')}
                                        >
                                            <div className={cn('absolute', '-left-2', 'top-0', 'w-4', 'h-4', 'rounded-full', 'bg-primary')} />
                                            <div className={cn('bg-card', 'rounded-2xl', 'p-6', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'duration-300')}>
                                                <div className={cn('flex', 'flex-wrap', 'items-start', 'justify-between', 'gap-4', 'mb-3')}>
                                                    <div>
                                                        <h3 className={cn('text-xl', 'font-semibold', 'text-card-foreground')}>{job.title}</h3>
                                                        <p className={cn('text-primary', 'font-medium', 'mt-1')}>{job.company}</p>
                                                    </div>
                                                    <span className={cn('text-sm', 'font-medium', 'text-muted-foreground', 'bg-muted', 'px-4', 'py-1', 'rounded-full')}>
                                                        {job.period}
                                                    </span>
                                                </div>
                                                <p className={cn('text-muted-foreground', 'leading-relaxed')}>{job.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={cn('flex', 'items-center', 'gap-4', 'mb-8')}>
                                    <div className={cn('w-12', 'h-12', 'rounded-xl', 'bg-primary/10', 'flex', 'items-center', 'justify-center')}>
                                        <GraduationCap className="text-primary" size={30} />
                                    </div>
                                    <h2 className={cn('text-3xl', 'font-semibold', 'text-foreground')}>Education</h2>
                                </div>

                                <div className="space-y-8">
                                    {resumeData.education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={cn('relative', 'pl-8', 'border-l-2', 'border-primary/30')}
                                        >
                                            <div className={cn('absolute', '-left-2', 'top-0', 'w-4', 'h-4', 'rounded-full', 'bg-primary')} />
                                            <div className={cn('bg-card', 'rounded-2xl', 'p-6', 'shadow-sm', 'hover:shadow-md', 'transition-shadow', 'duration-300')}>
                                                <div className={cn('flex', 'flex-wrap', 'items-start', 'justify-between', 'gap-4', 'mb-3')}>
                                                    <div>
                                                        <h3 className={cn('text-xl', 'font-semibold', 'text-card-foreground')}>{edu.degree}</h3>
                                                        <p className={cn('text-primary', 'font-medium', 'mt-1')}>{edu.institution}</p>
                                                    </div>
                                                    <span className={cn('text-sm', 'font-medium', 'text-muted-foreground', 'bg-muted', 'px-4', 'py-1', 'rounded-full')}>
                                                        {edu.period}
                                                    </span>
                                                </div>
                                                <p className={cn('text-muted-foreground', 'leading-relaxed')}>{edu.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={cn('flex', 'items-center', 'gap-4', 'mb-8')}>
                                    <div className={cn('w-12', 'h-12', 'rounded-xl', 'bg-primary/10', 'flex', 'items-center', 'justify-center')}>
                                        <Award className="text-primary" size={30} />
                                    </div>
                                    <h2 className={cn('text-3xl', 'font-semibold', 'text-foreground')}>Skills</h2>
                                </div>

                                <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8')}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={cn('bg-card', 'rounded-2xl', 'p-6', 'shadow-sm')}
                                    >
                                        <h3 className={cn('text-lg', 'font-semibold', 'text-card-foreground', 'mb-4')}>Frontend skills</h3>
                                        <ul className="space-y-2">
                                            {resumeData.skills.frontend.map((skill, index) => (
                                                <li key={index} className={cn('flex', 'items-center', 'gap-2', 'text-muted-foreground')}>
                                                    <div className={cn('w-2', 'h-2', 'rounded-full', 'bg-primary')} />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className={cn('bg-card', 'rounded-2xl', 'p-6', 'shadow-sm')}
                                    >
                                        <h3 className={cn('text-lg', 'font-semibold', 'text-card-foreground', 'mb-4')}>Backend skills</h3>
                                        <ul className="space-y-2">
                                            {resumeData.skills.backend.map((skill, index) => (
                                                <li key={index} className={cn('flex', 'items-center', 'gap-2', 'text-muted-foreground')}>
                                                    <div className={cn('w-2', 'h-2', 'rounded-full', 'bg-primary')} />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className={cn('bg-card', 'rounded-2xl', 'p-6', 'shadow-sm')}
                                    >
                                        <h3 className={cn('text-lg', 'font-semibold', 'text-card-foreground', 'mb-4')}>Tools & SEO</h3>
                                        <ul className="space-y-2">
                                            {resumeData.skills.other.map((skill, index) => (
                                                <li key={index} className={cn('flex', 'items-center', 'gap-2', 'text-muted-foreground')}>
                                                    <div className={cn('w-2', 'h-2', 'rounded-full', 'bg-primary')} />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                </main>

                <ScrollDots />
            </div>
        </>
    );
};

export default AboutMePage;