<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {VPImage} from "vitepress/theme";
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { nextTick, provide } from 'vue';

const { Layout } = DefaultTheme

const { frontmatter: fm, isDark } = useData()

const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async () => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const DIY_IMAGE_CONTAINER_DOM = document.getElementById('DIY_IMAGE_CONTAINER');

  const rect = DIY_IMAGE_CONTAINER_DOM.getBoundingClientRect();
  const x = rect.left + rect.width/2;
  const y = rect.top + rect.height/2;

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
      }
  )
})
</script>

<style scoped>
.container{
  filter: drop-shadow(46px 36px 24px var(--color-blue))
  drop-shadow(-55px -40px 25px var(--color-green));
  animation: blinkShadowsFilter 8s ease-in infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes blinkShadowsFilter {
  0% {
    filter: drop-shadow(46px 36px 28px rgba(0, 128, 163, 0.3411764706))
    drop-shadow(-55px -40px 28px var(--color-green));
  }

  25% {
    filter: drop-shadow(46px -36px 24px rgba(0, 128, 163, 0.8980392157))
    drop-shadow(-55px 40px 24px var(--color-green));
  }

  50% {
    filter: drop-shadow(46px 36px 30px rgba(0, 128, 163, 0.8980392157))
    drop-shadow(-55px 40px 30px rgba(56, 197, 136, 0.2941176471));
  }

  75% {
    filter: drop-shadow(20px -18px 25px rgba(0, 128, 163, 0.8980392157))
    drop-shadow(-20px 20px 25px rgba(56, 197, 136, 0.2941176471));
  }

  to {
    filter: drop-shadow(46px 36px 28px rgba(0, 128, 163, 0.3411764706))
    drop-shadow(-55px -40px 28px var(--color-green));
  }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="container" id="DIY_IMAGE_CONTAINER">
        <VPImage v-if="fm.hero.image" class="image-src" :image="fm.hero.image" />
      </div>
    </template>
  </Layout>
</template>