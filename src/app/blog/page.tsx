import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from "@/components/layout/SectionContainer";
import styles from './page.module.css';

export const metadata = {
  title: "Editorial Blog | Aether Interiors",
  description: "Insights, trends, and inspiration from the world of luxury interior design.",
};

const posts = [
  {
    id: 1,
    title: 'The Return of Warm Minimalism in 2024',
    category: 'Design Trends',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    excerpt: 'Explore how designers are moving away from stark whites to embrace warmer, earth-toned palettes that foster a sense of sanctuary.'
  },
  {
    id: 2,
    title: 'Integrating Smart Home Tech Seamlessly',
    category: 'Architecture',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    excerpt: 'The ultimate luxury is convenience. Discover how to incorporate the latest home automation without compromising your aesthetic.'
  },
  {
    id: 3,
    title: 'Curating Art for High-End Spaces',
    category: 'Curation',
    date: 'February 10, 2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    excerpt: 'A guide to selecting and displaying fine art to elevate your interiors, featuring insights from top gallery curators.'
  },
  {
    id: 4,
    title: 'Sustainable Luxury: The New Standard',
    category: 'Sustainability',
    date: 'January 22, 2024',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80',
    excerpt: 'How eco-conscious materials and practices are shaping the future of high-end residential design.'
  },
  {
    id: 5,
    title: 'Maximizing Natural Light in Urban Apartments',
    category: 'Lighting',
    date: 'January 05, 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    excerpt: 'Strategic design choices that instantly brighten and enlarge city living spaces.'
  },
  {
    id: 6,
    title: 'The Art of the Statement Kitchen',
    category: 'Design Trends',
    date: 'December 18, 2023',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80',
    excerpt: 'Moving beyond purely functional spaces to create kitchens that serve as the crown jewel of the home.'
  }
];

export default function BlogPage() {
  return (
    <div className={styles.pageWrapper}>
      <SectionContainer>
        <div className={styles.header}>
          <h1 className={styles.title}>Editorial</h1>
          <p className={styles.subtitle}>
            Insights, trends, and inspiration from the world of luxury interior design.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {posts.map((post) => (
            <Link href="#" key={post.id} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
