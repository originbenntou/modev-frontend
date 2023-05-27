import { defineStore } from 'pinia'

export const THEMES = {
  LIGHT: 'cmyk',
  DARK: 'night',
}

export const useThemeStore = defineStore('theme', () => {
  const theme = reactive({ dark: true })

  function toggle() {
    theme.dark = !theme.dark
  }

  return { theme, toggle }
})
