<script setup>
import DefaultTheme from 'vitepress/theme'
import {VPImage} from "vitepress/theme";
import { useData } from 'vitepress/dist/client/theme-default/composables/data'

const { Layout } = DefaultTheme

const { frontmatter: fm } = useData()
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
</style>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="container">
        <VPImage v-if="fm.hero.image" class="image-src" :image="fm.hero.image" />
      </div>
    </template>
  </Layout>
</template>