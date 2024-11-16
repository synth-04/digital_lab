import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedInView = ({ children, initial, animate, transition, threshold = 0.1, triggerOnce = true, style, ...props }) => {
  const [ref, inView] = useInView({ threshold, triggerOnce });

  return (
    <motion.div
      ref={ref} 
      initial={initial || { opacity: 0, y: 50 }} 
      animate={inView ? animate || { opacity: 1, y: 0 } : {}}
      transition={transition || { duration: 0.5 }}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedInView;
