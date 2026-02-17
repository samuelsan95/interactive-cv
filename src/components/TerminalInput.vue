<template>
  <div class="input-line">
    <span class="prompt">{{ PROMPT }}&nbsp;</span>

    <div class="input-wrapper">
      <!-- Visual layer: typed text + blinking block cursor -->
      <span class="display" aria-hidden="true">
        <span class="typed">{{ inputValue }}</span><span class="cursor">█</span>
      </span>

      <!-- Real input: transparent overlay so iOS treats it as a normal input
           (shows keyboard, handles zoom). font-size 16px prevents iOS auto-zoom. -->
      <input
        ref="inputRef"
        v-model="inputValue"
        @input="inputValue = inputValue.toLowerCase()"
        @keydown.enter="submit"
        @keydown.up.prevent="navigateHistory(1)"
        @keydown.down.prevent="navigateHistory(-1)"
        @keydown.tab.prevent="autocomplete"
        autocomplete="off"
        spellcheck="false"
        autocapitalize="none"
        autofocus
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTerminal, PROMPT } from '../composables/useTerminal.js'
import { commands } from '../commands/index.js'

const { commandHistory, executeCommand, addLine } = useTerminal()

const inputRef = ref(null)
const inputValue = ref('')
const historyIndex = ref(-1)

const COMPLETABLE = [...Object.keys(commands), 'clear'].sort()

// Forces iOS to snap back to normal zoom after the keyboard dismisses
function resetMobileZoom() {
  const meta = document.querySelector('meta[name="viewport"]')
  if (!meta) return
  const original = meta.content
  meta.content = 'width=device-width, initial-scale=1, maximum-scale=1'
  setTimeout(() => { meta.content = original }, 300)
}

function submit() {
  executeCommand(inputValue.value)
  inputValue.value = ''
  historyIndex.value = -1
  if (window.innerWidth <= 640) {
    inputRef.value?.blur()
    resetMobileZoom()
  }
}

function navigateHistory(dir) {
  const len = commandHistory.value.length
  if (len === 0) return

  const next = historyIndex.value + dir
  if (next < -1 || next >= len) return

  historyIndex.value = next
  inputValue.value = next === -1 ? '' : commandHistory.value[next]
}

function autocomplete() {
  const val = inputValue.value
  if (!val.trim()) return

  const matches = COMPLETABLE.filter(cmd => cmd.startsWith(val.trim()))

  if (matches.length === 1) {
    inputValue.value = matches[0]
  } else if (matches.length > 1) {
    addLine({ type: 'input', text: val })
    addLine({ type: 'muted', text: '  ' + matches.join('    ') })
  }
}

function focus() {
  inputRef.value?.focus()
}

onMounted(focus)
defineExpose({ focus })
</script>

<style scoped>
.input-line {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.prompt {
  color: var(--prompt);
  white-space: nowrap;
  flex-shrink: 0;
}

.input-wrapper {
  position: relative;
  flex: 1;
  min-width: 0;
}

/* Visual display of typed text + block cursor */
.display {
  display: block;
  font-family: inherit;
  font-size: inherit;
  color: var(--fg);
  white-space: pre-wrap;
  word-break: break-all;
  pointer-events: none;
}

/* Blinking block cursor */
@keyframes blink {
  50% { opacity: 0; }
}

.cursor {
  color: var(--cursor);
  animation: blink 1s step-end infinite;
}

/* Transparent input overlaid on top of the display.
   iOS treats it as a real input field (triggers keyboard, manages zoom)
   but the user only sees the display layer above.
   font-size: 16px prevents iOS Safari from auto-zooming on focus. */
input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: transparent;
  caret-color: transparent;
  font-size: 16px;
}
</style>
