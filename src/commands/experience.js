import { cv } from '../data/cv.js'
import { sectionHeader, formatPeriod } from './utils.js'

export function experienceCommand({ t, locale }) {
  const entries = cv.experience

  const lines = [...sectionHeader(t.section_experience)]

  entries.forEach((entry, i) => {
    const role   = entry.role[locale]
    const period = formatPeriod(entry.period, t.label_present)
    const desc   = entry.description[locale]

    if (i > 0) lines.push({ type: 'output', text: '' })

    lines.push({ type: 'accent', text: `  ${entry.company}` })
    lines.push({ type: 'output', text: `  ${role}  ·  ${period}` })
    lines.push({ type: 'output', text: '' })
    desc.forEach(bullet => {
      lines.push({ type: 'output', text: `    • ${bullet}` })
    })
  })

  lines.push({ type: 'output', text: '' })
  return lines
}
