'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export default function FloatingElements() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce particle count on mobile
  const particleCount = isMobile ? 5 : 15;

  // Generate random positions once and memoize them
  const particlePositions = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs - smaller on mobile */}
      <motion.div
        className={`absolute ${isMobile ? 'w-48 h-48' : 'w-64 h-64'} bg-cyber/10 rounded-full blur-3xl`}
        animate={{
          x: [0, isMobile ? 50 : 100, 0],
          y: [0, isMobile ? -25 : -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '10%' }}
      />

      <motion.div
        className={`absolute ${isMobile ? 'w-56 h-56' : 'w-96 h-96'} bg-cyan/10 rounded-full blur-3xl`}
        animate={{
          x: [0, isMobile ? -40 : -80, 0],
          y: [0, isMobile ? 50 : 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '40%', right: '10%' }}
      />

      {!isMobile && (
        <motion.div
          className="absolute w-72 h-72 bg-cyber/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', left: '30%' }}
        />
      )}

      {/* Floating particles - reduced on mobile, only render after mount */}
      {isMounted && particlePositions.slice(0, particleCount).map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan/30 rounded-full"
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}

      {/* Grid lines - hidden on mobile for performance */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-cyan"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      )}
    </div>
  );
}
