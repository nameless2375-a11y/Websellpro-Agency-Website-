'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

// Real client websites will be listed here once live. No placeholder projects — Real Data Policy.
export default function PortfolioPage() {
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
            <Badge>Portfolio</Badge>
            <Heading as="h1" className="mt-6">
              Our{' '}
              <span className="text-accent">Work</span>
            </Heading>
            <Text className="mt-6 text-lg max-w-3xl" muted>
              We&apos;re a new studio building our first wave of client websites for local businesses
              across India. Live projects — with real links and real results — will be showcased here
              as they launch.
            </Text>
          </motion.div>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <Heading as="h2">
            First Projects{' '}
            <span className="text-accent">Launching Now</span>
          </Heading>
          <Text className="mt-6" muted>
            With our Build Before You Buy model, you see your finished website before paying anything.
            Early clients get founder-level attention and pricing. Your business could be one of the
            first we feature.
          </Text>
        </div>
      </Section>

      <Section className="text-center">
        <Heading as="h2">
          Want to Be Our Next{' '}
          <span className="text-accent">Success Story?</span>
        </Heading>
        <Text className="mt-4 max-w-xl mx-auto" muted>
          Let&apos;s build something exceptional together. Your website could be next.
        </Text>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
        >
          Start Your Project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>
    </>
  )
}
