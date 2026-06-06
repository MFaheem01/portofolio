import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ image, title, category, itemUrl, index = 0 }) => {
    return (
        <motion.a
            href={itemUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer block"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {/* External link icon */}
                <div className="absolute top-4 right-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <p className="text-primary text-sm font-medium tracking-wide mb-1">{category}</p>
                <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
        </motion.a>
    );
};

export default PortfolioCard;