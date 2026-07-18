'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Eye, Sparkles, Smartphone, Handshake, type LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Eye,
    title: 'Build Before You Pay',
    description:
      'See your website before spending a single rupee. Review everything first and only move forward if you’re happy with the result.',
  },
  {
    icon: Sparkles,
    title: 'Custom Built',
    description:
      'Every website is designed and developed specifically for your business. No generic templates.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description:
      'Every website is responsive, fast, and optimized for mobile, tablet, and desktop devices.',
  },
  {
    icon: Handshake,
    title: 'No Long-Term Contracts',
    description:
      'No subscriptions or lock-in. You only pay if you genuinely like the final website.',
  },
]

export default function WhyChooseSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2">
            Why Businesses Choose{' '}
            <span className="text-accent">Websellpro</span>
          </Heading>
          <Text className="mt-6 max-w-2xl mx-auto" muted>
            We remove the risk and the guesswork. Here&apos;s what makes working with us different.
          </Text>
        </motion.div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <motion.li
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-5 rounded-2xl bg-surface-elevated border border-border p-8 md:p-10 transition-all duration-500 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(201,168,76,0.25)]"
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-105">
              <feature.icon className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-normal tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm md:text-base text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
