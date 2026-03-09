import { cv } from '../data/cv.js'
import { sectionHeader } from './utils.js'

export function projectsCommand({ t, locale }) {
  const projects = cv.projects

  const lines = [...sectionHeader(t.section_projects)]

  projects.forEach(project => {
    lines.push({
      type: 'accent',
      href: project.url,
      linkText: project.name,
    })
    lines.push({
      type: 'output',
      text: `  ${project.description[locale]}`,
    })
    lines.push({
      type: 'muted',
      text: `  [ ${project.tech.join(' · ')} ]`,
    })
    lines.push({ type: 'output', text: '' })
  })

  return lines
}
