import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, FileText, Briefcase, Star, Mail } from 'lucide-react';
import Button from '../components/Button.jsx';
import SocialIcons from '../components/SocialIcons.jsx';

/* ─── Arc geometry ────────────────────────────────────────────────────────── */
const W = 490;   // container width  (px)
const H = 410;   // container height (px)

// Quadratic Bézier: starts at top dot, curves to the right, ends at bottom dot
const P0 = { x: 282, y: 18 };   // top anchor
const P1 = { x: 480, y: 205 };  // control (determines how far right the bow goes)
const P2 = { x: 282, y: 392 };  // bottom anchor

const getBezier = (t) => ({
    x: (1 - t) * (1 - t) * P0.x + 2 * t * (1 - t) * P1.x + t * t * P2.x,
    y: (1 - t) * (1 - t) * P0.y + 2 * t * (1 - t) * P1.y + t * t * P2.y,
});

/* ─── Navigation items ────────────────────────────────────────────────────── */
const navItems = [
    { path: '/',             label: 'Home',         icon: Home },
    { path: '/about',        label: 'About',        icon: User },
    { path: '/resume',       label: 'Resume',       icon: FileText },
    { path: '/portfolio',    label: 'Portfolio',    icon: Briefcase },
    { path: '/testimonials', label: 'Testimonials', icon: Star },
    { path: '/contact',      label: 'Contact',      icon: Mail },
];

// Pre-compute icon positions evenly spaced along the arc
const iconPositions = navItems.map((_, i) =>
    getBezier((i + 1) / (navItems.length + 1))
);

/* ─── Component ───────────────────────────────────────────────────────────── */
const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Helmet>
                <title>Muhammad Faheem - Full Stack Web Developer</title>
                <meta
                    name="description"
                    content="Professional Full Stack Web Developer specializing in building responsive, high-performance websites and web applications. Ready to handle your next project."
                />
            </Helmet>

            <div className="min-h-screen bg-background relative overflow-hidden">
                {/* Yellow side accent bars */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-primary" />

                <div className="container mx-auto px-6 lg:px-10 min-h-screen flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full py-16">

                        {/* ── LEFT: Text content ───────────────────────────── */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-5"
                        >
                            {/* "HI THERE!" with underline */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="relative inline-block"
                            >
                                <span className="text-primary text-xl font-bold tracking-widest uppercase">
                                    HI THERE!
                                </span>
                                <span className="absolute -bottom-1 left-0 right-4 h-0.5 bg-primary/60 rounded" />
                            </motion.div>

                            {/* Name */}
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                                style={{ letterSpacing: '-0.02em' }}
                            >
                                <span className="text-foreground">I'M </span>
                                <span className="text-primary">FAHEEM</span>
                            </motion.h1>

                            {/* Badges */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col gap-2"
                            >
                                <span className="inline-flex items-center bg-foreground text-background px-4 py-1.5 text-xs font-bold tracking-widest uppercase w-fit">
                                    FULL STACK WEB DEVELOPER
                                </span>
                                <span className="inline-flex items-center bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold tracking-widest uppercase w-fit">
                                    READY TO HANDLE YOUR NEXT PROJECT
                                </span>
                            </motion.div>

                            {/* Bio */}
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.55 }}
                                className="text-sm leading-relaxed text-muted-foreground max-w-md"
                            >
                                I am Muhammad Faheem, a Full Stack web developer with 1.5 years
                                experience building responsive, high-performance websites and web
                                applications. Skilled in modern development tools and frameworks,
                                I craft clean, well-structured code that delivers seamless user
                                experiences.
                            </motion.p>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <Button onClick={() => navigate('/about')}>MORE ABOUT ME</Button>
                            </motion.div>
                        </motion.div>

                        {/* ── RIGHT: Profile photo + arc navigation ─────── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex items-center justify-center lg:justify-end"
                        >
                            {/* ── Desktop arc layout ── */}
                            <div
                                className="relative hidden lg:block flex-shrink-0"
                                style={{ width: `${W}px`, height: `${H}px` }}
                            >
                                {/* SVG: arc path + anchor dots */}
                                <svg
                                    className="absolute inset-0 pointer-events-none"
                                    width={W}
                                    height={H}
                                    viewBox={`0 0 ${W} ${H}`}
                                    fill="none"
                                >
                                    <path
                                        d={`M ${P0.x} ${P0.y} Q ${P1.x} ${P1.y} ${P2.x} ${P2.y}`}
                                        stroke="hsl(45, 100%, 51%)"
                                        strokeWidth="2.5"
                                        opacity="0.65"
                                    />
                                    <circle cx={P0.x} cy={P0.y} r="7" fill="hsl(45, 100%, 51%)" />
                                    <circle cx={P2.x} cy={P2.y} r="7" fill="hsl(45, 100%, 51%)" />
                                </svg>

                                {/* Profile photo */}
                                <div
                                    className="absolute"
                                    style={{ left: '8px', top: '50%', transform: 'translateY(-50%)' }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: 'spring', stiffness: 280 }}
                                        className="relative"
                                    >
                                        <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-primary shadow-2xl">
                                            <img
                                                src="/images/hero-seaction-images.jpg"
                                                alt="Muhammad Faheem – Professional portrait"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Subtle outer ring */}
                                        <div className="absolute -inset-3 rounded-full border-2 border-primary/25 -z-10" />
                                    </motion.div>
                                </div>

                                {/* Arc navigation icons */}
                                {navItems.map((item, index) => {
                                    const pos = iconPositions[index];
                                    const isActive = location.pathname === item.path;
                                    const Icon = item.icon;
                                    return (
                                        <motion.button
                                            key={item.path}
                                            onClick={() => navigate(item.path)}
                                            className="group absolute"
                                            style={{
                                                left: `${pos.x - 22}px`,
                                                top:  `${pos.y - 22}px`,
                                            }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.6 + index * 0.1,
                                                type: 'spring',
                                                stiffness: 260,
                                                damping: 14,
                                            }}
                                            whileHover={{ scale: 1.22 }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label={`Navigate to ${item.label}`}
                                        >
                                            {/* Icon circle */}
                                            <div
                                                className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                                                    isActive
                                                        ? 'bg-primary text-primary-foreground ring-4 ring-primary/30 scale-110'
                                                        : 'bg-secondary text-primary hover:bg-primary hover:text-primary-foreground'
                                                }`}
                                            >
                                                <Icon size={18} />
                                            </div>

                                            {/* Tooltip (appears to the left) */}
                                            <span className="absolute right-[54px] top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-border/40 z-50">
                                                {item.label}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* ── Mobile: photo only ── */}
                            <div className="lg:hidden">
                                <div className="relative">
                                    <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-8 border-primary shadow-2xl">
                                        <img
                                            src="/images/hero-seaction-images.jpg"
                                            alt="Muhammad Faheem – Professional portrait"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -inset-3 rounded-full border-2 border-primary/25" />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Social icons – bottom right */}
                <SocialIcons className="fixed right-8 bottom-8 z-30 hidden md:flex" />
            </div>
        </>
    );
};

export default HomePage;