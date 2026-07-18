import { Section, Heading, Text, Badge } from '@/components/ui/primitives'

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-wide">
          <Badge>Legal</Badge>
          <Heading as="h1" className="mt-6">
            Privacy{' '}
            <span className="text-accent">Policy</span>
          </Heading>
        </div>
      </section>

      <Section className="bg-surface/50">
        <div className="max-w-3xl mx-auto prose prose-invert prose-sm">
          <Text className="mb-8" muted>Last updated: January 2026</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">1. Information We Collect</h3>
          <Text muted>We collect information you provide directly, such as your name, email address, phone number, and business details when you fill out our contact form or communicate with us.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">2. How We Use Your Information</h3>
          <Text muted>We use your information to respond to inquiries, provide our services, improve our website, and send relevant communications about your project.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">3. Data Protection</h3>
          <Text muted>We implement industry-standard security measures to protect your personal information. Your data is stored securely and never shared with third parties without your consent.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">4. Cookies</h3>
          <Text muted>We use minimal cookies for essential website functionality. We do not use tracking cookies or sell your data to advertisers.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">5. Third-Party Services</h3>
          <Text muted>We may use third-party services (hosting, analytics) that process data according to their own privacy policies. We choose partners who maintain high privacy standards.</Text>

          <h3 className="text-lg font-medium mt-8 mb-4">6. Your Rights</h3>
          <Text muted>You have the right to request access to, correction of, or deletion of your personal data. Contact us at nameless2375@gmail.com for any privacy-related requests.</Text>
        </div>
      </Section>
    </>
  )
}
