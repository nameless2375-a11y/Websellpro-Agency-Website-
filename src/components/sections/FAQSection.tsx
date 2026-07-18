'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Heading, Text } from '@/components/ui/primitives'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What does "Build Before You Buy" actually mean?',
    a: 'Traditional agencies usually ask for a deposit before you\'ve seen the finished website. We do the opposite. We build your website first, let you review it, request revisions, and only ask for payment after you\'re happy with the result. You see the real, live site on a real link, click through every page on your own phone and laptop, and if it\'s not right for you, you walk away owing nothing. The risk is ours, not yours.',
  },
  {
    q: 'When do I actually pay — and what if I don\'t like the finished site?',
    a: 'You pay only after your website is built and you\'ve approved it. There\'s no deposit to start and no payment for a design you haven\'t seen. If you review it and decide it isn\'t for you, you owe us nothing and you\'re under no obligation to continue. Proving the work before asking for payment is the whole point.',
  },
  {
    q: 'How much does a website cost?',
    a: 'Every business is different, so we price around your goals rather than a fixed menu. Projects generally start from ₹9,999, with more complete builds starting from ₹19,999 and larger ones quoted to fit — you get a clear, itemised figure after a short discovery chat, with no hidden fees. But the number matters less than how you pay it: because we Build Before You Buy, you only pay once your website is built and you\'ve approved it. You\'re never handing over money for a promise.',
  },
  {
    q: 'What if I want changes after I see the design?',
    a: 'Changes are expected — that\'s how we get it right. Because you review the real website before paying, this is exactly the stage to tell us what to adjust: colours, wording, layout, photos, anything. We refine it with you until it genuinely represents your business. You\'re never stuck with a first draft.',
  },
  {
    q: 'Will my website work properly on mobile phones?',
    a: 'Yes — and it matters, because most of your customers will find you on their phone. Every site we build is designed mobile-first and tested on real devices, so it looks sharp and loads fast on phones, tablets and desktops alike. You\'ll be able to check this yourself on your own phone before you pay a rupee.',
  },
  {
    q: 'What happens after my website goes live?',
    a: 'We don\'t disappear at launch. You can manage the site yourself, or take a simple month-to-month care plan covering updates, security, backups and content changes so it stays fast, secure and current. There\'s no long-term lock-in — you stay because it\'s worth it, not because a contract traps you.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section className="bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2">
              Frequently Asked{' '}
              <span className="text-accent">Questions</span>
            </Heading>
          </motion.div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-surface-elevated hover:bg-surface-hover transition-colors duration-300"
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-muted transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-muted leading-relaxed bg-surface-elevated">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
