'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { Coffee, Utensils, Dumbbell, Stethoscope, Hotel, Building2, GraduationCap, Store, Users, Wrench, Camera, Car, Plane } from 'lucide-react'
import Link from 'next/link'

const industries = [
  { icon: Coffee, name: 'Cafés' },
  { icon: Utensils, name: 'Restaurants' },
  { icon: Dumbbell, name: 'Gyms' },
  { icon: Stethoscope, name: 'Dental Clinics' },
  { icon: Stethoscope, name: 'Medical Clinics' },
  { icon: Hotel, name: 'Hotels' },
  { icon: Building2, name: 'Real Estate' },
  { icon: GraduationCap, name: 'Schools' },
  { icon: Store, name: 'Retail' },
  { icon: Wrench, name: 'Construction' },
  { icon: Camera, name: 'Photographers' },
  { icon: Car, name: 'Automotive' },
]

export default function IndustriesSection() {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2">
            We Work With{' '}
            <span className="text-accent">Local Businesses</span>
          </Heading>
          <Text className="mt-6 max-w-2xl mx-auto" muted>
            No matter your industry, we create a website that captures your brand and drives results.
          </Text>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {industries.map((industry, i) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group p-5 bg-surface-elevated border border-border rounded-xl flex flex-col items-center text-center gap-3 hover:border-accent/30 hover:bg-surface-hover transition-all duration-300 cursor-default"
          >
            <industry.icon className="w-6 h-6 text-muted group-hover:text-accent transition-colors duration-300" />
            <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors duration-300">
              {industry.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
