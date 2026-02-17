import { ref, computed, readonly } from 'vue'
import { themes, defaultTheme } from '../themes/index.js'

// Module-level state: single active theme for the entire app
const savedId = localStorage.getItem('cv-theme')
const initialId = savedId && themes[savedId] ? savedId : defaultTheme
const activeThemeId = ref(initialId)

function applyTheme(id, persist = false) {
  const theme = themes[id]
  if (!theme) return false

  const root = document.documentElement
  root.style.setProperty('--bg', theme.bg)
  root.style.setProperty('--fg', theme.fg)
  root.style.setProperty('--prompt', theme.prompt)
  root.style.setProperty('--accent', theme.accent)
  root.style.setProperty('--error', theme.error)
  root.style.setProperty('--muted', theme.muted)
  root.style.setProperty('--cursor', theme.cursor)

  activeThemeId.value = id
  // Only persist when the user explicitly picks a theme
  if (persist) localStorage.setItem('cv-theme', id)
  return true
}

// Apply initial theme on module import
applyTheme(initialId)

export function useTheme() {
  return {
    activeThemeId: readonly(activeThemeId),
    activeTheme: computed(() => themes[activeThemeId.value]),
    themes,
    setTheme: (id) => applyTheme(id, true),
  }
}
