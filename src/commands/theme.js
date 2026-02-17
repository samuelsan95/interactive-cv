export function themeCommand({ t, args, themes, activeThemeId, setTheme }) {
  const [sub, name] = args

  if (sub === 'list') {
    const lines = [
      { type: 'output', text: '' },
      { type: 'accent', text: `  ${t.theme_available}` },
      { type: 'output', text: '' },
    ]

    Object.values(themes).forEach(theme => {
      const marker = theme.id === activeThemeId ? `  ← ${t.theme_current}` : ''
      lines.push({ type: 'output', text: `  ${theme.id.padEnd(12)} ${theme.name}${marker}` })
    })

    lines.push({ type: 'output', text: '' })
    return lines
  }

  if (sub === 'set' && name) {
    const ok = setTheme(name)
    if (ok) {
      return [{ type: 'output', text: `  ${t.theme_set_ok} "${name}".` }]
    }
    return [{ type: 'error', text: `  ${t.theme_not_found}` }]
  }

  return [{ type: 'muted', text: `  ${t.theme_usage}` }]
}
