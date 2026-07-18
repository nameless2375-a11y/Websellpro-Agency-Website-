'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import Link from 'next/link'
import { ArrowRight, Coffee, Utensils, Dumbbell, Stethoscope, Hotel, Building2, GraduationCap, Store, Wrench, Camera, Car } from 'lucide-react'

const industries = [
  { icon: Coffee, name: 'Cafés & Coffee Shops', desc: 'Menu showcases, online ordering, and atmosphere-driven design that makes customers crave a visit.', gradient: 'from-amber-800/30 to-amber-950/30' },
  { icon: Utensils, name: 'Restaurants', desc: 'Beautiful menus, reservation systems, and mouthwatering visuals that drive bookings.', gradient: 'from-orange-800/30 to-orange-950/30' },
  { icon: Dumbbell, name: 'Gyms & Fitness', desc: 'Class schedules, membership showcases, and trainer profiles that convert visitors into members.', gradient: 'from-emerald-800/30 to-emerald-950/30' },
  { icon: Stethoscope, name: 'Dental Clinics', desc: 'Trust-building design with online booking, service showcases, and patient education.', gradient: 'from-blue-800/30 to-indigo-950/30' },
  { icon: Hotel, name: 'Hotels & Hospitality', desc: 'Immersive room showcases, booking integration, and destination storytelling.', gradient: 'from-rose-800/30 to-rose-950/30' },
  { icon: Building2, name: 'Real Estate', desc: 'Property listings, virtual tours, and lead generation systems for agents and agencies.', gradient: 'from-violet-800/30 to-violet-950/30' },
  { icon: GraduationCap, name: 'Schools & Education', desc: 'Program information, enrollment systems, and community-building design.', gradient: 'from-sky-800/30 to-sky-950/30' },
  { icon: Store, name: 'Retail & Boutiques', desc: 'E-commerce integration, product showcases, and brand storytelling.', gradient: 'from-pink-800/30 to-pink-950/30' },
  { icon: Wrench, name: 'Construction & Trades', desc: 'Project portfolios, service areas, and trust-building case studies.', gradient: 'from-stone-800/30 to-stone-950/30' },
  { icon: Camera, name: 'Photographers & Creatives', desc: 'Visual-first portfolios, gallery showcases, and client booking systems.', gradient: 'from-yellow-800/30 to-yellow-950/30' },
  { icon: Car, name: 'Automotive', desc: 'Inventory displays, service booking, and dealership showrooms.', gradient: 'from-red-800/30 to-red-950/30' },
  { icon: Coffee, name: 'More Industries', desc: 'We work with businesses of all types. Get in touch and let\'s talk about your project.', gradient: 'from-accent/30 to-accent/10' },
]

export default function IndustriesPage() {
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
            <Badge>Industries</Badge>
            <Heading as="h1" className="mt-6">
              We Work With{' '}
              <span className="text-accent">Local Businesses</span>
            </Heading>
            <Text className="mt-6 text-lg max-w-3xl" muted>
              No matter your industry, we create a website that captures your brand, connects with your audience, and drives measurable results.
            </Text>
          </motion.div>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-xl bg-surface-elevated border border-border hover:border-accent/30 transition-all duration-500"
            >
              <div className={`h-24 bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}>
                <industry.icon className="w-7 h-7 text-white/30 group-hover:text-white/60 transition-all duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium mb-1">{industry.name}</h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">{industry.desc}</p>
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
          Let&apos;s build something exceptional for your business.
        </Text>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300"
        >
          Let&apos;s Talk
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>
    </>
  )
}
