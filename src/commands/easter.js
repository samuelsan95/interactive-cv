import { sectionHeader } from './utils.js'

// ---------------------------------------------------------------------------
// Easter egg commands — hidden fun for curious visitors
// ---------------------------------------------------------------------------

export function sudoCommand() {
  return [
    { type: 'output', text: '' },
    { type: 'error',  text: '  sudo: Permission denied.' },
    { type: 'muted',  text: '  This incident has been reported.' },
    { type: 'output', text: '' },
  ]
}

export function lsCommand() {
  return [
    { type: 'output', text: '' },
    { type: 'accent', text:  '  interactive-cv/' },
    { type: 'output', text:  '  ├── src/' },
    { type: 'output', text:  '  │   ├── commands/' },
    { type: 'output', text:  '  │   │   ├── about.js' },
    { type: 'output', text:  '  │   │   ├── contact.js' },
    { type: 'output', text:  '  │   │   ├── easter.js' },
    { type: 'output', text:  '  │   │   ├── education.js' },
    { type: 'output', text:  '  │   │   ├── experience.js' },
    { type: 'output', text:  '  │   │   ├── help.js' },
    { type: 'output', text:  '  │   │   ├── index.js' },
    { type: 'output', text:  '  │   │   ├── lang.js' },
    { type: 'output', text:  '  │   │   ├── skills.js' },
    { type: 'output', text:  '  │   │   ├── theme.js' },
    { type: 'output', text:  '  │   │   └── utils.js' },
    { type: 'output', text:  '  │   ├── components/' },
    { type: 'output', text:  '  │   │   ├── Terminal.vue' },
    { type: 'output', text:  '  │   │   ├── TerminalInput.vue' },
    { type: 'output', text:  '  │   │   └── TerminalLine.vue' },
    { type: 'output', text:  '  │   ├── composables/' },
    { type: 'output', text:  '  │   │   ├── useI18n.js' },
    { type: 'output', text:  '  │   │   ├── useTerminal.js' },
    { type: 'output', text:  '  │   │   └── useTheme.js' },
    { type: 'output', text:  '  │   ├── data/' },
    { type: 'output', text:  '  │   │   └── cv.js' },
    { type: 'output', text:  '  │   ├── i18n/' },
    { type: 'output', text:  '  │   │   └── index.js' },
    { type: 'output', text:  '  │   ├── styles/' },
    { type: 'output', text:  '  │   │   └── global.css' },
    { type: 'output', text:  '  │   ├── themes/' },
    { type: 'output', text:  '  │   │   └── index.js' },
    { type: 'output', text:  '  │   ├── App.vue' },
    { type: 'output', text:  '  │   └── main.js' },
    { type: 'output', text:  '  ├── public/' },
    { type: 'output', text:  '  │   ├── favicon.svg' },
    { type: 'output', text:  '  │   └── og-image.png' },
    { type: 'output', text:  '  ├── index.html' },
    { type: 'muted',  text:  '  ├── package.json' },
    { type: 'muted',  text:  '  ├── vite.config.js' },
    { type: 'muted',  text:  '  └── README.md' },
    { type: 'output', text: '' },
  ]
}

export function helloCommand() {
  return [
    { type: 'output', text: '' },
    { type: 'accent', text: '  Hello, human.' },
    { type: 'output', text: '  Welcome to the interactive CV of Samuel Sanchez.' },
    { type: 'output', text: '  Type "help" to see what I can do.' },
    { type: 'output', text: '' },
  ]
}

const FORTUNES = [
  '"Any fool can write code that a computer can understand.\n   Good programmers write code that humans can understand."\n   — Martin Fowler',
  '"First, solve the problem. Then, write the code."\n   — John Johnson',
  '"Code is like humor. When you have to explain it, it\'s bad."\n   — Cory House',
  '"Make it work, make it right, make it fast."\n   — Kent Beck',
  '"The best code is no code at all."\n   — Jeff Atwood',
  '"Simplicity is the soul of efficiency."\n   — Austin Freeman',
  '"Optimism is an occupational hazard of programming.\n   Feedback is the treatment."\n   — Kent Beck',
  '"Before software can be reusable it first has to be usable."\n   — Ralph Johnson',
  '"Fix the cause, not the symptom."\n   — Steve Maguire',
  '"It\'s not a bug — it\'s an undocumented feature."\n   — Anonymous',
]

export function fortuneCommand() {
  const quote = FORTUNES[Math.floor(Math.random() * FORTUNES.length)]

  return [
    ...sectionHeader('fortune'),
    ...quote.split('\n').map(line => ({ type: 'output', text: `  ${line}` })),
    { type: 'output', text: '' },
  ]
}
