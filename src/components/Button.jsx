import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
    const baseStyles = 'px-8 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-secondary text-primary hover:bg-secondary/90 active:scale-[0.98]',
        secondary: 'bg-primary text-secondary hover:bg-primary/90 active:scale-[0.98]',
        outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary active:scale-[0.98]',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
};

export default Button;