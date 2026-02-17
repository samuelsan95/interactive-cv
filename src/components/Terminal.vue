<template>
  <div class="terminal" @click="focusInput">
    <div class="history" ref="historyRef">

      <!-- Welcome banner: reactive to locale changes -->
      <TerminalLine
        v-for="(line, i) in welcomeLines"
        :key="`w${i}`"
        :type="line.type"
        :text="line.text"
        :banner="line.banner"
        :mobile-only="line.mobileOnly"
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

// Track history length between watch triggers (arrays are mutated in place,
// so oldVal === newVal in a deep watch)
let prevHistoryLen = 0

watch(history, async () => {
  await nextTick()
  if (!historyRef.value) return

  const currentLen = history.value.length
  const isMobile = window.innerWidth <= 640

  if (isMobile && currentLen > prevHistoryLen) {
    // On mobile: scroll to the first output line of the new command.
    // DOM order: welcome lines first, then history lines.
    // Skip the echoed input line (+1) so the section header is at the top.
    const firstOutputIndex = welcomeLines.value.length + prevHistoryLen + 1
    const child = historyRef.value.children[firstOutputIndex]
    if (child) {
      historyRef.value.scrollTop = child.offsetTop
      prevHistoryLen = currentLen
      return
    }
  }

  // Desktop (or clear command): scroll to the bottom as usual
  historyRef.value.scrollTop = historyRef.value.scrollHeight
  prevHistoryLen = currentLen
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

@media (max-width: 640px) {
  .terminal {
    padding: 1rem 0.75rem;
  }
}

.history {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--muted) transparent;
}
</style>
