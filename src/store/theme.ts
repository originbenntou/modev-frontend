import { defineStore } from 'pinia'

export const THEMES = {
  DARK: 'acid',
  LIGHT: 'dracula',
}

export const useThemeStore = defineStore('theme', () => {
  const theme = reactive({ dark: false })

  function toggle() {
    theme.dark = !theme.dark
  }

  return { theme, toggle }
})
