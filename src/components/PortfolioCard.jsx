import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ image, title, category, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-sm font-medium tracking-wide mb-1">{category}</p>
                <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;