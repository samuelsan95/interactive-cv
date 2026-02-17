<template>
  <Terminal />
</template>

<script setup>
import Terminal from './components/Terminal.vue'
import { useTheme } from './composables/useTheme.js'

// Initialize theme (also happens on module import, this makes it explicit)
useTheme()
</script>
