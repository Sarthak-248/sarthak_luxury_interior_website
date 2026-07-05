"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TestimonialSlider.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Aether Interiors transformed our bare apartment into a breathtaking luxury home. Their attention to detail is truly unmatched. We felt heard at every step of the process.",
    name: "Eleanor Vance",
    role: "Homeowner, NYC",
    stars: 5,
  },
  {
    id: 2,
    text: "The commercial space they designed for us has completely elevated our brand perception. Truly an award-winning team. Our clients are consistently wowed.",
    name: "Marcus Thorne",
    role: "CEO, TechNova",
    stars: 5,
  },
  {
    id: 3,
    text: "A seamless, stress-free experience from the initial concept to the final handover. The team's professionalism and aesthetic sensibilities are exceptional.",
    name: "Sophia Chen",
    role: "Restaurateur",
    stars: 5,
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const slideRight = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideLeft = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      slideRight();
    }, 6000); // Auto slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.testimonialCard}
          >
            <div className={styles.stars}>
              {'★'.repeat(current.stars)}
            </div>
            <p className={styles.testimonialText}>"{current.text}"</p>
            <div className={styles.clientInfo}>
              <div className={styles.clientAvatar}></div>
              <div>
                <h5>{current.name}</h5>
                <span>{current.role}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className={styles.controls}>
        <button className={styles.controlBtn} onClick={slideLeft} aria-label="Previous Testimonial">
          <ChevronLeft size={24} />
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
        <button className={styles.controlBtn} onClick={slideRight} aria-label="Next Testimonial">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
