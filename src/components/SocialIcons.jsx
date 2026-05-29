import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Dribbble, Github } from 'lucide-react';

const SocialIcons = ({ className = '' }) => {
    const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/m-faheem-a84532380/', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
    ];

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {socialLinks.map((social, index) => (
                <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <social.icon size={20} />
                </motion.a>
            ))}
        </div>
    );
};

export default SocialIcons;