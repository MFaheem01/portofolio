import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx';
import ScrollDots from '../components/ScrollDots.jsx';

const ResumePage = () => {
    const resumeData = {
        experience: [
            {
                title: 'Web Developer & Link Builder',
                company: 'Max Core',
                period: '2025 - Present',
                description: 'Contributed to Max Core\'s digital growth by combining web development with SEO and link-building efforts. Developed and published optimized web pages, landing pages, technical sites, and Shopify-based applications. Implemented on-page SEO best practices using Yoast SEO and Rank Math, complete with JSON-LD schema markup for superior search engine visibility and ranking.',
            },
            {
                title: 'Web Developer',
                company: 'Xtreme Digital',
                period: 'Feb 2025',
                description: 'Developed and maintained responsive websites for clients across multiple niches, including boat trips, home appliances, and technical platforms. Built and optimized web pages with clean, structured code to ensure fast load times and cross-browser compatibility. Implemented SEO best practices including JSON-LD schema markup, and worked closely with design and marketing teams.',
            },
            {
                title: 'Freelance Web Developer',
                company: 'Self-Employed',
                period: 'Ongoing',
                description: 'Developing SEO-optimized websites, delivering responsive, well-structured, and high-performing web solutions tailored directly to clients\' requirements and business goals.',
            },
        ],
        education: [
            {
                degree: 'I.C.S (Intermediate in Computer Science)',
                institution: 'Al Razi College',
                period: 'Completed',
                description: 'Completed Intermediate in Computer Science with a strong academic foundation, focusing on computer science, programming logic, and computational science.',
            },
        ],
        skills: {
            frontend: ['HTML', 'Bootstrap', 'Tailwind', 'JavaScript', 'React.js', 'Responsive Design'],
            backend: ['Node.js', 'Express.js', 'REST APIs', 'JSON Schema', 'SEO Optimization', 'Database Basics'],
            other: ['Adobe Photoshop', 'Basic WordPress', 'Link Building', 'Yoast / Rank Math SEO', 'Keyword Research', 'Domain Authority Growth'],
        },
    };

    return (
        <>
            <Helmet>
                <title>Resume - Muhammad Faheem</title>
                <meta name="description" content="Professional experience, education, and skills of Muhammad Faheem - Full Stack Web Developer and SEO specialist." />
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
                                Resume
                            </h1>
                            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl">
                                A comprehensive overview of my professional journey, educational background, and technical expertise in full stack web development, design, and search engine optimization.
                            </p>
                        </motion.div>

                        <div className="space-y-16">
                            <motion.section
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Briefcase className="text-primary" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-foreground">Professional experience</h2>
                                </div>

                                <div className="space-y-8">
                                    {resumeData.experience.map((job, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-8 border-l-2 border-primary/30"
                                        >
                                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                                            <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-card-foreground">{job.title}</h3>
                                                        <p className="text-primary font-medium mt-1">{job.company}</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-1 rounded-full">
                                                        {job.period}
                                                    </span>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
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
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <GraduationCap className="text-primary" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-foreground">Education</h2>
                                </div>

                                <div className="space-y-8">
                                    {resumeData.education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-8 border-l-2 border-primary/30"
                                        >
                                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                                            <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-card-foreground">{edu.degree}</h3>
                                                        <p className="text-primary font-medium mt-1">{edu.institution}</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-1 rounded-full">
                                                        {edu.period}
                                                    </span>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
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
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Award className="text-primary" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-foreground">Skills</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-card rounded-2xl p-6 shadow-sm"
                                    >
                                        <h3 className="text-lg font-semibold text-card-foreground mb-4">Frontend skills</h3>
                                        <ul className="space-y-2">
                                            {resumeData.skills.frontend.map((skill, index) => (
                                                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
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
                                        className="bg-card rounded-2xl p-6 shadow-sm"
                                    >
                                        <h3 className="text-lg font-semibold text-card-foreground mb-4">Backend skills</h3>
                                        <ul className="space-y-2">
                                            {resumeData.skills.backend.map((skill, index) => (
                                                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
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
                                        className="bg-card rounded-2xl p-6 shadow-sm"
                                    >
                                        <h3 className="text-lg font-semibold text-card-foreground mb-4">Tools & SEO</h3>
                                        <ul className="space-y-2">
                                            {resumeData.skills.other.map((skill, index) => (
                                                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
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

export default ResumePage;