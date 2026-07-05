import React from 'react';
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: "Book Consultation | Aether Interiors",
  description: "Schedule a direct consultation with our lead interior designers.",
};

export default function BookConsultation() {
  const phoneNumber = "+1234567890";
  const whatsappNumber = "1234567890";
  const whatsappMessage = "Hi Aether Interiors, I would like to book a consultation.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const telLink = `tel:${phoneNumber}`;

  return (
    <div className={styles.pageWrapper}>
      <SectionContainer>
        <div className={styles.header}>
          <h1 className={styles.title}>Book a Consultation</h1>
          <p className={styles.subtitle}>
            Ready to transform your space? Get in touch with us directly to discuss your project requirements and vision.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Methods */}
          <div className={styles.contactMethods}>
            <div className={styles.methodCard}>
              <div className={styles.iconWrapper}>
                <Phone size={32} />
              </div>
              <h3>Direct Call</h3>
              <p>Speak instantly with our lead designers.</p>
              <Button href={telLink} variant="primary" size="lg" className={styles.actionBtn}>
                Call Now
              </Button>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.iconWrapper}>
                <MessageCircle size={32} />
              </div>
              <h3>WhatsApp</h3>
              <p>Send us a quick message to schedule.</p>
              <Button href={whatsappLink} variant="secondary" size="lg" className={styles.actionBtn}>
                Message on WhatsApp
              </Button>
            </div>

            <div className={styles.infoCard}>
              <h4><Clock size={20} className={styles.smallIcon}/> Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div className={styles.infoCard}>
              <h4><MapPin size={20} className={styles.smallIcon}/> Our Studio</h4>
              <p>Aether Interiors Design Studio</p>
              <p>125 Luxury Avenue, Suite 400</p>
              <p>New York, NY 10001</p>
            </div>
          </div>

          {/* Map Location */}
          <div className={styles.mapContainer}>
            <h3 className={styles.mapTitle}>Find Us</h3>
            <div className={styles.mapWrapper}>
              <iframe 
                src="https://maps.google.com/maps?q=125%20Luxury%20Avenue,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
