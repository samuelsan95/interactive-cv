import { cv } from '../data/cv.js'
import { sectionHeader } from './utils.js'

export function aboutCommand({ t, locale }) {
  const lines = cv.about[locale]

  return [
    ...sectionHeader(t.section_about),
    ...lines.map(text => ({ type: 'output', text: text ? `  ${text}` : '' })),
    { type: 'output', text: '' },
  ]
}
