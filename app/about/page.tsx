'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  LightBulbIcon,
  BoltIcon,
  HeartIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function About() {
  const values = [
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: 'Clarity',
      description:
        "No jargon, no FUD. We explain security in plain language so you understand what you're buying and why it matters.",
    },
    {
      icon: <BoltIcon className="w-10 h-10" />,
      title: 'Speed',
      description:
        'Startups move fast. Our implementations are measured in weeks, not quarters. You get protected quickly.',
    },
    {
      icon: <LightBulbIcon className="w-10 h-10" />,
      title: 'Practicality',
      description:
        'We prioritize what actually protects you. No checkbox security or theater—just controls that work.',
    },
    {
      icon: <HeartIcon className="w-10 h-10" />,
      title: 'Partnership',
      description:
        "We're not vendors—we're your security team. Your success is our success, and we're in this together.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyber/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Security for Startups,{' '}
            <span className="bg-gradient-to-r from-cyber to-cyan bg-clip-text text-transparent">
              Not Big Banks
            </span>
          </h1>
          <p className="text-xl text-grey mb-8">
            We're here because we've seen too many great companies fail not because their product was bad, but because security was an afterthought.
          </p>
        </motion.div>
      </Section>

      {/* Origin Story */}
      <Section className="bg-slate/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-grey leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              Why We Started Whanex
            </h2>

            <p>
              Whanex was born out of frustration. Not with bad security tools—those are everywhere—but with how the security industry treats startups.
            </p>

            <p>
              Traditional security firms either ignore small companies entirely or try to sell them enterprise solutions designed for Fortune 500s. They talk about "holistic frameworks" and "defense in depth" while your team is just trying to ship features and hit revenue milestones.
            </p>

            <p>
              Meanwhile, the threats are real. Cyberattacks don't discriminate by company size. A breach can destroy a startup overnight—lost customers, blown funding rounds, reputational damage that's impossible to recover from.
            </p>

            <p className="text-white font-semibold text-lg">
              We saw companies with incredible products, strong teams, and real traction get wiped out by preventable security incidents. That had to change.
            </p>

            <p>
              So we built Whanex: enterprise-grade security, packaged for startups. Fast implementation, transparent pricing, and a team that actually understands the constraints of early-stage companies.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why Startups */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Why Startups, Not Big Banks?
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto">
            Because protecting innovation is more impactful than protecting incumbents.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-midnight border border-cyan/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Startups Move the World Forward
            </h3>
            <p className="text-grey">
              The next breakthrough in healthcare, fintech, climate tech, or AI is happening at a startup right now. Those companies deserve world-class security, not "good enough for now" solutions that leave them vulnerable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-midnight border border-cyan/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Security Shouldn't Be a Luxury
            </h3>
            <p className="text-grey">
              Big enterprises have entire security departments and unlimited budgets. Startups don't. But they face the same threats. We level the playing field by giving small teams access to enterprise-grade protection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-midnight border border-cyan/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              We Speak Startup
            </h3>
            <p className="text-grey">
              We understand runway, burn rate, and the pressure to ship fast. We know you can't spend six months on a compliance project. Our solutions are built for your reality—fast, practical, and designed to scale as you grow.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gradient-to-br from-slate/50 to-midnight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Values
          </h2>
          <p className="text-xl text-grey max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} icon={value.icon} title={value.title}>
              <p>{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Small Team, Big Impact
          </h2>
          <p className="text-xl text-grey max-w-3xl mx-auto">
            We're a lean team of security engineers, compliance experts, and startup operators who've been in your shoes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-midnight border border-cyan/20 rounded-xl p-8 md:p-12">
          <div className="space-y-6 text-grey">
            <p>
              Our team has worked at startups that scaled from seed to Series C, dealt with compliance audits at 3am, and responded to incidents that threatened to shut down companies.
            </p>
            <p>
              We've also worked at big security firms and saw firsthand how poorly they serve early-stage companies. We left to build something better.
            </p>
            <p className="text-white font-semibold">
              Every person on our team has startup experience. We're not career consultants—we're operators who understand what it takes to build, scale, and protect a fast-growing company.
            </p>
          </div>
        </div>
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
            Let's Protect What You're Building
          </h2>
          <p className="text-xl text-grey mb-8">
            If you're building something important, we want to help you protect it. Book a call and let's talk about your security needs.
          </p>
          <Button size="lg" href="/contact">
            Schedule a Call
          </Button>
        </motion.div>
      </Section>
    </div>
  );
}
