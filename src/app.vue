<script setup lang="ts">
import '@fontsource/fira-mono'
import '@fontsource/inter'
import '@fontsource/poppins'
import { THEMES, useThemeStore } from '@/src/store/thema'

const themeStore = useThemeStore()
</script>

<template>
  <div>
    <div
      :data-theme="themeStore.theme.dark ? THEMES.DARK : THEMES.LIGHT"
      class="bg-gradient-to-r from-base-100 to-neutral"
    >
      <div class="max-w-8xl mx-auto pb-8 pl-8 pr-8 pt-4">
        <Header />
        <NuxtPage />
        <NuxtLayout />
      </div>
    </div>
  </div>
</template>
