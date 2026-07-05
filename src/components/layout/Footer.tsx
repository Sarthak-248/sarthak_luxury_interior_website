"use client";

import React from 'react';
import Link from 'next/link';
import { SectionContainer } from './SectionContainer';
import styles from './Footer.module.css';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <SectionContainer>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              AETHER<span>.</span>
            </Link>
            <p className={styles.description}>
              Designing timeless spaces that inspire everyday living. We bring luxury, functionality, and exceptional craftsmanship to every project.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="Pinterest">PT</a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Editorial Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services">Residential Design</Link></li>
              <li><Link href="/services">Commercial Interiors</Link></li>
              <li><Link href="/services">Luxury Villas</Link></li>
              <li><Link href="/services">Space Planning</Link></li>
              <li><Link href="/services">Turnkey Projects</Link></li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>
              Subscribe to receive design inspiration and exclusive updates.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Aether Interiors. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
