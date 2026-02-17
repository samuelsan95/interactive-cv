const SEPARATOR = '─'.repeat(42)

// Renders a titled section header
export function sectionHeader(title) {
  return [
    { type: 'output', text: '' },
    { type: 'accent', text: `  ${title}` },
    { type: 'muted',  text: `  ${SEPARATOR}` },
    { type: 'output', text: '' },
  ]
}

// Formats a period object { start, end } into a readable string
export function formatPeriod({ start, end }, labelPresent) {
  return `${start} — ${end ?? labelPresent}`
}
