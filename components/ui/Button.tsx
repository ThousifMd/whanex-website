'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-cyber text-white hover:bg-cyan hover:shadow-lg hover:shadow-cyan/50',
    secondary: 'border-2 border-cyan text-cyan hover:bg-cyan/10 hover:shadow-lg hover:shadow-cyan/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionButton>
  );
}
