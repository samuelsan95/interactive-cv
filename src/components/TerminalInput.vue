<template>
  <div class="input-line">
    <span class="prompt">{{ PROMPT }}&nbsp;</span>
    <input
      ref="inputRef"
      v-model="inputValue"
      @keydown.enter="submit"
      @keydown.up.prevent="navigateHistory(1)"
      @keydown.down.prevent="navigateHistory(-1)"
      @keydown.tab.prevent="autocomplete"
      autocomplete="off"
      spellcheck="false"
      autofocus
    />
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

// All completable command names (commands + built-in clear)
const COMPLETABLE = [...Object.keys(commands), 'clear'].sort()

function submit() {
  executeCommand(inputValue.value)
  inputValue.value = ''
  historyIndex.value = -1
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
    // Unique match: complete the input
    inputValue.value = matches[0]
  } else if (matches.length > 1) {
    // Multiple matches: echo current input then list options (bash-style)
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

input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--fg);
  font-family: inherit;
  font-size: inherit;
  caret-color: var(--cursor);
  min-width: 0;
}
</style>
