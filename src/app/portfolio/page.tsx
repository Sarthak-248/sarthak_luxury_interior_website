import React from 'react';
import Image from 'next/image';
import { SectionContainer } from "@/components/layout/SectionContainer";
import styles from './page.module.css';

export const metadata = {
  title: "Portfolio | Aether Interiors",
  description: "Explore our curated selection of bespoke residential and commercial interior projects.",
};

const projects = [
  { id: 1, title: 'Modern Luxury Apartment', category: 'Residential', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80', size: 'large' },
  { id: 2, title: 'Minimal Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80', size: 'small' },
  { id: 3, title: 'Executive Office', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', size: 'medium' },
  { id: 4, title: 'Luxury Kitchen', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80', size: 'large' },
  { id: 5, title: 'Boutique Café', category: 'Commercial', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80', size: 'small' },
  { id: 6, title: 'Scandinavian Home', category: 'Residential', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80', size: 'medium' },
  { id: 7, title: 'Luxury Penthouse', category: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', size: 'large' },
  { id: 8, title: 'Hotel Lobby', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80', size: 'small' },
];

export default function PortfolioPage() {
  return (
    <div className={styles.pageWrapper}>
      <SectionContainer>
        <div className={styles.header}>
          <h1 className={styles.title}>Selected Works</h1>
          <p className={styles.subtitle}>
            A curated selection of our finest interior projects, showcasing our commitment to elegance, functionality, and unparalleled craftsmanship.
          </p>
        </div>

        <div className={styles.masonryGrid}>
          {projects.map((project) => (
            <div key={project.id} className={`${styles.projectCard} ${styles[project.size]}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.projectOverlay}>
                <div className={styles.projectInfo}>
                  <p className={styles.category}>{project.category}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
