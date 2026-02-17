<template>
  <div class="line" :class="type">
    <span v-if="type === 'input'" class="prompt">{{ PROMPT }}&nbsp;</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup>
import { PROMPT } from '../composables/useTerminal.js'

defineProps({
  type: { type: String, default: 'output' }, // output | input | error | accent | muted
  text: { type: String, default: '' },
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
</style>
