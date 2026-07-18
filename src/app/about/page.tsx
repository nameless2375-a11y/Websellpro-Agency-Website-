'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import { Target, Heart, Eye, Shield, Zap, Users } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Trust First', desc: 'We build relationships on transparency. Our Build Before You Buy model proves we trust our work — and you can too.' },
  { icon: Target, title: 'Results Driven', desc: 'Every decision we make is measured against one question: does this help our clients grow? Aesthetics matter, but results matter more.' },
  { icon: Heart, title: 'Craft Obsessed', desc: 'We believe in the power of exceptional design. Every pixel, every animation, every interaction is deliberately crafted.' },
  { icon: Eye, title: 'Detail Oriented', desc: 'Great design lives in the details. From micro-interactions to typography spacing, we obsess over what others overlook.' },
  { icon: Zap, title: 'Always Learning', desc: 'Technology evolves fast. We stay at the cutting edge so our clients benefit from the best tools and techniques available.' },
  { icon: Users, title: 'Client Partnership', desc: 'We don\'t just work for you — we work with you. Your success is our success, and we\'re invested in your growth.' },
]

export default function AboutPage() {
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
            <Badge>About Us</Badge>
            <Heading as="h1" className="mt-6">
              We Build Websites That{' '}
              <span className="text-accent">Transform Businesses</span>
            </Heading>
            <Text className="mt-6 text-lg max-w-3xl" muted>
              Websellpro was founded on a simple belief: local businesses deserve world-class websites. 
              We combine premium design with proven conversion principles to create digital experiences that drive real growth.
            </Text>
          </motion.div>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading as="h3">Our Mission</Heading>
            <Text className="mt-4 text-lg" muted>
              To eliminate the risk and uncertainty from building a website. We believe every business deserves a premium online presence without the fear of wasting money on something that doesn&apos;t deliver.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Heading as="h3">Our Vision</Heading>
            <Text className="mt-4 text-lg" muted>
              A world where every local business — from your neighborhood café to your trusted dentist — has a website that truly represents their quality, captures their essence, and drives their growth.
            </Text>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <Heading as="h2">
            Our{' '}
            <span className="text-accent">Values</span>
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-surface-elevated border border-border rounded-xl hover:border-accent/20 transition-all duration-300"
            >
              <v.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="text-base font-medium mb-2">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}
