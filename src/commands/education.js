import { cv } from '../data/cv.js'
import { sectionHeader, formatPeriod } from './utils.js'

export function educationCommand({ t, locale }) {
  const entries = cv.education

  const lines = [...sectionHeader(t.section_education)]

  entries.forEach((entry, i) => {
    const degree = entry.degree[locale]
    const period = formatPeriod(entry.period, t.label_present)

    if (i > 0) lines.push({ type: 'output', text: '' })

    lines.push({ type: 'accent', text: `  ${entry.institution}` })
    lines.push({ type: 'output', text: `  ${degree}  ·  ${period}` })
  })

  lines.push({ type: 'output', text: '' })
  return lines
}
