'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { 
  CheckIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export default function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: 'Custom',
      description: 'Essential security for early-stage startups',
      features: [
        'Security assessment and risk analysis',
        'Basic firewall and network setup',
        'Endpoint protection (EDR)',
        'Email and web security',
        'Monthly security reports',
        'Email support (48h response)',
      ],
      highlighted: false,
      cta: 'Get Started',
    },
    {
      name: 'Growth',
      price: 'Custom',
      description: 'Complete security for scaling companies',
      features: [
        'Everything in Starter, plus:',
        '24/7 SOC monitoring and alerting',
        'SIEM and threat intelligence',
        'Compliance support',
        'Incident response and forensics',
        'Quarterly penetration testing',
        'Dedicated security account manager',
        'Priority support (4h response)',
      ],
      highlighted: true,
      cta: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full managed security for high-growth teams',
      features: [
        'Everything in Growth, plus:',
        'Fully managed MSSP services',
        'Advanced threat hunting',
        'Custom compliance frameworks',
        'Disaster recovery and business continuity',
        'Security orchestration (SOAR)',
        'Executive security consulting',
        'Dedicated security team',
        '24/7 phone support',
      ],
      highlighted: false,
      cta: 'Contact Sales',
    },
  ];

  const faqs = [
    {
      question: 'Do you offer month-to-month contracts?',
      answer:
        'Yes, all plans are available month-to-month with no long-term commitment. We also offer discounted annual contracts.',
    },
    {
      question: 'What if I need services from multiple tiers?',
      answer:
        'We can create custom packages that mix and match services from different tiers based on your specific needs.',
    },
    {
      question: 'How quickly can we get started?',
      answer:
        'Most clients are onboarded within 7-10 business days. Enterprise clients with complex requirements may take 2-3 weeks.',
    },
    {
      question: 'Do you support compliance for international regulations?',
      answer:
        'Yes, we support various international data protection regulations and industry-specific compliance frameworks.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyber/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-cyber to-cyan bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-grey mb-8">
            Security that scales with your startup. Choose the plan that fits your stage, upgrade as you grow.
          </p>
        </motion.div>
      </Section>

      {/* Pricing Tiers */}
      <Section className="bg-slate/30">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-midnight border-2 rounded-2xl ${
                tier.highlighted
                  ? 'border-cyan shadow-2xl shadow-cyan/20 md:scale-105 lg:scale-110 pb-6 px-6 sm:px-8 mt-8'
                  : 'border-grey/20 p-6 sm:p-8'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                  <Badge variant="default" className="px-4 py-1.5 shadow-lg bg-slate/95 backdrop-blur-sm">Most Popular</Badge>
                </div>
              )}

              <div className={`text-center mb-8 ${tier.highlighted ? 'pt-4' : ''}`}>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-grey text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-5xl font-heading font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-grey ml-2">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? 'text-cyan' : 'text-success'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        feature.includes('Everything in') ? 'text-cyan font-semibold' : 'text-grey'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? 'primary' : 'secondary'}
                className="w-full"
                href={`/contact?plan=${tier.name.toLowerCase()}`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-grey mb-4">
            Need something custom?{' '}
            <a href="/contact" className="text-cyan hover:underline">
              Let's talk about a tailored solution
            </a>
          </p>
        </motion.div>
      </Section>

      {/* Add-ons */}
      <Section className="bg-gradient-to-br from-slate/30 to-midnight/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Available Add-Ons
          </h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            Enhance any plan with additional services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'Penetration Testing',
              price: '$3,000',
              description: 'Quarterly comprehensive pen tests',
              icon: ShieldCheckIcon,
              period: 'per quarter',
              badge: 'Popular',
            },
            {
              name: 'Security Training',
              price: '$1,500',
              description: 'Monthly employee security awareness',
              icon: AcademicCapIcon,
              period: 'per month',
            },
            {
              name: 'Compliance Audit',
              price: '$5,000',
              description: 'Industry standard audit support',
              icon: DocumentCheckIcon,
              period: 'per audit',
            },
            {
              name: 'Disaster Recovery',
              price: '$2,500',
              description: 'Full DR planning and testing',
              icon: ArrowPathIcon,
              period: 'per year',
            },
          ].map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)',
              }}
              className="relative bg-midnight border-2 border-grey/20 rounded-2xl p-6 hover:border-cyan/50 transition-all overflow-hidden group flex flex-col"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Badge - positioned absolutely to not affect layout */}
              {addon.badge && (
                <div className="absolute -top-3 right-4 z-20">
                  <Badge variant="success" className="text-xs">
                    {addon.badge}
                  </Badge>
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon - consistent spacing for all cards */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan/20 to-cyber/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const Icon = addon.icon;
                      return <Icon className="w-6 h-6 text-cyan" />;
                    })()}
                  </div>
                </div>

                {/* Title - consistent spacing */}
                <h3 className="text-xl font-heading font-semibold text-white mb-2 group-hover:text-cyan transition-colors">
                  {addon.name}
                </h3>

                {/* Description - consistent spacing with min-height */}
                <p className="text-grey text-sm mb-6 leading-relaxed min-h-[3rem] flex-grow">
                  {addon.description}
                </p>

                {/* Price - consistent spacing and alignment, pushed to bottom */}
                <div className="pt-4 border-t border-grey/20 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-heading font-bold text-cyan">
                      {addon.price}
                    </p>
                  </div>
                  <p className="text-xs text-grey mt-1">{addon.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gradient-to-br from-slate/50 to-midnight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-midnight border border-grey/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-grey">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-grey mb-4">Still have questions?</p>
          <Button href="/contact">Contact Our Team</Button>
        </motion.div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-grey mb-8">
            Book a free consultation to discuss which plan is right for your startup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/contact">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="secondary" href="/services">
              View All Services
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
