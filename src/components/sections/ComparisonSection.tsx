'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import { Check, X } from 'lucide-react'

type Row = {
  label: string
  us: string
  them: string
}

const rows: Row[] = [
  {
    label: 'When you pay',
    us: 'Only after you see the finished website and love it',
    them: 'Large deposit upfront, before you see anything',
  },
  {
    label: 'The risk',
    us: 'Zero — no result, no payment',
    them: 'Yours — you pay and hope it works out',
  },
  {
    label: 'The design',
    us: 'Custom built around your business',
    them: 'Recycled template with your logo dropped in',
  },
  {
    label: 'Contracts',
    us: 'No lock-in, no subscriptions',
    them: 'Long-term retainers and tie-ins',
  },
  {
    label: 'What you review',
    us: 'A live, working website you can actually test',
    them: 'Mockups, promises, and a timeline',
  },
]

export default function ComparisonSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge>The Difference</Badge>
          <Heading as="h2" className="mt-6">
            A Smarter Way to{' '}
            <span className="text-accent">Get a Website</span>
          </Heading>
          <Text className="mt-6 max-w-2xl mx-auto" muted>
            Most agencies ask you to pay first and trust later. We flipped it. Here&apos;s
            how working with Websellpro compares.
          </Text>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
      >
        {/* Us */}
        <div className="relative rounded-2xl bg-surface-elevated border border-accent/40 p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(201,168,76,0.25)]">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-accent/10 text-accent">
              <Check className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="text-xl md:text-2xl font-normal tracking-tight">Websellpro</h3>
          </div>
          <ul className="space-y-6">
            {rows.map((row) => (
              <li key={row.label} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted">{row.label}</span>
                  <p className="mt-1 text-sm md:text-base text-foreground/90 leading-relaxed">
                    {row.us}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Them */}
        <div className="relative rounded-2xl bg-surface border border-border p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-foreground/5 text-muted">
              <X className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="text-xl md:text-2xl font-normal tracking-tight text-muted">
              A Typical Agency
            </h3>
          </div>
          <ul className="space-y-6">
            {rows.map((row) => (
              <li key={row.label} className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted/70">{row.label}</span>
                  <p className="mt-1 text-sm md:text-base text-muted leading-relaxed">
                    {row.them}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
