'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import FloatingElements from '@/components/ui/FloatingElements';
import FAQ from '@/components/ui/FAQ';
import {
  ServerIcon,
  ShieldCheckIcon,
  EyeIcon,
  DocumentCheckIcon,
  CloudIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface Service {
  id: string;
  name: string;
  icon: React.ReactElement;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
}

export default function Services() {
  const services: Service[] = [
    {
      id: 'network',
      name: 'Network Setup & Hardening',
      icon: <ServerIcon className="w-8 h-8" />,
      tagline: 'Build a fortress, not a house of cards',
      description:
        'Your network is your perimeter. We design and implement secure network architectures with proper segmentation, firewalls, VPNs, and access controls that keep threats out and data in.',
      features: [
        'Network architecture design and review',
        'Firewall configuration and management',
        'VPN setup for secure remote access',
        'Network segmentation and microsegmentation',
        'Intrusion detection and prevention systems',
        'Regular security audits and penetration testing',
      ],
      deliverables: [
        'Secure network architecture diagram',
        'Configured firewall and IDS/IPS',
        'VPN access for team members',
        'Network security policy documentation',
        'Monthly security reports',
      ],
    },
    {
      id: 'implementation',
      name: 'Security Implementation',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      tagline: "Lock down your stack before it's too late",
      description:
        'Comprehensive security controls across your entire technology stack. From endpoint protection to data encryption, we implement the tools and policies that enterprise clients expect.',
      features: [
        'Endpoint detection and response (EDR)',
        'Data loss prevention (DLP) systems',
        'Encryption for data at rest and in transit',
        'Access management and identity controls',
        'Security information and event management (SIEM)',
        'Multi-factor authentication (MFA) deployment',
      ],
      deliverables: [
        'Deployed security toolset',
        'Access control policies',
        'Encryption keys and management',
        'Security configuration guides',
        'Team training on security tools',
      ],
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Incident Response',
      icon: <EyeIcon className="w-8 h-8" />,
      tagline: '24/7 vigilance, rapid response',
      description:
        'Continuous monitoring with real-time threat detection and rapid incident response. Our team watches your systems around the clock and responds to threats before they become breaches.',
      features: [
        '24/7 security operations center (SOC) monitoring',
        'Real-time threat detection and alerting',
        'Incident response and forensics',
        'Threat intelligence integration',
        'Security orchestration and automated response (SOAR)',
        'Regular threat hunting exercises',
      ],
      deliverables: [
        '24/7 monitoring dashboard',
        'Incident response playbooks',
        'Weekly threat intelligence reports',
        'Monthly security posture reviews',
        'On-call incident response team',
      ],
    },
    {
      id: 'compliance',
      name: 'Governance & Compliance',
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      tagline: 'Pass audits, win enterprise deals',
      description:
        'Achieving compliance with SOC 2, GDPR, HIPAA, and other frameworks is critical for enterprise sales. We guide you through certification and maintain ongoing compliance.',
      features: [
        'SOC 2 Type II certification support',
        'GDPR and data privacy compliance',
        'HIPAA compliance for healthcare data',
        'Policy development and documentation',
        'Employee security training programs',
        'Audit preparation and support',
      ],
      deliverables: [
        'Compliance roadmap and timeline',
        'Policy and procedure documentation',
        'Audit-ready evidence collection',
        'Employee training materials',
        'Ongoing compliance monitoring',
      ],
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery Planning',
      icon: <ArrowPathIcon className="w-8 h-8" />,
      tagline: 'Plan for the worst, stay operational regardless',
      description:
        'Disasters happen—cyberattacks, system failures, natural events. We design, implement, and test disaster recovery systems that keep you running no matter what.',
      features: [
        'Business impact analysis and risk assessment',
        'Disaster recovery plan development',
        'Automated backup systems and testing',
        'Failover infrastructure and hot standby sites',
        'Regular DR drills and simulations',
        'Incident communication plans',
      ],
      deliverables: [
        'Comprehensive DR plan documentation',
        'Automated backup configuration',
        'Tested failover procedures',
        'Recovery time and point objectives',
        'Bi-annual DR testing reports',
      ],
    },
  ];

  const servicesFaqItems = [
    {
      question: 'Can I start with one service and add more later?',
      answer: 'Yes. Many clients start with Network Setup or Compliance support, then expand to Monitoring and Disaster Recovery as they grow. We design services to work independently or as an integrated security stack.',
    },
    {
      question: "What's included in the 24/7 monitoring service?",
      answer: 'Our Monitoring & Incident Response service includes: real-time threat detection via SIEM, automated alerting, on-call incident response engineers, weekly threat intelligence reports, and monthly security posture reviews. We monitor your entire infrastructure continuously.',
    },
    {
      question: 'How long does SOC 2 certification typically take?',
      answer: 'From start to Type II certification: 3-6 months. We help you build controls, document policies, collect evidence, and work with auditors. Timeline depends on your starting security maturity and how quickly you can implement recommendations.',
    },
    {
      question: 'Do you provide compliance support for regulated industries?',
      answer: 'Yes. We support HIPAA for healthcare, PCI-DSS for payment processing, and industry-specific frameworks. Our Governance & Compliance service includes gap assessments, control implementation, and ongoing compliance monitoring.',
    },
  ];

  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <FloatingElements />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Security Services{' '}
            <span className="bg-gradient-to-r from-cyber to-cyan bg-clip-text text-transparent">
              Built for Startups
            </span>
          </h1>
          <p className="text-xl text-grey mb-8">
            From network hardening to compliance certification, we provide the full spectrum of security services your startup needs.
          </p>
        </motion.div>
      </Section>

      {/* Interactive Services Section */}
      <Section className="bg-slate/30">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service List */}
          <div className="md:col-span-1 space-y-3">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all min-h-[48px] ${
                  selectedService.id === service.id
                    ? 'bg-cyber border-2 border-cyan shadow-lg shadow-cyan/20'
                    : 'bg-midnight border-2 border-grey/20 hover:border-cyan/40'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 ${
                      selectedService.id === service.id ? 'text-white' : 'text-cyan'
                    }`}
                  >
                    {service.icon}
                  </div>
                  <span
                    className={`font-semibold text-sm sm:text-base ${
                      selectedService.id === service.id ? 'text-white' : 'text-grey'
                    }`}
                  >
                    {service.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Detail Panel */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-midnight border border-cyan/30 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="text-cyan flex-shrink-0">{selectedService.icon}</div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                      {selectedService.name}
                    </h2>
                    <p className="text-cyan italic text-sm sm:text-base">{selectedService.tagline}</p>
                  </div>
                </div>

                <p className="text-grey mb-8 leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-4">
                      What We Do
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-grey">
                          <div className="w-1.5 h-1.5 bg-cyan rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-4">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start gap-2 text-grey">
                          <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button href="/contact">Get Started with {selectedService.name}</Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate/30">
        <FAQ
          title="Service FAQs"
          subtitle="Common questions about our security services"
          items={servicesFaqItems}
        />
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-cyber/20 to-cyan/20 border-y border-cyan/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-grey mb-8">
            Book a free consultation and we'll recommend the right services for your security maturity stage.
          </p>
          <Button size="lg" href="/contact">
            Schedule Free Consultation
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
