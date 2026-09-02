import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Daughter of Ellen'

interface Props {
  name?: string
  formSource?: string
}

const ContactConfirmationEmail = ({ name, formSource }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for contacting {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>Daughter of Ellen</Heading>
          <Text style={tagline}>Celebrating Every Child's Brilliance.</Text>
        </Section>
        <Section style={body}>
          <Heading style={h2}>
            {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
          </Heading>
          <Text style={text}>
            We have received your message{formSource ? ` from our ${formSource} form` : ''} and a member of our team will respond as soon as possible.
          </Text>
          <Text style={text}>
            If your enquiry is time sensitive, you may also reach us directly at info@daughterofellen.org.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            With warm regards,<br />
            The Daughter of Ellen Team<br />
            Abuja, Nigeria
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We have received your message',
  displayName: 'Contact confirmation',
  previewData: { name: 'Jane', formSource: 'contact' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Calibri, Arial, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto', padding: '0' }
const header = { backgroundColor: '#1a3a2e', padding: '32px 25px', textAlign: 'center' as const }
const h1 = { fontFamily: 'Georgia, serif', fontSize: '24px', color: '#d4af37', margin: 0, fontWeight: 'bold' as const }
const tagline = { fontFamily: 'Georgia, serif', fontStyle: 'italic' as const, fontSize: '13px', color: '#ffffff', margin: '8px 0 0' }
const body = { padding: '32px 25px' }
const h2 = { fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1a3a2e', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#444', lineHeight: '1.6', margin: '0 0 18px' }
const hr = { borderColor: '#eee', margin: '28px 0' }
const footer = { fontSize: '13px', color: '#777', lineHeight: '1.6' }
