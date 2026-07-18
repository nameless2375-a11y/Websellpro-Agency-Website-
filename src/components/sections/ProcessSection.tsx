'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Search, Compass, Code2, ShieldCheck, Rocket, TrendingUp, Check, Star } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    gradient: 'from-blue-800/30 to-indigo-950/30',
    description:
      'Before a single pixel, we learn your business, goals, audience, and competitors—so the site we build is aimed at your customers, not a template.',
    deliverables: ['Business analysis', 'Audience research', 'Competitor review', 'Goal setting', 'Project roadmap'],
  },
  {
    number: '02',
    title: 'Strategy & Design',
    icon: Compass,
    gradient: 'from-rose-800/30 to-rose-950/30',
    description:
      'We map the structure, experience, and visual identity around your brand—then you review the direction before anything gets built.',
    deliverables: ['Information architecture', 'Wireframes', 'UI/UX design', 'Design system', 'Client review'],
  },
  {
    number: '03',
    title: 'Build',
    icon: Code2,
    gradient: 'from-emerald-800/30 to-emerald-950/30',
    description:
      'We develop the complete website—responsive, animated, fast, and SEO-ready—on modern tech. Not a mockup. The real, working thing.',
    deliverables: ['Frontend development', 'Responsive implementation', 'Animations', 'Performance optimization', 'Technical SEO'],
  },
  {
    number: '05',
    title: 'Launch',
    icon: Rocket,
    gradient: 'from-violet-800/30 to-violet-950/30',
    description:
      'Once you approve, we deploy the site, connect your domain, configure hosting and SSL, and watch the go-live to make sure it lands clean.',
    deliverables: ['Domain configuration', 'Hosting deployment', 'SSL setup', 'DNS configuration', 'Go-live monitoring'],
  },
  {
    number: '06',
    title: 'Grow',
    icon: TrendingUp,
    gradient: 'from-cyan-800/30 to-cyan-950/30',
    description:
      "Launch isn't the finish line. We stay on for monitoring, updates, and improvements—a long-term partner, not a one-time invoice.",
    deliverables: ['Performance monitoring', 'Security updates', 'Content updates', 'Feature enhancements', 'Long-term partnership'],
  },
]

const signatureStep = {
  number: '04',
  title: 'Approve Before You Pay',
  icon: ShieldCheck,
  description:
    "This is where Websellpro is different. We don't ask you to trust us with payment first—we hand you the completed, live website to explore. Request revisions, test everything, and only pay once you approve.",
  deliverables: [
    'Live website preview',
    'Functional testing',
    'Revision requests',
    'Final approval',
    'Pay only after approval',
  ],
}

export default function ProcessSection() {
  return (
    <Section className="bg-surface/50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase border border-border rounded-full text-muted mb-6">
            How We Work
          </span>
          <Heading as="h2">
            A Transparent Process Built Around{' '}
            <span className="text-accent">Trust</span>
          </Heading>
          <Text className="mt-6 max-w-2xl mx-auto" muted>
            We plan, design, build, and let you review a fully working website before payment.
            No guesswork, no surprises—just complete confidence before you commit.
          </Text>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Steps 01–03 */}
        {steps.slice(0, 3).map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}

        {/* Step 04 — signature focal point, full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 via-surface-elevated to-surface-elevated shadow-[0_0_60px_-15px_rgba(201,168,76,0.35)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
          <span className="pointer-events-none absolute -top-10 -right-6 text-[10rem] font-mono font-bold text-accent/10 leading-none select-none">
            {signatureStep.number}
          </span>

          <div className="relative p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-black text-xs font-semibold tracking-wider uppercase mb-5">
                <Star className="w-3.5 h-3.5 fill-black" />
                Websellpro Signature Step
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-mono text-accent">{signatureStep.number}</span>
                <signatureStep.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{signatureStep.title}</h3>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {signatureStep.description}
              </p>
            </div>

            <div className="md:pl-8 md:border-l border-accent/20">
              <p className="text-xs font-mono uppercase tracking-wider text-accent/80 mb-4">
                What you get
              </p>
              <ul className="space-y-3">
                {signatureStep.deliverables.map((d, idx) => {
                  const isFinal = idx === signatureStep.deliverables.length - 1
                  return (
                    <li key={d} className="flex items-center gap-3">
                      <span
                        className={`flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${
                          isFinal ? 'bg-accent text-black' : 'bg-accent/15 text-accent'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                      <span
                        className={`text-sm ${
                          isFinal ? 'text-white font-semibold' : 'text-foreground/80'
                        }`}
                      >
                        {d}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Steps 05–06 */}
        {steps.slice(3).map((step, i) => (
          <StepCard key={step.number} step={step} index={i + 3} />
        ))}
      </div>
    </Section>
  )
}

interface StepCardProps {
  step: (typeof steps)[number]
  index: number
}

function StepCard({ step, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl bg-surface-elevated border border-border hover:border-accent/20 transition-all duration-500"
    >
      <div className={`h-28 bg-gradient-to-br ${step.gradient} flex items-center justify-center relative`}>
        <span className="absolute top-3 left-3 text-3xl font-mono text-white/10 font-bold">{step.number}</span>
        <step.icon className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-all duration-500 group-hover:scale-110" />
      </div>
      <div className="p-5">
        <span className="text-xs font-mono text-accent">{step.number}</span>
        <h3 className="text-base font-medium mt-1 mb-2">{step.title}</h3>
        <p className="text-xs text-muted leading-relaxed mb-4">{step.description}</p>
        <ul className="space-y-1.5">
          {step.deliverables.map((d) => (
            <li key={d} className="flex items-center gap-2 text-[11px] text-foreground/60">
              <Check className="w-3 h-3 text-accent/60 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
