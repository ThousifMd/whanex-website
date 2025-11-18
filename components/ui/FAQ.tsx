'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title, subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {title && (
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-grey max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-midnight border border-grey/20 rounded-xl overflow-hidden hover:border-cyan/40 transition-colors"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group min-h-[56px]"
            >
              <span className="text-base sm:text-lg font-heading font-semibold text-white group-hover:text-cyan transition-colors pr-4 sm:pr-8">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ChevronDownIcon className="w-6 h-6 text-cyan" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                    <motion.p
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      className="text-grey leading-relaxed text-sm sm:text-base"
                    >
                      {item.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
