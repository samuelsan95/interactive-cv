import { ref } from 'vue'

export const PROMPT = 'visitor@cv:~$'

// ASCII art for "SAMUEL" + info block — language-agnostic lines go here,
// translated lines are injected via getWelcomeLines(t)
const ASCII_ART = [
  '  ███████╗ █████╗ ███╗   ███╗██╗   ██╗███████╗██╗     ',
  '  ██╔════╝██╔══██╗████╗ ████║██║   ██║██╔════╝██║     ',
  '  ███████╗███████║██╔████╔██║██║   ██║█████╗  ██║     ',
  '  ╚════██║██╔══██║██║╚██╔╝██║██║   ██║██╔══╝  ██║     ',
  '  ███████║██║  ██║██║ ╚═╝ ██║╚██████╔╝███████╗███████╗',
  '  ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚══════╝',
]

// Returns the full welcome block for a given set of translations.
// Called from Terminal.vue as a computed so it reacts to locale changes.
export function getWelcomeLines(t) {
  return [
    ...ASCII_ART.map(text => ({ type: 'accent', text })),
    { type: 'output', text: '' },
    { type: 'output', text: `  ${t.role_desc}: ${t.role}` },
    { type: 'output', text: `  ${t.location_desc}: ${t.location}` },
    { type: 'output', text: `  ${t.status_desc}: ${t.status}` },
    { type: 'output', text: '' },
    { type: 'muted',  text: `  ${t.hint}` },
    { type: 'output', text: '' },
  ]
}

// Module-level state: command interaction history (welcome banner excluded)
const history = ref([])
const commandHistory = ref([])

function addLine(line) {
  history.value.push(line)
}

function clearHistory() {
  history.value = []
}

function executeCommand(raw) {
  const input = raw.trim()

  addLine({ type: 'input', text: input })

  if (!input) return

  commandHistory.value.unshift(input)

  // Command router — handlers will be added in the next step
  switch (input.toLowerCase()) {
    case 'clear':
      clearHistory()
      break
    default:
      addLine({ type: 'error', text: `Command not found: "${input}". Type "help" for available commands.` })
  }
}

export function useTerminal() {
  return {
    history,
    commandHistory,
    executeCommand,
    addLine,
    clearHistory,
  }
}
