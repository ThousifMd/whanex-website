'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  icon,
  title,
  className = '',
  hover = true
}: CardProps) {
  return (
    <motion.div
      className={`bg-slate rounded-2xl border border-grey/20 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? {
        y: -8,
        boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)',
        borderColor: 'rgba(34, 211, 238, 0.3)'
      } : {}}
    >
      <div className="p-6 md:p-8">
        {icon && (
          <div className="mb-4 text-cyan">
            {icon}
          </div>
        )}
        {title && (
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-3">
            {title}
          </h3>
        )}
        <div className="text-grey">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
