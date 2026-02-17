export function langCommand({ t, args, setLocale, supportedLocales }) {
  const [lang] = args

  if (!lang) {
    return [{ type: 'muted', text: `  ${t.lang_usage}` }]
  }

  const ok = setLocale(lang.toLowerCase())
  if (ok) {
    return [{ type: 'output', text: `  ${t.lang_set_ok} "${lang}".` }]
  }

  return [
    { type: 'error', text: `  ${t.lang_not_found} ${supportedLocales.join(', ')}.` },
  ]
}
