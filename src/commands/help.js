import { sectionHeader } from './utils.js'

export function helpCommand({ t }) {
  const pad = (str, len) => str.padEnd(len)

  return [
    ...sectionHeader(t.help_title),
    { type: 'output', text: `  ${pad('about',           18)} ${t.help_about}` },
    { type: 'output', text: `  ${pad('experience',      18)} ${t.help_experience}` },
    { type: 'output', text: `  ${pad('skills',          18)} ${t.help_skills}` },
    { type: 'output', text: `  ${pad('education',       18)} ${t.help_education}` },
    { type: 'output', text: '' },
    { type: 'output', text: `  ${pad('theme list',      18)} ${t.help_theme_list}` },
    { type: 'output', text: `  ${pad('theme set <name>',18)} ${t.help_theme_set}` },
    { type: 'output', text: `  ${pad('lang <en|es>',    18)} ${t.help_lang}` },
    { type: 'output', text: `  ${pad('clear',           18)} ${t.help_clear}` },
    { type: 'output', text: '' },
  ]
}
