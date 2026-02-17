<template>
  <div class="terminal">
    <p class="welcome">Terminal CV — work in progress</p>
    <p class="muted">Tema activo: {{ activeTheme.name }}</p>
  </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'

const { activeTheme } = useTheme()
</script>

<style scoped>
.terminal {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: var(--bg);
  color: var(--fg);
}

.muted {
  color: var(--muted);
  margin-top: 0.5rem;
}
</style>
