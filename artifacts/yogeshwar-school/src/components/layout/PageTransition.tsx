import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

const variants = {
  initial: { opacity: 0, y: 18, scale: 0.99 },
  enter:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -12, scale: 0.99, transition: { duration: 0.25, ease: 'easeIn' } },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={location}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
