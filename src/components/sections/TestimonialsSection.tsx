'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { MessageSquareQuote, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function TestimonialsSection() {
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
            <MessageSquareQuote className="w-7 h-7 text-accent" />
          </div>
          <Heading as="h2">
            Be Our First{' '}
            <span className="text-accent">Success Story</span>
          </Heading>
          <Text className="mt-6" muted>
            We&apos;re a new studio building our first wave of client websites. With Build Before
            You Buy, you see the finished site before you pay a rupee — so there&apos;s no risk in
            being early. Real client reviews will live here as we launch them.
          </Text>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
          >
            Start Your Website
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
