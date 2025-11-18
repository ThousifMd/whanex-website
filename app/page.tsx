'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/ui/Section';
import FAQ from '@/components/ui/FAQ';
import FloatingElements from '@/components/ui/FloatingElements';
import {
  ShieldCheckIcon,
  EyeIcon,
  BoltIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  const stats = [
    {
      percentage: '60%',
      text: 'of small companies shut down after a serious breach',
      impact: 'Most startups never recover from their first major security incident.',
    },
    {
      percentage: '$25K',
      text: 'average breach cost for small firms',
      impact: 'A single breach can wipe out months of runway and investor confidence.',
    },
    {
      percentage: '$4.8M',
      text: 'global average data breach cost',
      impact: 'Enterprise-scale threats are hitting companies of all sizes.',
    },
  ];

  const solutions = [
    {
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      title: 'Prevent',
      description:
        'Harden your infrastructure before threats emerge. Network security, access controls, and compliance frameworks that actually work.',
    },
    {
      icon: <EyeIcon className="w-12 h-12" />,
      title: 'Detect',
      description:
        '24/7 monitoring with real-time threat intelligence. Know about incidents before they become disasters.',
    },
    {
      icon: <BoltIcon className="w-12 h-12" />,
      title: 'Respond',
      description:
        'Rapid incident response and disaster recovery. Get back online fast with minimal data loss and downtime.',
    },
  ];

  const industries = [
    'SaaS',
    'FinTech',
    'HealthTech',
    'E-commerce',
    'B2B Platforms',
    'Consumer Apps',
  ];

  const faqItems = [
    {
      question: 'How quickly can you respond to a security incident?',
      answer: 'Our team monitors systems 24/7. For Growth and Enterprise plans, we respond to critical incidents within 4 hours. We have on-call security engineers ready to handle emergencies at any time.',
    },
    {
      question: 'Do I need to be SOC 2 compliant to work with enterprise clients?',
      answer: 'While not always legally required, SOC 2 compliance has become a de facto standard for enterprise sales. Most large customers require it in their vendor security questionnaires. We can help you achieve SOC 2 Type II certification in 3-6 months.',
    },
    {
      question: 'What makes Whanex different from hiring a full-time security engineer?',
      answer: "A senior security engineer costs $150K-$250K annually, plus benefits. With Whanex, you get an entire team of specialists (network security, compliance, incident response) for a fraction of the cost, with 24/7 coverage and no hiring delays.",
    },
    {
      question: 'Can you work with our existing tech stack?',
      answer: 'Yes. We support all major cloud providers (AWS, GCP, Azure), common frameworks, and most SaaS tools. During onboarding, we audit your current setup and integrate security controls without disrupting your existing workflows.',
    },
    {
      question: 'What if we need to pass a customer security audit?',
      answer: "We prepare you for vendor security assessments with documentation, evidence collection, and audit support. For Growth and Enterprise clients, we can join customer security calls and handle technical questions directly.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <FloatingElements />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-2 mb-6">
              <Badge>For Startups</Badge>
              <Badge variant="success">24/7 Monitoring</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Security That Keeps Your{' '}
              <span className="bg-gradient-to-r from-cyber to-cyan bg-clip-text text-transparent">
                Startup Alive
              </span>
            </h1>

            <p className="text-lg md:text-xl text-grey mb-8 max-w-xl">
              Whanex gives startups and small businesses a plug-in security team,
              combining modern tooling, clear policies, and continuous monitoring
              so they can grow with confidence instead of fear.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" href="/contact">
                Book Free Assessment
              </Button>
              <Button size="lg" variant="secondary" href="/solutions">
                See How It Works
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-grey">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-success" />
                <span>SOC 2 Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-success" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="bg-gradient-to-br from-slate to-midnight border border-cyan/30 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                  <h3 className="text-white font-semibold text-sm sm:text-base">Security Dashboard</h3>
                  <Badge variant="success" className="text-xs">All Systems Secure</Badge>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="bg-midnight/50 p-2 sm:p-3 md:p-4 rounded-lg border border-success/30">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-success">98%</div>
                    <div className="text-[10px] sm:text-xs text-grey">Uptime</div>
                  </div>
                  <div className="bg-midnight/50 p-2 sm:p-3 md:p-4 rounded-lg border border-cyan/30">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan">124</div>
                    <div className="text-[10px] sm:text-xs text-grey">Blocked</div>
                  </div>
                  <div className="bg-midnight/50 p-2 sm:p-3 md:p-4 rounded-lg border border-warning/30">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-warning">0</div>
                    <div className="text-[10px] sm:text-xs text-grey">Alerts</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-midnight/30 p-3 sm:p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-grey truncate">Firewall updated successfully</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-cyan rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-grey truncate">Backup completed: 2.4GB</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-grey truncate">Security scan: No threats</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-slate/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            The Reality Check
          </h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            Security incidents aren't just expensive—they're existential for startups
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 60px rgba(243, 115, 115, 0.3)',
              }}
              className="relative bg-midnight border border-alert/30 rounded-xl p-8 text-center hover:border-alert transition-all cursor-pointer overflow-hidden group"
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-alert/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl md:text-6xl font-heading font-bold text-alert mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.percentage}
                </motion.div>
                <p className="text-lg text-white mb-4">{stat.text}</p>
                <p className="text-sm text-grey">{stat.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How Whanex Helps */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            How Whanex Helps
          </h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            Three layers of protection that work together to keep you secure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              icon={solution.icon}
              title={solution.title}
            >
              <p>{solution.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Study */}
      <Section className="bg-gradient-to-br from-slate/50 to-midnight">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="alert" className="mb-4">
              Real Story
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              One Breach. One Weekend. Game Over.
            </h2>
            <p className="text-grey mb-4">
              A Series B SaaS company lost customer data on a Friday. By Monday,
              three major clients had churned, the team spent the week firefighting
              PR, and the next funding round fell through.
            </p>
            <p className="text-grey mb-6">
              Six months later, they shut down. Not because the product was bad—because
              trust was broken.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-midnight border border-success/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">
              With Whanex, this would have been different:
            </h3>
            <ul className="space-y-4">
              {[
                'Network segmentation would have contained the breach',
                'Automated alerts would have caught the intrusion in minutes',
                'Backup systems would have prevented data loss',
                'Incident response plan would have controlled the narrative',
                'SOC 2 compliance would have reassured enterprise clients',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-grey">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            Designed For
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Badge className="text-base px-6 py-2">
                  {industry}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate/30">
        <FAQ
          title="Common Questions"
          subtitle="Everything you need to know about securing your startup"
          items={faqItems}
        />
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-br from-cyber/20 to-cyan/20 border-y border-cyan/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-grey mb-8">
            Book your free security assessment. We'll respond within 24 hours with
            a clear action plan.
          </p>
          <Button size="lg" href="/contact">
            Book Your Free Assessment
          </Button>
          <p className="text-sm text-grey mt-4">
            No commitment required. Average response time: under 12 hours.
          </p>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-midnight border-t border-slate py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* Shield Icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M20 4L8 9V18C8 25.5 13.5 32.5 20 35C26.5 32.5 32 25.5 32 18V9L20 4Z"
                    stroke="#22D3EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Gradient Text */}
                <span className="inline-block font-heading font-semibold text-xl bg-gradient-to-r from-cyan via-cyber to-cyan bg-clip-text text-transparent">
                  Whanex
                </span>
              </div>
              <p className="text-grey text-sm">
                Security that keeps your startup alive.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-grey text-sm">
                <li><a href="/solutions" className="hover:text-cyan">Solutions</a></li>
                <li><a href="/services" className="hover:text-cyan">Services</a></li>
                <li><a href="/pricing" className="hover:text-cyan">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-grey text-sm">
                <li><a href="/about" className="hover:text-cyan">About</a></li>
                <li><a href="/contact" className="hover:text-cyan">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-grey text-sm">
                <li><a href="#" className="hover:text-cyan">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate pt-8 text-center text-grey text-sm">
            <p className="mb-2">6781 cannoe road, Celina, Texas 75070</p>
            <p className="mb-2">
              <a href="mailto:vk2045@whanex.com" className="hover:text-cyan transition-colors">
                vk2045@whanex.com
              </a>
            </p>
            <p>&copy; 2025 Whanex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
