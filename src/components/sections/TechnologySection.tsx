'use client'

import { motion } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'

const techs = [
  { name: 'Next.js', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10l7-5v10l11-12v10"/></svg>' },
  { name: 'React', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z"/></svg>' },
  { name: 'TypeScript', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>' },
  { name: 'Tailwind CSS', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.5 2 3 6 3 9c0 3 2.5 5 5 5 2 0 3-2 4-2s2 2 4 2c2.5 0 5-2 5-5 0-3-3.5-7-9-7z"/></svg>' },
  { name: 'Node.js', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/><path d="M2 7l10 5 10-5"/><path d="M12 22V12"/></svg>' },
  { name: 'Vercel', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20L12 2z"/></svg>' },
]

export default function TechnologySection() {
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
            Built With Modern{' '}
            <span className="text-accent">Technology</span>
          </Heading>
          <Text className="mt-6 max-w-2xl mx-auto" muted>
            We use cutting-edge tools and frameworks to build fast, scalable, and maintainable websites.
          </Text>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group flex items-center gap-3 px-6 py-4 bg-surface-elevated border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
          >
            <span
              className="w-6 h-6 text-muted group-hover:text-accent transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: tech.svg }}
            />
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
