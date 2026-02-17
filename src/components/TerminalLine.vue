<template>
  <div class="line" :class="type">
    <span v-if="type === 'input'" class="prompt">{{ PROMPT }}&nbsp;</span>
    <span class="text">{{ text }}</span>
    <a v-if="href" class="link" :href="href" target="_blank" rel="noopener noreferrer">{{ linkText }}</a>
  </div>
</template>

<script setup>
import { PROMPT } from '../composables/useTerminal.js'

defineProps({
  type:     { type: String, default: 'output' }, // output | input | error | accent | muted
  text:     { type: String, default: '' },
  href:     { type: String, default: null },      // if set, renders a clickable link after the text
  linkText: { type: String, default: '' },        // display text for the link
})
</script>

<style scoped>
.line {
  min-height: 1.5em;
  white-space: pre;
  word-break: break-all;
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
</style>
