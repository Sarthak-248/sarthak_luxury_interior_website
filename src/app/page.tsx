import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Designing Timeless Spaces That Inspire Everyday Living</h1>
          <p className={styles.heroSubtitle}>
            We create bespoke residential and commercial interiors that combine elegance, functionality, and exceptional craftsmanship.
          </p>
          <div className={styles.heroActions}>
            <Button href="/portfolio" variant="primary" size="lg">
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg" className={styles.heroOutlineBtn}>
              Book Consultation
            </Button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Luxury interior design"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <SectionContainer className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>250+</h3>
            <p className={styles.statLabel}>Projects Completed</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>12+</h3>
            <p className={styles.statLabel}>Years Experience</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>98%</h3>
            <p className={styles.statLabel}>Happy Clients</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.statNumber}>18</h3>
            <p className={styles.statLabel}>Design Awards</p>
          </div>
        </div>
      </SectionContainer>
      {/* FEATURED SERVICES SECTION */}
      <SectionContainer className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Bespoke Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive interior design solutions tailored to your lifestyle and business needs.
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {/* Service 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" alt="Residential Design" fill className={styles.serviceImage} />
              <div className={styles.serviceOverlay}></div>
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Residential Design</h3>
              <p className={styles.serviceDesc}>Crafting intimate, luxurious living spaces that reflect your personal taste.</p>
              <Button href="/services" variant="ghost" withArrow className={styles.serviceBtn}>Explore</Button>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Commercial Interiors" fill className={styles.serviceImage} />
              <div className={styles.serviceOverlay}></div>
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Commercial Interiors</h3>
              <p className={styles.serviceDesc}>Inspiring workspaces and retail environments designed for success.</p>
              <Button href="/services" variant="ghost" withArrow className={styles.serviceBtn}>Explore</Button>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageWrapper}>
              <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" alt="Luxury Villas" fill className={styles.serviceImage} />
              <div className={styles.serviceOverlay}></div>
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Luxury Villas</h3>
              <p className={styles.serviceDesc}>Grand architectural interiors for premium estates and private villas.</p>
              <Button href="/services" variant="ghost" withArrow className={styles.serviceBtn}>Explore</Button>
            </div>
          </div>
        </div>
        <div className={styles.centerAction}>
          <Button href="/services" variant="outline" size="lg">View All Services</Button>
        </div>
      </SectionContainer>

      {/* WHY CHOOSE US SECTION */}
      <SectionContainer className={styles.whyUsSection}>
        <div className={styles.splitLayout}>
          <div className={styles.splitImageContainer}>
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Elegant interior detail" fill className={styles.splitImage} />
          </div>
          <div className={styles.splitContent}>
            <h2 className={styles.sectionTitle}>The Aether Difference</h2>
            <p className={styles.splitDesc}>
              We believe that true luxury lies in the details. Our award-winning team brings unparalleled expertise, ensuring every project is executed flawlessly from concept to completion.
            </p>
            <ul className={styles.featureList}>
              <li>
                <strong>Personalized Design</strong>
                <span>Tailored concepts reflecting your unique vision.</span>
              </li>
              <li>
                <strong>Premium Materials</strong>
                <span>Sourcing only the finest finishes globally.</span>
              </li>
              <li>
                <strong>Dedicated Project Manager</strong>
                <span>Seamless execution and transparent communication.</span>
              </li>
              <li>
                <strong>3D Walkthroughs</strong>
                <span>Experience your space before it's built.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>
      {/* PROCESS TIMELINE SECTION */}
      <SectionContainer className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <p className={styles.sectionSubtitle}>
            A seamless journey from concept to completion.
          </p>
        </div>
        
        <div className={styles.timeline}>
          {[
            { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements.' },
            { step: '02', title: 'Concept', desc: 'Developing mood boards and initial designs.' },
            { step: '03', title: '3D Render', desc: 'Visualizing the space with photorealistic renders.' },
            { step: '04', title: 'Execution', desc: 'Procurement and flawless site execution.' },
            { step: '05', title: 'Handover', desc: 'Final walkthrough and styling.' },
          ].map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineStep}>{item.step}</div>
              <h4 className={styles.timelineTitle}>{item.title}</h4>
              <p className={styles.timelineDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* FEATURED PROJECTS SECTION */}
      <SectionContainer className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Selected Works</h2>
          <p className={styles.sectionSubtitle}>
            A curated selection of our finest luxury interior projects.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={`${styles.projectCard} ${styles.tall}`}>
            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" alt="Modern Luxury Apartment" fill className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Modern Luxury Apartment</h4>
              <p>Residential</p>
            </div>
          </div>
          {/* Project 2 */}
          <div className={styles.projectCard}>
            <Image src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80" alt="Minimal Villa" fill className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Minimal Villa</h4>
              <p>Residential</p>
            </div>
          </div>
          {/* Project 3 */}
          <div className={styles.projectCard}>
            <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" alt="Executive Office" fill className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Executive Office</h4>
              <p>Commercial</p>
            </div>
          </div>
          {/* Project 4 */}
          <div className={`${styles.projectCard} ${styles.wide}`}>
            <Image src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80" alt="Luxury Kitchen" fill className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h4>Luxury Kitchen</h4>
              <p>Residential</p>
            </div>
          </div>
        </div>
        
        <div className={styles.centerAction}>
          <Button href="/portfolio" variant="primary" size="lg">Explore Portfolio</Button>
        </div>
      </SectionContainer>
      
      {/* TESTIMONIALS SECTION */}
      <SectionContainer className={styles.testimonialsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Client Testimonials</h2>
        </div>
        
        <TestimonialSlider />
      </SectionContainer>
    </>
  );
}
