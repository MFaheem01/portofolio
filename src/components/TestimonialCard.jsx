import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ image, name, rating, text, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className="flex items-center gap-4 mb-6">
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                    <h4 className="font-semibold text-lg text-card-foreground">{name}</h4>
                    <div className="flex gap-1 mt-1">
                        {[...Array(rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-primary text-primary" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
        </motion.div>
    );
};

export default TestimonialCard;