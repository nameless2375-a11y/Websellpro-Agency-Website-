'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Shield, Zap, Target, Eye } from 'lucide-react'
import ImageReveal from '@/components/animations/ImageReveal'

const proofs = [
  {
    icon: Shield,
    title: 'Build Before You Buy',
    description: 'We build your complete website before asking for payment. You see exactly what you\'re getting — no surprises, no risk.',
  },
  {
    icon: Target,
    title: 'Conversion Engineered',
    description: 'Every pixel is designed to convert. From typography to CTAs, we optimize for results, not just aesthetics.',
  },
  {
    icon: Zap,
    title: 'Premium Performance',
    description: 'Lightning-fast load times, flawless responsiveness, and buttery-smooth interactions. Your visitors never wait.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'Real-time project dashboard, weekly updates, and direct communication with your dedicated designer and developer.',
  },
]

export default function ProofSection() {
  return (
    <Section className="bg-surface/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2">
              Why Businesses Choose{' '}
              <span className="text-accent">Us</span>
            </Heading>
            <Text className="mt-6 max-w-xl" muted>
              We don&apos;t just build websites. We build digital assets that drive real business growth — with zero risk to you.
            </Text>
          </motion.div>

          <div className="mt-10 space-y-4">
            {proofs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-elevated/50 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <ImageReveal
            src="/showcase/site-desktop.webp"
            alt="A cafe website built by Websellpro"
            gradient="from-accent/30 to-accent/5"
            aspect="square"
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl border border-accent/20 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 bg-accent/5 rounded-full border border-accent/10 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </div>
      </div>
    </Section>
  )
}
