'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Heading, Text, Badge } from '@/components/ui/primitives'
import { Send, Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSending(true)

    const form = e.currentTarget
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '',
      businessName: (form.elements.namedItem('company') as HTMLInputElement)?.value ?? '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? '',
      source: 'websellpro-agency-contact',
      submittedAt: new Date().toISOString(),
    }

    const webhook = process.env.NEXT_PUBLIC_N8N_WEBHOOK

    try {
      if (!webhook) throw new Error('Contact endpoint is not configured yet.')
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setError(
        'Something went wrong sending your message. Please email nameless2375@gmail.com or WhatsApp +91 91046 41180.'
      )
    } finally {
      setSending(false)
    }
  }

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
            <Badge>Contact</Badge>
            <Heading as="h1" className="mt-6">
              Let&apos;s Build Something{' '}
              <span className="text-accent">Exceptional</span>
            </Heading>
            <Text className="mt-6 text-lg max-w-3xl" muted>
              Ready to transform your online presence? Let&apos;s talk about your project. 
              No pressure, no commitment — just great ideas and a clear path forward.
            </Text>
          </motion.div>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 bg-surface-elevated border border-accent/20 rounded-2xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-accent" />
                </div>
                <Heading as="h3">Thank You!</Heading>
                <Text className="mt-4" muted>
                  We&apos;ve received your message and will get back to you within 24 hours. 
                  We can&apos;t wait to learn about your project.
                </Text>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Business Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tell Us About Your Project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Tell us about your business, goals, and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                  {!sending && <ArrowRight className="w-4 h-4" />}
                </button>
                {error && (
                  <p className="text-xs text-red-400 text-center">{error}</p>
                )}
                <p className="text-xs text-muted text-center">
                  We&apos;ll respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 bg-surface-elevated border border-border rounded-xl">
              <Mail className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-medium mb-1">Email</h3>
              <p className="text-sm text-muted">nameless2375@gmail.com</p>
            </div>
            <div className="p-6 bg-surface-elevated border border-border rounded-xl">
              <Phone className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-medium mb-1">Phone / WhatsApp</h3>
              <p className="text-sm text-muted">+91 91046 41180</p>
            </div>
            <div className="p-6 bg-surface-elevated border border-border rounded-xl">
              <MapPin className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-medium mb-1">Location</h3>
              <p className="text-sm text-muted">Gujarat, India — serving local businesses across India</p>
            </div>
            <div className="p-6 bg-surface-elevated border border-border rounded-xl">
              <Clock className="w-5 h-5 text-accent mb-3" />
              <h3 className="text-sm font-medium mb-1">Response Time</h3>
              <p className="text-sm text-muted">We typically respond within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
