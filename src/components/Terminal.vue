<template>
  <div class="terminal" @click="focusInput">
    <div class="history" ref="historyRef">

      <!-- Welcome banner: reactive to locale changes -->
      <TerminalLine
        v-for="(line, i) in welcomeLines"
        :key="`w${i}`"
        :type="line.type"
        :text="line.text"
      />

      <!-- Command interaction history -->
      <TerminalLine
        v-for="(line, i) in history"
        :key="`h${i}`"
        :type="line.type"
        :text="line.text"
        :href="line.href"
        :link-text="line.linkText"
      />

    </div>

    <TerminalInput ref="inputRef" />
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useTerminal, getWelcomeLines } from '../composables/useTerminal.js'
import { useI18n } from '../composables/useI18n.js'
import TerminalLine from './TerminalLine.vue'
import TerminalInput from './TerminalInput.vue'

const { history } = useTerminal()
const { t } = useI18n()

const historyRef = ref(null)
const inputRef = ref(null)

// Recomputes automatically whenever locale changes
const welcomeLines = computed(() => getWelcomeLines(t.value))

function focusInput() {
  inputRef.value?.focus()
}

// Auto-scroll to bottom whenever history grows
watch(history, async () => {
  await nextTick()
  if (historyRef.value) {
    historyRef.value.scrollTop = historyRef.value.scrollHeight
  }
}, { deep: true })
</script>

<style scoped>
.terminal {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--fg);
  cursor: text;
}

.history {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--muted) transparent;
}
</style>
