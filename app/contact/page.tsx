'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Let's Talk{' '}
            <span className="bg-gradient-to-r from-cyber to-cyan bg-clip-text text-transparent">
              Security
            </span>
          </h1>
          <p className="text-xl text-grey mb-8">
            Book your free security assessment. We'll respond within 24 hours with a clear action plan.
          </p>
        </motion.div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-slate/30">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-midnight border border-cyan/20 rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                Send us a message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircleIcon className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-grey">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-grey mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate border border-grey/30 rounded-lg text-white placeholder-grey focus:outline-none focus:border-cyan transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-grey mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate border border-grey/30 rounded-lg text-white placeholder-grey focus:outline-none focus:border-cyan transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-grey mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate border border-grey/30 rounded-lg text-white placeholder-grey focus:outline-none focus:border-cyan transition-colors"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-grey mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate border border-grey/30 rounded-lg text-white placeholder-grey focus:outline-none focus:border-cyan transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-grey mb-8">
                Whether you need a full security overhaul or just have questions about where to start, we're here to help.
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-midnight border border-success/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <ClockIcon className="w-8 h-8 text-success" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white">
                    Fast Response Time
                  </h3>
                  <p className="text-grey text-sm">Average: Under 12 hours</p>
                </div>
              </div>
              <p className="text-grey text-sm">
                We typically respond to all inquiries within 24 hours, often much faster. If you need urgent assistance, mention it in your message.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="w-6 h-6 text-cyan mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:vk2045@whanex.com"
                    className="text-grey hover:text-cyan transition-colors"
                  >
                    vk2045@whanex.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-cyan mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+15551234567"
                    className="text-grey hover:text-cyan transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="text-grey text-sm mt-1">
                    Monday - Friday, 9am - 6pm EST
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-slate border border-grey/20 rounded-xl p-6">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  'Free 30-minute security consultation',
                  'Custom security assessment for your stack',
                  'Clear pricing with no hidden fees',
                  'Fast onboarding (typically 7-10 days)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-grey text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Alternative Contact Methods */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-grey mb-8">
            Book a time directly on our calendar and we'll call you at your convenience.
          </p>
          <Button size="lg" variant="secondary" href="#">
            View Calendar
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
