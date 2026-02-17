import { cv } from '../data/cv.js'
import { sectionHeader } from './utils.js'

// Strips the protocol (https://) for a cleaner display label
function displayUrl(url) {
  return url.replace(/^https?:\/\//, '')
}

export function contactCommand({ t }) {
  const { email, github, linkedin, medium } = cv.contact

  return [
    ...sectionHeader(t.section_contact),
    {
      type: 'output',
      text: `  ${'Email'.padEnd(10)}  `,
      href: `mailto:${email}`,
      linkText: email,
    },
    {
      type: 'output',
      text: `  ${'GitHub'.padEnd(10)}  `,
      href: github,
      linkText: displayUrl(github),
    },
    {
      type: 'output',
      text: `  ${'LinkedIn'.padEnd(10)}  `,
      href: linkedin,
      linkText: displayUrl(linkedin),
    },
    {
      type: 'output',
      text: `  ${'Medium'.padEnd(10)}  `,
      href: medium,
      linkText: displayUrl(medium),
    },
    { type: 'output', text: '' },
  ]
}
