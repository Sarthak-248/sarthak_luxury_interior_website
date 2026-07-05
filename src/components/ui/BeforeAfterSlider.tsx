"use client";

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div 
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Before Image (Background) */}
      <div className={styles.imageWrapper}>
        <Image 
          src={beforeImage} 
          alt={`${alt} Before`} 
          fill 
          sizes="(max-width: 1024px) 100vw, 800px"
          className={styles.image}
        />
        <div className={styles.labelBefore}>Before</div>
      </div>

      {/* After Image (Foreground with clip-path) */}
      <div 
        className={styles.imageWrapperAfter}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image 
          src={afterImage} 
          alt={`${alt} After`} 
          fill 
          sizes="(max-width: 1024px) 100vw, 800px"
          className={styles.image}
        />
        <div className={styles.labelAfter}>After</div>
      </div>

      {/* Slider Handle */}
      <div 
        className={styles.sliderHandle}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={styles.sliderLine}></div>
        <div className={styles.sliderButton}>
          <MoveHorizontal size={20} className={styles.sliderIcon} />
        </div>
      </div>
    </motion.div>
  );
}
