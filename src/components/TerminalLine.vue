<template>
  <div class="line" :class="[type, { banner, 'mobile-only': mobileOnly }]">
    <span v-if="type === 'input'" class="prompt">{{ PROMPT }}&nbsp;</span>
    <span class="text">{{ text }}</span>
    <a v-if="href" class="link" :href="href" target="_blank" rel="noopener noreferrer">{{ linkText }}</a>
  </div>
</template>

<script setup>
import { PROMPT } from '../composables/useTerminal.js'

defineProps({
  type:       { type: String,  default: 'output' }, // output | input | error | accent | muted
  text:       { type: String,  default: '' },
  href:       { type: String,  default: null },      // if set, renders a clickable link after the text
  linkText:   { type: String,  default: '' },        // display text for the link
  banner:     { type: Boolean, default: false },     // ASCII art — hidden on mobile
  mobileOnly: { type: Boolean, default: false },     // shown only on mobile (mobile title replacement)
})
</script>

<style scoped>
.line {
  min-height: 1.5em;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: inherit;
}

.prompt { color: var(--prompt); }

.input  .text { color: var(--fg); }
.output .text { color: var(--fg); }
.error  .text { color: var(--error); }
.accent .text { color: var(--accent); }
.muted  .text { color: var(--muted); }

.link {
  color: var(--accent);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

/* Mobile-only lines are hidden on desktop */
.mobile-only {
  display: none;
}

@media (max-width: 640px) {
  /* Hide the wide ASCII art, show the compact title instead */
  .banner {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  /* Hanging indent: wrapped lines align with the first character, not column 0 */
  .line:not(.input) {
    padding-left: 2ch;
    text-indent: -2ch;
  }
}
</style>
