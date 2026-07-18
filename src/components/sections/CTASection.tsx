'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'

export default function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-accent/[0.03] to-background" />
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, var(--color-accent) 0%, transparent 50%)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Heading as="h2" className="text-center">
            Ready to Transform Your{' '}
            <span className="text-accent">Online Presence?</span>
          </Heading>

          <Text className="mt-6 text-lg max-w-2xl mx-auto" muted>
            Let&apos;s build a website that actually sells. No risk. No upfront payment.
            Just exceptional results.
          </Text>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300"
              >
                View Our Portfolio
              </Link>
            </MagneticButton>
          </div>

          <motion.p
            className="mt-6 text-xs text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No commitment required. We build before you buy.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  )
}
