import { ref, computed, readonly } from 'vue'
import { messages, supportedLocales } from '../i18n/index.js'

function detectLocale() {
  const lang = navigator.language?.slice(0, 2).toLowerCase()
  return supportedLocales.includes(lang) ? lang : 'en'
}

// Module-level state: single locale for the entire app
const locale = ref(detectLocale())

export function useI18n() {
  const t = computed(() => messages[locale.value])

  function setLocale(lang) {
    if (!supportedLocales.includes(lang)) return false
    locale.value = lang
    return true
  }

  return {
    locale: readonly(locale),
    t,
    setLocale,
    supportedLocales,
  }
}
