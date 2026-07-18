'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import ImageReveal from '@/components/animations/ImageReveal'

const services = [
  {
    icon: 'M',
    title: 'Website Design',
    description: 'Custom website designs that capture your brand identity and create unforgettable first impressions.',
    features: ['Custom layouts', 'Brand-aligned design', 'Mobile-first approach', 'Premium typography', 'Conversion-focused'],
    gradient: 'from-rose-800/40 to-rose-950/40',
  },
  {
    icon: 'D',
    title: 'Web Development',
    description: 'High-performance websites built with modern frameworks and clean, maintainable code.',
    features: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'API integration'],
    gradient: 'from-blue-800/40 to-indigo-950/40',
  },
  {
    icon: 'L',
    title: 'Landing Pages',
    description: 'Conversion-optimized landing pages designed to turn visitors into leads and customers.',
    features: ['High-converting copy', 'A/B testing ready', 'Fast load times', 'Clear CTAs', 'Lead capture'],
    gradient: 'from-emerald-800/40 to-emerald-950/40',
  },
  {
    icon: 'R',
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, high-performing digital asset.',
    features: ['UI/UX audit', 'Modern redesign', 'Performance boost', 'SEO improvement', 'Content refresh'],
    gradient: 'from-amber-800/40 to-amber-950/40',
  },
  {
    icon: 'P',
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions that keep users engaged and boost SEO.',
    features: ['Core Web Vitals', 'Image optimization', 'Code splitting', 'Caching strategy', 'Speed testing'],
    gradient: 'from-cyan-800/40 to-cyan-950/40',
  },
  {
    icon: 'S',
    title: 'SEO Services',
    description: 'Search-engine optimized structure and content that helps your business get found online.',
    features: ['On-page SEO', 'Technical SEO', 'Local SEO', 'Keyword research', 'Analytics setup'],
    gradient: 'from-violet-800/40 to-violet-950/40',
  },
  {
    icon: 'E',
    title: 'E-Commerce',
    description: 'Beautiful online stores designed to showcase products and drive sales effortlessly.',
    features: ['Product showcases', 'Cart optimization', 'Payment integration', 'Inventory management', 'Mobile commerce'],
    gradient: 'from-orange-800/40 to-orange-950/40',
  },
  {
    icon: 'H',
    title: 'Maintenance & Support',
    description: 'Ongoing care to keep your website secure, updated, and performing at its best.',
    features: ['Security updates', 'Content updates', 'Performance monitoring', 'Backup management', 'Priority support'],
    gradient: 'from-slate-800/40 to-slate-950/40',
  },
]

export default function ServicesPage() {
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
            <Badge>Our Services</Badge>
            <Heading as="h1" className="mt-6">
              Everything You Need to{' '}
              <span className="text-accent">Succeed Online</span>
            </Heading>
            <Text className="mt-6 text-lg max-w-3xl" muted>
              From initial concept to ongoing support, we provide end-to-end web services designed
              to help local businesses thrive in the digital world.
            </Text>
          </motion.div>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-accent">{service.icon}</span>
                </div>
                <Heading as="h3">{service.title}</Heading>
                <Text className="mt-4" muted>{service.description}</Text>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <ImageReveal
                  gradient={service.gradient}
                  label={service.title.toLowerCase().replace(/\s+/g, '') + '.com'}
                  aspect="square"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Heading as="h2">
          Ready to Get{' '}
          <span className="text-accent">Started?</span>
        </Heading>
        <Text className="mt-4 max-w-xl mx-auto" muted>
          Let&apos;s discuss your project. No commitment, no pressure — just great ideas.
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
