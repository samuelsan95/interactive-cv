import { cv } from '../data/cv.js'
import { sectionHeader } from './utils.js'

export function skillsCommand({ t, locale }) {
  const categories = cv.skills[locale]

  const lines = [...sectionHeader(t.section_skills)]

  Object.entries(categories).forEach(([category, items]) => {
    lines.push({ type: 'accent', text: `  ${category}` })
    lines.push({ type: 'output', text: `  ${items.join('  ·  ')}` })
    lines.push({ type: 'output', text: '' })
  })

  return lines
}
