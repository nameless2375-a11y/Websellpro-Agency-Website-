'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'
import ImageReveal from '@/components/animations/ImageReveal'
import Link from 'next/link'
import { DynamicFloatingShapes, DynamicTiltCard } from '@/components/3d/DynamicImports'

export default function USPSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-accent/[0.02] to-background" />
      <DynamicFloatingShapes />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                <Shield className="w-7 h-7 text-accent" />
              </div>

              <Heading as="h2" className="">
                We Build{' '}
                <span className="text-accent">Before You Buy.</span>
              </Heading>

              <Text className="mt-6 text-base md:text-lg text-muted leading-relaxed" muted={false}>
                Most agencies ask you to pay upfront and hope for the best. We do things differently — 
                we build your complete website first, and you only pay when you&apos;re convinced.
              </Text>

              <div className="mt-8 space-y-4">
                {[
                  { title: 'Zero Risk', desc: 'We build your complete website before you pay a single rupee.' },
                  { title: 'Full Transparency', desc: 'Real-time progress tracking and weekly updates.' },
                  { title: 'Proven Results', desc: 'Test your live website, measure performance — then decide.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">{item.title}</span>
                      <p className="text-xs text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <ImageReveal
              src="/showcase/site-mobile.webp"
              alt="A live website Websellpro built for a client"
              gradient="from-accent/40 via-accent/10 to-transparent"
              aspect="portrait"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 p-4 bg-surface-elevated border border-accent/20 rounded-xl hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xs text-muted">No upfront payment</p>
              <p className="text-sm font-medium text-accent">100% risk-free</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
          >
            Start Risk-Free <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
