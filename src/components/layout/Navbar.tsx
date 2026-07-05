"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Transformations', path: '/transformations' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Determine if the current page has a dark hero at the top.
  // If not, we want the navbar to appear solid (scrolled style) by default
  const hasDarkHero = pathname === '/' || pathname === '/about';
  const shouldBeSolid = !hasDarkHero || isScrolled;

  return (
    <header className={`${styles.header} ${shouldBeSolid ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          AETHER<span>.</span>
        </Link>

        <nav className={`${styles.desktopNav}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopOnly}>
            <Button href="/contact" variant="primary" size="sm">
              Book Consultation
            </Button>
          </div>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`${styles.mobileNavLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.mobileAction}>
            <Button href="/contact" variant="primary" size="md">
              Book Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
