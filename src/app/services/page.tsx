import React from 'react';
import Image from 'next/image';
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import styles from './page.module.css';

export const metadata = {
  title: "Services | Aether Interiors",
  description: "Comprehensive luxury interior design services tailored to your unique lifestyle.",
};

const services = [
  {
    id: 1,
    title: 'Residential Design',
    description: 'We craft intimate, luxurious living spaces that reflect your personal taste and lifestyle. From city apartments to sprawling estates, our residential design service covers everything from space planning and material selection to custom furniture design and final styling.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
    features: ['Space Planning', 'Custom Furniture', 'Material Selection', 'Art Curation'],
  },
  {
    id: 2,
    title: 'Commercial Interiors',
    description: 'Inspiring workspaces and retail environments designed for success. We understand that commercial spaces need to balance brand identity with functionality and employee well-being.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    features: ['Brand Integration', 'Ergonomic Planning', 'Lighting Design', 'Acoustic Solutions'],
  },
  {
    id: 3,
    title: 'Turnkey Projects',
    description: 'A seamless, end-to-end solution where we handle every detail from the initial concept to the final handover. You simply walk into your perfectly finished space.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    features: ['Project Management', 'Procurement', 'Site Supervision', 'Quality Control'],
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.pageWrapper}>
      <SectionContainer className={styles.heroSection}>
        <div className={styles.header}>
          <h1 className={styles.title}>Bespoke Services</h1>
          <p className={styles.subtitle}>
            Comprehensive interior design solutions tailored to your lifestyle and business needs.
          </p>
        </div>
      </SectionContainer>

      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <SectionContainer key={service.id} className={index % 2 === 0 ? styles.serviceLight : styles.serviceDark}>
            <div className={`${styles.serviceLayout} ${index % 2 !== 0 ? styles.reversed : ''}`}>
              <div className={styles.textContent}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button href="/contact" variant={index % 2 === 0 ? "primary" : "secondary"}>
                  Enquire Now
                </Button>
              </div>
              <div className={styles.imageContent}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
              </div>
            </div>
          </SectionContainer>
        ))}
      </div>

      <SectionContainer>
        <FaqAccordion />
      </SectionContainer>
    </div>
  );
}
