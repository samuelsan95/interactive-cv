import { ref } from 'vue'
import { useI18n } from './useI18n.js'
import { useTheme } from './useTheme.js'
import { commands } from '../commands/index.js'

export const PROMPT = 'visitor@cv:~$'

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
    ...ASCII_ART.map(text => ({ type: 'accent', text, banner: true })),
    { type: 'output', text: '' },
    { type: 'output', text: `  ${t.role_desc.padEnd(10)}│ ${t.role}` },
    { type: 'output', text: `  ${t.location_desc.padEnd(10)}│ ${t.location}` },
    { type: 'output', text: `  ${t.status_desc.padEnd(10)}│ ${t.status}` },
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
  const { t, locale, setLocale, supportedLocales } = useI18n()
  const { setTheme, themes, activeThemeId } = useTheme()

  const trimmed = raw.trim()
  const [cmd, ...args] = trimmed.split(/\s+/)

  addLine({ type: 'input', text: trimmed })

  if (!trimmed) return

  commandHistory.value.unshift(trimmed)

  if (cmd === 'clear') {
    clearHistory()
    return
  }

  const handler = commands[cmd]

  if (!handler) {
    addLine({ type: 'error', text: `  ${t.value.cmd_not_found}` })
    return
  }

  const ctx = {
    t:                t.value,
    locale:           locale.value,
    args,
    setTheme,
    setLocale,
    themes,
    activeThemeId:    activeThemeId.value,
    supportedLocales,
    isMobile:         window.innerWidth <= 640,
  }

  const lines = handler(ctx)
  if (Array.isArray(lines)) lines.forEach(addLine)
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
