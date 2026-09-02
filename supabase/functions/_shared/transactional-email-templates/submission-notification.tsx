import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  formSource?: string
  submitterName?: string
  submitterEmail?: string
  phone?: string
  subject?: string
  message?: string
  extra?: Record<string, any>
}

const SubmissionNotificationEmail = ({
  formSource = 'website',
  submitterName,
  submitterEmail,
  phone,
  subject,
  message,
  extra,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New {formSource} submission from {submitterName || submitterEmail || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={h1}>New {formSource} submission</Heading>
        </Section>
        <Section style={body}>
          <Row label="Source" value={formSource} />
          {submitterName && <Row label="Name" value={submitterName} />}
          {submitterEmail && <Row label="Email" value={submitterEmail} />}
          {phone && <Row label="Phone" value={phone} />}
          {subject && <Row label="Subject" value={subject} />}
          {message && (
            <>
              <Hr style={hr} />
              <Text style={label}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </>
          )}
          {extra && Object.keys(extra).length > 0 && (
            <>
              <Hr style={hr} />
              <Text style={label}>Additional details</Text>
              {Object.entries(extra).map(([k, v]) => (
                <Row key={k} label={k} value={String(v)} />
              ))}
            </>
          )}
          <Hr style={hr} />
          <Text style={footer}>
            Received via daughterofellen.org
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowText}>
    <span style={{ fontWeight: 'bold', color: '#1a3a2e' }}>{label}: </span>
    <span style={{ color: '#444' }}>{value}</span>
  </Text>
)

export const template = {
  component: SubmissionNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New ${data?.formSource || 'website'} submission${data?.submitterName ? ` from ${data.submitterName}` : ''}`,
  to: 'info@daughterofellen.org',
  displayName: 'Submission notification (admin)',
  previewData: {
    formSource: 'contact',
    submitterName: 'Jane Doe',
    submitterEmail: 'jane@example.com',
    phone: '+234 800 000 0000',
    subject: 'Partnership enquiry',
    message: 'I would love to discuss a partnership opportunity.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Calibri, Arial, sans-serif', margin: 0, padding: 0 }
const container = { maxWidth: '600px', margin: '0 auto' }
const header = { backgroundColor: '#1a3a2e', padding: '24px 25px' }
const h1 = { fontFamily: 'Georgia, serif', fontSize: '20px', color: '#d4af37', margin: 0 }
const body = { padding: '28px 25px' }
const rowText = { fontSize: '14px', lineHeight: '1.6', margin: '0 0 8px' }
const label = { fontSize: '13px', fontWeight: 'bold' as const, color: '#1a3a2e', margin: '0 0 6px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }
const messageText = { fontSize: '14px', color: '#444', lineHeight: '1.6', margin: '0 0 12px', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#eee', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999', margin: 0 }
