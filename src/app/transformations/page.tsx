import React from 'react';
import { SectionContainer } from "@/components/layout/SectionContainer";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import styles from './page.module.css';

export const metadata = {
  title: "Transformations | Aether Interiors",
  description: "Witness the dramatic transformations of our luxury interior design projects.",
};

const transformations = [
  {
    id: 1,
    title: "The Heritage Estate",
    description: "A complete overhaul of a 1920s estate, transforming a dated, dark layout into a luminous, modern luxury residence while preserving its historic soul.",
    beforeImage: "/images/transformations/living_before.png",
    afterImage: "/images/transformations/living_after.png"
  },
  {
    id: 2,
    title: "Metropolitan Penthouse",
    description: "Stripping away early 2000s finishes to reveal a breathtaking, minimalist canvas overlooking the city skyline, featuring bespoke millwork and curated art.",
    beforeImage: "/images/transformations/kitchen_before.png",
    afterImage: "/images/transformations/kitchen_after.png"
  },
  {
    id: 3,
    title: "Coastal Retreat",
    description: "From a cramped, enclosed floorplan to a sprawling, open-concept living space that seamlessly integrates indoor and outdoor coastal living.",
    beforeImage: "/images/transformations/bedroom_before.png",
    afterImage: "/images/transformations/bedroom_after.png"
  }
];

export default function TransformationsPage() {
  return (
    <div className={styles.pageWrapper}>
      <SectionContainer>
        <div className={styles.header}>
          <h1 className={styles.title}>Transformations</h1>
          <p className={styles.subtitle}>
            True luxury is in the evolution. Drag the slider to witness how we elevate spaces from their original state into breathtaking, bespoke environments.
          </p>
        </div>

        <div className={styles.transformationsList}>
          {transformations.map((project) => (
            <div key={project.id} className={styles.projectBlock}>
              <div className={styles.sliderContainer}>
                <BeforeAfterSlider 
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  alt={project.title}
                />
              </div>
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
