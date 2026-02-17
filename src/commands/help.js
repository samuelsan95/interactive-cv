import { sectionHeader } from './utils.js'

// Commands displayed in the help section, in order
function commandEntries(t) {
  return [
    { cmd: 'about',            desc: t.help_about },
    { cmd: 'experience',       desc: t.help_experience },
    { cmd: 'skills',           desc: t.help_skills },
    { cmd: 'education',        desc: t.help_education },
    { cmd: 'contact',          desc: t.help_contact },
    null, // separator
    { cmd: 'theme list',       desc: t.help_theme_list },
    { cmd: 'theme set <name>', desc: t.help_theme_set },
    { cmd: 'lang <en|es>',     desc: t.help_lang },
    { cmd: 'clear',            desc: t.help_clear },
  ]
}

export function helpCommand({ t, isMobile }) {
  const entries = commandEntries(t)
  const lines = [...sectionHeader(t.help_title)]

  if (isMobile) {
    // Single-column layout: command on its own line, description indented below
    entries.forEach(entry => {
      if (entry === null) {
        lines.push({ type: 'output', text: '' })
        return
      }
      lines.push({ type: 'accent',  text: `  ${entry.cmd}` })
      lines.push({ type: 'output',  text: `    ${entry.desc}` })
    })
  } else {
    // Two-column layout for desktop
    const pad = (str, len) => str.padEnd(len)
    entries.forEach(entry => {
      if (entry === null) {
        lines.push({ type: 'output', text: '' })
        return
      }
      lines.push({ type: 'output', text: `  ${pad(entry.cmd, 18)} ${entry.desc}` })
    })
  }

  lines.push({ type: 'output', text: '' })
  return lines
}
