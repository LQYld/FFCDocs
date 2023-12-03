<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
defineProps<{
  icon?: DefaultTheme.FeatureIcon
  title: string
  id: string
}>()
</script>
<style scoped>
  .h2-display {
    display: flex;
    align-items: center;
  }
  .icon-mr {
    margin-right: 8px;
  }
</style>
<template>
  <h2 class="h2-display" :id="id"><div class="icon icon-mr" v-html="icon"></div>{{title}}</h2>
</template>