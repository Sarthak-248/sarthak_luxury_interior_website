import React from 'react';
import Image from 'next/image';
import { SectionContainer } from "@/components/layout/SectionContainer";
import styles from './page.module.css';

export const metadata = {
  title: "About Us | Aether Interiors",
  description: "Learn about our award-winning interior design studio and our founder's vision.",
};

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Crafting Elegance</h1>
          <p className={styles.heroSubtitle}>
            We are Aether Interiors, an award-winning design studio dedicated to creating timeless, luxurious spaces.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image 
            src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80" 
            alt="Aether Interiors Studio" 
            fill 
            sizes="100vw"
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Story Section */}
      <SectionContainer className={styles.storySection}>
        <div className={styles.splitLayout}>
          <div className={styles.textContent}>
            <h2>Our Story</h2>
            <p>
              Founded in 2012 by Eleanor Vance, Aether Interiors began with a singular vision: to bring a highly personalized, artisanal approach to luxury interior design. Over the past decade, we have evolved from a boutique agency into a premier design firm recognized globally for our commitment to excellence.
            </p>
            <p>
              Our philosophy is rooted in the belief that true luxury is quiet, functional, and perfectly tailored to the individual. We source the finest materials from around the world and collaborate with master craftsmen to ensure every detail is executed to perfection.
            </p>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
                alt="Design details" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Team Section */}
      <SectionContainer className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <h2>Meet The Experts</h2>
          <p>The visionaries behind our most celebrated spaces.</p>
        </div>
        <div className={styles.teamGrid}>
          {/* Team Member 1 */}
          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Eleanor Vance" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.teamImage} />
            </div>
            <div className={styles.teamInfo}>
              <h3>Eleanor Vance</h3>
              <p>Founder & Principal Designer</p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Marcus Thorne" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.teamImage} />
            </div>
            <div className={styles.teamInfo}>
              <h3>Marcus Thorne</h3>
              <p>Lead Architect</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className={styles.teamCard}>
            <div className={styles.teamImageWrapper}>
              <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" alt="Sophia Chen" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.teamImage} />
            </div>
            <div className={styles.teamInfo}>
              <h3>Sophia Chen</h3>
              <p>Senior Interior Designer</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
