'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className="relative"
        >
          {/* Connecting Arrow (hidden on last item and mobile) */}
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-12 -right-2 z-0">
              <motion.svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <motion.path
                  d="M0 12 L28 12 M20 4 L30 12 L20 20"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          )}

          {/* Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-slate border border-cyan/20 rounded-2xl p-6 h-full hover:border-cyan/50 transition-colors group"
          >
            {/* Step Number Badge */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyber to-cyan flex items-center justify-center shadow-lg z-10"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-white font-heading font-bold text-lg">
                {step.number}
              </span>
            </motion.div>

            {/* Content */}
            <div className="mt-4">
              {/* Icon */}
              {step.icon && (
                <motion.div
                  className="mb-4 text-cyan"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.1 + 0.2
                  }}
                >
                  {step.icon}
                </motion.div>
              )}

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-cyan transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-grey text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/0 via-cyan/0 to-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
