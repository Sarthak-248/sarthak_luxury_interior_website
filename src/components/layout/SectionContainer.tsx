"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionContainer.module.css';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
