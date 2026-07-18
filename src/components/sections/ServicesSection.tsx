'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Monitor, Code, Smartphone, Palette, Gauge, Search, ShoppingCart, Headphones } from 'lucide-react'
import Link from 'next/link'
import { ParallaxImage } from '@/components/animations/ImageReveal'

const services = [
  { icon: Monitor, title: 'Website Design', description: 'Custom designs crafted to reflect your brand identity and captivate your audience.', gradient: 'from-rose-800/30 to-rose-950/30' },
  { icon: Code, title: 'Web Development', description: 'High-performance websites built with modern technologies and clean code.', gradient: 'from-blue-800/30 to-indigo-950/30' },
  { icon: Smartphone, title: 'Landing Pages', description: 'Conversion-optimized landing pages designed to turn visitors into customers.', gradient: 'from-emerald-800/30 to-emerald-950/30' },
  { icon: Palette, title: 'Website Redesign', description: 'Transform your outdated site into a modern, high-performing digital experience.', gradient: 'from-amber-800/30 to-amber-950/30' },
  { icon: Gauge, title: 'Performance Optimization', description: 'Blazing-fast load times and smooth interactions that keep users engaged.', gradient: 'from-cyan-800/30 to-cyan-950/30' },
  { icon: Search, title: 'SEO', description: 'Search-engine optimized structure that helps your business get found online.', gradient: 'from-violet-800/30 to-violet-950/30' },
  { icon: ShoppingCart, title: 'E-Commerce', description: 'Online stores designed to showcase products and drive sales seamlessly.', gradient: 'from-orange-800/30 to-orange-950/30' },
  { icon: Headphones, title: 'Maintenance & Support', description: 'Ongoing care to keep your website secure, updated, and running smoothly.', gradient: 'from-slate-800/30 to-slate-950/30' },
]

export default function ServicesSection() {
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
            Everything You Need to{' '}
            <span className="text-accent">Succeed Online</span>
          </Heading>
          <Text className="mt-6 max-w-2xl mx-auto" muted>
            From design to development to ongoing support — we handle it all so you can focus on running your business.
          </Text>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl bg-surface-elevated border border-border hover:border-accent/30 transition-all duration-500"
          >
            <div className={`h-28 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
              <service.icon className="w-8 h-8 text-white/30 group-hover:text-white/60 transition-all duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="text-sm font-medium mb-2">{service.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
        >
          View All Services
          <span className="text-lg">&rarr;</span>
        </Link>
      </motion.div>
    </Section>
  )
}
