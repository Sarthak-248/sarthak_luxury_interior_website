import React from 'react';
import styles from './Button.module.css';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  href?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', withArrow = false, href, children, ...props }, ref) => {
    
    const rootClassName = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
      return (
        <a href={href} className={rootClassName}>
          <span>{children}</span>
          {withArrow && <ArrowRight className={styles.icon} size={18} />}
        </a>
      );
    }

    return (
      <button ref={ref} className={rootClassName} {...props}>
        <span>{children}</span>
        {withArrow && <ArrowRight className={styles.icon} size={18} />}
      </button>
    );
  }
);

Button.displayName = 'Button';
