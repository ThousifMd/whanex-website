'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'alert';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const variants = {
    default: 'bg-cyan/10 text-cyan border-cyan/30',
    success: 'bg-success/10 text-success border-success/30',
    warning: 'bg-warning/10 text-warning border-warning/30',
    alert: 'bg-alert/10 text-alert border-alert/30',
  };

  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium border ${variants[variant]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
}
