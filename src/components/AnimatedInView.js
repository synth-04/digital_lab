// src/components/AnimatedInView.js

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedInView = ({ children, initial, animate, transition, threshold = 0.1, triggerOnce = true, style, ...props }) => {
  // useInView hook to determine when the element is visible
  const [ref, inView] = useInView({ threshold, triggerOnce });

  return (
    <motion.div
      ref={ref} // Attach ref for visibility tracking
      initial={initial || { opacity: 0, y: 50 }} // Default initial state
      animate={inView ? animate || { opacity: 1, y: 0 } : {}} // Animate when visible
      transition={transition || { duration: 0.5 }} // Default transition
      style={style}
      {...props} // Allow passing other motion props
    >
      {children}
    </motion.div>
  );
};

export default AnimatedInView;
