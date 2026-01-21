// components/FadeUp.js
"use client"; // Needed in Next.js 13+ app directory

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 }, // start slightly below and invisible
    visible: {
        opacity: 1,
        y: 0, // final position
        transition: {
            duration: 0.8, // animation duration
            ease: "easeOut",
        },
    },
};

export default function FadeUp({ children, delay = 0 }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}
