# >_ Interactive CV

A terminal-style interactive CV built with Vue 3 + Vite. Navigate through my professional profile using commands, just like a Linux or macOS terminal.

🌐 **Live:** [samuelsan95.github.io/interactive-cv](https://samuelsan95.github.io/interactive-cv/)

---

## Commands

| Command | Description |
|---|---|
| `help` | List all available commands |
| `about` / `whoami` | About me |
| `experience` / `exp` | Work experience |
| `skills` | Technical skills |
| `education` / `edu` | Education & certifications |
| `contact` | Contact information & links |
| `theme list` | List available themes |
| `theme set <name>` | Change the terminal theme |
| `lang <en\|es>` | Switch language (English / Spanish) |
| `clear` | Clear the terminal |

**Tips:**
- Use **Tab** to autocomplete commands
- Use **↑ / ↓** arrow keys to navigate command history

---

## Themes

`retro` · `matrix` · `dracula` · `monokai` · `light` · `nord`

---

## Tech stack

- **Vue 3** (Composition API)
- **Vite**
- Plain **CSS** with custom properties (no frameworks)
- Deployed to **GitHub Pages** via `gh-pages`

---

## Project structure

```
src/
├── commands/        # One file per command (help, about, experience…)
│   └── index.js     # Command registry
├── components/
│   ├── Terminal.vue
│   ├── TerminalInput.vue
│   └── TerminalLine.vue
├── composables/
│   ├── useTerminal.js   # History, command execution
│   ├── useTheme.js      # Theme state & CSS variable injection
│   └── useI18n.js       # Translations
├── data/
│   └── cv.js        # ← Edit this file to update CV content
├── i18n/
│   └── index.js     # EN / ES translation strings
├── styles/
│   └── global.css
└── themes/
    └── index.js     # Theme definitions
```

---

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch. Make sure your repository **Settings → Pages** is configured to serve from that branch.

---

## Customising the CV

All CV content lives in **`src/data/cv.js`**. Every field supports bilingual output via `{ en: '...', es: '...' }`.

```js
// Example: add a new experience entry
{
  company: 'Company Name',
  role: { en: 'Your Role', es: 'Tu rol' },
  period: { start: 'MM/YYYY', end: null }, // null = present
  description: {
    en: ['Bullet point one', 'Bullet point two'],
    es: ['Punto uno', 'Punto dos'],
  },
}
```

Translation strings for UI labels live in **`src/i18n/index.js`**.

---

## Adding a new command

1. Create `src/commands/mycommand.js` and export a function that receives a context object and returns an array of line objects:

```js
export function myCommand({ t, locale }) {
  return [
    { type: 'accent', text: '  My Section' },
    { type: 'output', text: '  Hello world' },
  ]
}
```

2. Register it in `src/commands/index.js`:

```js
import { myCommand } from './mycommand.js'

export const commands = {
  // ...existing commands
  mycommand: myCommand,
}
```

3. Add translation keys to `src/i18n/index.js` if needed.

**Line types:** `output` · `accent` · `muted` · `error` · `input`

---

## License

MIT
