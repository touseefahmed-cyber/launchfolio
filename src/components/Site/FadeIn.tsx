"use client";
import React from 'react';
import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
}

const FadeIn = ({ children, duration = 0.8, delay = 0 }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}       // Start invisible
            whileInView={{ opacity: 1 }}   // Animate to fully visible when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible, only once
            transition={{ duration, delay }} // Animation timing
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
