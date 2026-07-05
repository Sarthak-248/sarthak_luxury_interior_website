"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FaqAccordion.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is your interior design process?",
    answer: "Our process begins with an in-depth consultation to understand your vision, lifestyle, and requirements. We then move into the concept phase, creating mood boards and spatial plans. Once approved, we handle everything from procurement and bespoke furniture design to the final installation and styling."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary depending on the scope of the project. A single room redesign may take 6-8 weeks, while a full-home renovation can take 6-12 months from concept to completion. We provide a detailed timeline during the proposal phase."
  },
  {
    question: "Do you work with contractors and architects?",
    answer: "Yes. We regularly collaborate with industry-leading architects, builders, and tradespeople. We can either bring in our trusted network of professionals or work seamlessly with your preferred team to ensure the design vision is executed flawlessly."
  },
  {
    question: "How do you charge for your design services?",
    answer: "We offer a transparent fee structure. Depending on the project, we charge either a flat design fee based on the scope of work, or an hourly rate for consultation services. All procurement is handled with full transparency."
  },
  {
    question: "Can you incorporate my existing furniture?",
    answer: "Absolutely. We believe in creating spaces that reflect your personal history. We can beautifully integrate your cherished pieces, antiques, or art collections into the new design scheme."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about working with Aether Interiors.</p>
      </div>
      
      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
          >
            <button 
              className={styles.faqQuestion} 
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className={styles.iconWrapper}>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={styles.faqAnswerWrapper}
                >
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
