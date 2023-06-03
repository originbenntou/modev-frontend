import { defineStore } from 'pinia'

export const THEMES = {
  LIGHT: 'pastel',
  DARK: 'night',
}

export const useThemeStore = defineStore('theme', () => {
  const theme = reactive({ dark: true })

  const toggle = () => {
    theme.dark = !theme.dark
  }

  return { theme, toggle }
})
