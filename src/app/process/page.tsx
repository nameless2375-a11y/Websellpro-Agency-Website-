'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import Link from 'next/link'
import { ArrowRight, Search, Compass, Code2, ShieldCheck, Rocket, TrendingUp, Check, Star } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description:
      'Before a single pixel, we learn your business, goals, audience, and competitors. Every decision that follows is aimed at your customers—not pulled from a template.',
    details: ['Business analysis', 'Audience research', 'Competitor review', 'Goal setting', 'Project roadmap'],
    gradient: 'from-blue-800/40 to-indigo-950/40',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Strategy & Design',
    description:
      'We shape the structure, user experience, and visual identity around your brand. You review the direction and sign off on the design before anything gets built.',
    details: ['Information architecture', 'Wireframes', 'UI/UX design', 'Design system', 'Client review'],
    gradient: 'from-rose-800/40 to-rose-950/40',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    description:
      'We develop the complete website—responsive, animated, fast, and SEO-ready—on modern technologies. Not a mockup or a slide deck. The real, working site.',
    details: ['Frontend development', 'Responsive implementation', 'Animations', 'Performance optimization', 'Technical SEO'],
    gradient: 'from-emerald-800/40 to-emerald-950/40',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Launch',
    description:
      'Once you approve, we deploy the site, connect your domain, and configure hosting, SSL, and DNS—then monitor the go-live to make sure it lands clean.',
    details: ['Domain configuration', 'Hosting deployment', 'SSL setup', 'DNS configuration', 'Go-live monitoring'],
    gradient: 'from-violet-800/40 to-violet-950/40',
  },
  {
    icon: TrendingUp,
    number: '06',
    title: 'Grow',
    description:
      "Launch isn't the finish line. We stay on for monitoring, updates, and improvements—a long-term partner invested in your results, not a one-time invoice.",
    details: ['Performance monitoring', 'Security updates', 'Content updates', 'Feature enhancements', 'Long-term partnership'],
    gradient: 'from-cyan-800/40 to-cyan-950/40',
  },
]

const signatureStep = {
  icon: ShieldCheck,
  number: '04',
  title: 'Approve Before You Pay',
  description:
    "This is where Websellpro is different. We don't ask you to trust us with payment first—we hand you the completed, live website to explore. Request revisions, test everything, and only proceed with payment once you approve.",
  details: [
    'Live website preview',
    'Functional testing',
    'Revision requests',
    'Final approval',
    'Pay only after approval',
  ],
}

export default function ProcessPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <Badge>How We Work</Badge>
            <Heading as="h1" className="mt-6">
              A Transparent Process Built Around{' '}
              <span className="text-accent">Trust</span>
            </Heading>
            <Text className="mt-6 text-lg max-w-3xl" muted>
              We plan, design, build, and let you review a fully working website before payment.
              No guesswork, no surprises—just complete confidence before you commit.
            </Text>
          </motion.div>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="space-y-16">
          {/* Steps 01–03 */}
          {steps.slice(0, 3).map((step, i) => (
            <StepRow key={step.number} step={step} flip={i % 2 !== 0} />
          ))}

          {/* Step 04 — signature focal point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 via-surface-elevated to-surface-elevated shadow-[0_0_80px_-20px_rgba(201,168,76,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            <span className="pointer-events-none absolute -top-16 -right-8 text-[16rem] font-mono font-bold text-accent/10 leading-none select-none">
              {signatureStep.number}
            </span>

            <div className="relative p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-black text-xs font-semibold tracking-wider uppercase mb-6">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  Websellpro Signature Step
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-mono text-accent font-medium">{signatureStep.number}</span>
                  <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                    <signatureStep.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <Heading as="h2">{signatureStep.title}</Heading>
                <p className="text-base text-muted mt-4 leading-relaxed">{signatureStep.description}</p>
              </div>

              <div className="md:pl-10 md:border-l border-accent/20">
                <p className="text-xs font-mono uppercase tracking-wider text-accent/80 mb-5">
                  What you get
                </p>
                <ul className="space-y-4">
                  {signatureStep.details.map((d, idx) => {
                    const isFinal = idx === signatureStep.details.length - 1
                    return (
                      <li key={d} className="flex items-center gap-3">
                        <span
                          className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ${
                            isFinal ? 'bg-accent text-black' : 'bg-accent/15 text-accent'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span
                          className={`text-sm md:text-base ${
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
            <StepRow key={step.number} step={step} flip={(i + 4) % 2 !== 0} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Heading as="h2">
          Ready to See Your Site{' '}
          <span className="text-accent">Before You Pay?</span>
        </Heading>
        <Text className="mt-4 max-w-xl mx-auto" muted>
          Let&apos;s begin with a free discovery call. No commitment, no upfront payment—just a real
          website you approve before you spend a rupee.
        </Text>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>
    </>
  )
}

interface StepRowProps {
  step: (typeof steps)[number]
  flip: boolean
}

function StepRow({ step, flip }: StepRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs font-mono text-accent font-medium">{step.number}</span>
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <step.icon className="w-5 h-5 text-accent" />
          </div>
        </div>
        <Heading as="h3">{step.title}</Heading>
        <p className="text-sm text-muted mt-3 leading-relaxed">{step.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {step.details.map((d) => (
            <span key={d} className="text-xs text-foreground/70 flex items-center gap-1.5">
              <Check className="w-3 h-3 text-accent/60 shrink-0" />
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className={`rounded-2xl aspect-video bg-gradient-to-br ${step.gradient} border border-border flex items-center justify-center`}>
          <step.icon className="w-12 h-12 text-white/15" />
        </div>
      </div>
    </motion.div>
  )
}
