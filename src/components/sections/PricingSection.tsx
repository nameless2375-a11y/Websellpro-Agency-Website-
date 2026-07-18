'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Check, ArrowRight, ShieldCheck, Store, TrendingUp, Building2 } from 'lucide-react'
import Link from 'next/link'
import MagneticButton from '@/components/animations/MagneticButton'
import { DynamicFloatingShapes } from '@/components/3d/DynamicImports'

const plans = [
  {
    name: 'Essential',
    icon: Store,
    forWho: 'New cafés, clinics & local shops',
    outcome: 'Get found on Google and look professional from day one.',
    price: 'Starting from ₹9,999',
    highlights: [
      'A clean website customers trust',
      'Works perfectly on every phone',
      'Show up on Google search & Maps',
      'One-tap call & WhatsApp buttons',
    ],
    popular: false,
    gradient: 'from-blue-800/20 to-indigo-950/20',
  },
  {
    name: 'Growth',
    icon: TrendingUp,
    forWho: 'Busy restaurants, gyms & dental clinics',
    outcome: 'Turn visitors into calls, bookings, and walk-ins.',
    price: 'Starting from ₹19,999',
    highlights: [
      'Everything in Essential',
      'Online booking & enquiry forms',
      'Menu, services & photo galleries',
      'Local SEO so nearby customers find you',
    ],
    popular: true,
    gradient: 'from-accent/30 to-accent/10',
  },
  {
    name: 'Complete',
    icon: Building2,
    forWho: 'Multi-location & growing businesses',
    outcome: 'A complete online system built around how you actually work.',
    price: 'Custom quote',
    highlights: [
      'Everything in Growth',
      'Online ordering or payments',
      'Multiple locations & branches',
      'Built around your exact workflow',
    ],
    popular: false,
    gradient: 'from-emerald-800/20 to-emerald-950/20',
  },
]

export default function PricingSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-background to-surface/50" />
      <DynamicFloatingShapes />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2">
              Simple Pricing,{' '}
              <span className="text-accent">Zero Risk</span>
            </Heading>
            <Text className="mt-6 max-w-2xl mx-auto" muted>
              Built for local businesses across India. You see your finished website first —
              you only pay once you love it.
            </Text>
          </motion.div>
        </div>

        {/* Build Before You Buy — the centerpiece, shown before any price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl mx-auto rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/15 via-surface-elevated to-surface-elevated shadow-[0_0_60px_-20px_rgba(201,168,76,0.4)] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">We Build Before You Buy</h3>
            <p className="text-sm text-muted leading-relaxed">
              No advance payment. We design and build your complete website first. You explore the
              live site, ask for changes, and pay only after you approve. The prices below are
              starting points — your final quote is tailored to your business.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? 'border-accent/40 bg-accent/[0.04] md:-mt-4 md:mb-4 shadow-[0_0_50px_-20px_rgba(201,168,76,0.5)]'
                  : 'border-border bg-surface-elevated'
              } p-7 flex flex-col hover:border-accent/30 transition-all duration-500`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-black text-xs font-semibold rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-5`}>
                <plan.icon className="w-6 h-6 text-white/70" />
              </div>

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-xs font-medium text-accent/90 mt-1">{plan.forWho}</p>
              <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{plan.outcome}</p>

              <div className="mt-5 pt-5 border-t border-border">
                <span className="text-xl font-light text-accent">{plan.price}</span>
              </div>

              <ul className="mt-5 space-y-2.5 flex-1">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-muted">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <MagneticButton>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-accent text-background hover:bg-accent-light'
                        : 'bg-foreground text-background hover:bg-accent'
                    }`}
                  >
                    Get My Free Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted max-w-2xl mx-auto">
            Every business is different, so every quote is custom. Tell us about yours and we&apos;ll
            share an exact price —{' '}
            <Link href="/contact" className="text-accent hover:underline">
              no obligation, no upfront payment
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
