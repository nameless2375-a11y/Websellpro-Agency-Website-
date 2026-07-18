'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { ArrowRight, LayoutTemplate } from 'lucide-react'
import Link from 'next/link'

// Real client websites will be added here once live. No placeholders — Real Data Policy.
export default function FeaturedWorkSection() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <LayoutTemplate className="w-7 h-7 text-accent" />
          </div>
          <Heading as="h2">
            Featured{' '}
            <span className="text-accent">Work</span>
          </Heading>
          <Text className="mt-6" muted>
            We&apos;re launching our first client websites now. Real projects — with live links and
            real results — will appear here as they go live. Want yours to be one of the first?
          </Text>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
          >
            Get Your Website Built
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
