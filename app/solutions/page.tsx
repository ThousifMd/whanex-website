'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Timeline from '@/components/ui/Timeline';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FloatingElements from '@/components/ui/FloatingElements';
import FAQ from '@/components/ui/FAQ';
import {
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  EyeIcon,
  CogIcon,
  ServerIcon,
  ChartBarIcon,
  CloudIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export default function Solutions() {
  const timelineSteps = [
    {
      number: 1,
      title: 'Assess',
      description:
        'Deep dive into your current security posture. We identify vulnerabilities, compliance gaps, and risk factors across your entire stack.',
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
    },
    {
      number: 2,
      title: 'Secure',
      description:
        'Implement enterprise-grade security controls. Firewalls, access management, encryption, and network segmentation tailored to your needs.',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
    },
    {
      number: 3,
      title: 'Monitor',
      description:
        '24/7 threat detection and response. Continuous monitoring with real-time alerts so you know about issues before they become incidents.',
      icon: <EyeIcon className="w-8 h-8" />,
    },
    {
      number: 4,
      title: 'Improve',
      description:
        'Ongoing optimization and compliance maintenance. Regular audits, updates, and security reviews to keep you ahead of emerging threats.',
      icon: <CogIcon className="w-8 h-8" />,
    },
  ];

  const benefits = [
    {
      title: 'Faster Sales Cycles',
      description:
        'Enterprise clients demand security questionnaires and compliance proof. Having SOC 2, GDPR, and HIPAA ready accelerates deals.',
    },
    {
      title: 'Higher Valuations',
      description:
        'VCs and acquirers see mature security as a sign of operational excellence. Security incidents tank valuations—prevention protects them.',
    },
    {
      title: 'Reduced Insurance Costs',
      description:
        'Cyber insurance premiums are rising. Strong security controls and monitoring systems significantly lower your costs.',
    },
    {
      title: 'Team Focus',
      description:
        'Your engineers build product, not security infrastructure. We handle the heavy lifting so your team stays focused on growth.',
    },
  ];

  const techStack = [
    { name: 'Firewall & IDS', icon: <ShieldCheckIcon className="w-10 h-10" /> },
    { name: 'SIEM & SOAR', icon: <ChartBarIcon className="w-10 h-10" /> },
    { name: 'EDR & DLP', icon: <LockClosedIcon className="w-10 h-10" /> },
    { name: 'Cloud Security', icon: <CloudIcon className="w-10 h-10" /> },
    { name: 'Backup Systems', icon: <ServerIcon className="w-10 h-10" /> },
    { name: 'Monitoring Tools', icon: <EyeIcon className="w-10 h-10" /> },
  ];

  const solutionsFaqItems = [
    {
      question: 'How long does the initial security assessment take?',
      answer: 'Our Assess phase typically takes 5-7 business days. We conduct a comprehensive review of your infrastructure, policies, and compliance posture, then deliver a prioritized roadmap with immediate, short-term, and long-term recommendations.',
    },
    {
      question: 'Can we implement security in phases as we grow?',
      answer: "Absolutely. We design our security frameworks to be modular. Start with essential controls (Assess + Secure), then add monitoring and compliance as you scale. We'll create a roadmap that aligns with your growth stages and budget.",
    },
    {
      question: 'What happens during a disaster recovery test?',
      answer: 'We simulate real-world failure scenarios—server outages, data corruption, ransomware attacks—and execute your failover procedures. The test validates your Recovery Time Objective (RTO) and Recovery Point Objective (RPO), and we document any gaps for improvement.',
    },
    {
      question: 'How do you handle multi-cloud environments?',
      answer: 'We have expertise across AWS, Google Cloud, and Azure. Our security controls work across cloud providers, and we implement centralized monitoring and policy management so you have consistent security regardless of where workloads run.',
    },
  ];

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
            Enterprise Security,{' '}
            <span className="bg-gradient-to-r from-cyber to-cyan bg-clip-text text-transparent">
              Startup Speed
            </span>
          </h1>
          <p className="text-xl text-grey mb-8">
            A proven framework to take you from security chaos to compliance-ready in weeks, not months.
          </p>
        </motion.div>
      </Section>

      {/* IT as Profit Driver */}
      <Section className="bg-slate/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Security as a Growth Driver
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto">
            Security isn't a cost center—it's a competitive advantage that unlocks revenue and reduces risk
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} title={benefit.title} hover={true}>
              <p>{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Security Framework Timeline */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Security Framework
          </h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            A systematic approach to building and maintaining enterprise-grade security
          </p>
        </motion.div>

        <Timeline steps={timelineSteps} />
      </Section>

      {/* Tech Stack */}
      <Section className="bg-gradient-to-br from-slate/50 to-midnight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Modern Security Stack
          </h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            Enterprise-grade tools and technologies, configured and managed for startups
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-midnight border border-cyan/20 rounded-xl p-6 text-center hover:border-cyan/40 transition-colors"
            >
              <div className="text-cyan mb-3 flex justify-center">{tech.icon}</div>
              <p className="text-white text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DR and Resilience */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Disaster Recovery & Business Continuity
            </h2>
            <p className="text-grey mb-4">
              Hope is not a strategy. When systems go down—whether from attacks, outages, or accidents—you need a plan.
            </p>
            <p className="text-grey mb-6">
              We design and test disaster recovery systems that keep your business operational even in worst-case scenarios.
            </p>
            <ul className="space-y-3 text-grey mb-8">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan rounded-full mt-2" />
                <span>Automated backups with encrypted off-site storage</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan rounded-full mt-2" />
                <span>Failover systems with sub-hour recovery time objectives</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan rounded-full mt-2" />
                <span>Regular testing and simulation of disaster scenarios</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan rounded-full mt-2" />
                <span>Documented runbooks and incident response procedures</span>
              </li>
            </ul>
            <Button href="/contact">Learn More About DR Planning</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate to-midnight border border-cyan/30 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-grey/20">
                  <h3 className="text-white font-semibold">Primary Site</h3>
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                </div>
                <div className="bg-midnight/50 p-4 rounded-lg">
                  <p className="text-sm text-grey mb-2">Production Environment</p>
                  <div className="flex items-center gap-2">
                    <ServerIcon className="w-5 h-5 text-cyber" />
                    <span className="text-white text-sm">Active Servers: 12</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gradient-to-b from-cyan to-cyber" />
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-grey/20">
                  <h3 className="text-white font-semibold">Backup Site</h3>
                  <div className="w-3 h-3 bg-warning rounded-full" />
                </div>
                <div className="bg-midnight/50 p-4 rounded-lg">
                  <p className="text-sm text-grey mb-2">Standby Environment</p>
                  <div className="flex items-center gap-2">
                    <CloudIcon className="w-5 h-5 text-cyan" />
                    <span className="text-white text-sm">Ready for Failover</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate/30">
        <FAQ
          title="Solution FAQs"
          subtitle="Your questions about our security framework answered"
          items={solutionsFaqItems}
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
            Ready to Build a Secure Foundation?
          </h2>
          <p className="text-xl text-grey mb-8">
            Schedule a free security assessment and get a custom roadmap for your startup.
          </p>
          <Button size="lg" href="/contact">
            Book Your Free Assessment
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
