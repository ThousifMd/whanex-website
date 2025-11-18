'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 11, 25, 0)', 'rgba(5, 11, 25, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              {/* Shield Icon */}
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M20 4L8 9V18C8 25.5 13.5 32.5 20 35C26.5 32.5 32 25.5 32 18V9L20 4Z"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              {/* Gradient Text with Animation */}
              <motion.span
                className="font-heading font-semibold text-2xl bg-gradient-to-r from-cyan via-cyber to-cyan bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Whanex
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-grey hover:text-cyan transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" href="/contact">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                className="w-full h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu - Full Screen */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { height: 'auto', opacity: 1 },
            closed: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-midnight/95 backdrop-blur-xl"
        >
          <div className="py-8 px-4 space-y-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-cyan transition-colors py-3 px-4 text-lg font-medium hover:bg-cyan/10 rounded-lg"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="pt-4"
            >
              <Button size="md" href="/contact" className="w-full">
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom border with gradient */}
      {isScrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
        />
      )}
    </motion.nav>
  );
}
