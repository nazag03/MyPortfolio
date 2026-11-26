import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

const theme = ref('dark')

export function useTheme() {
  function applyTheme(value) {
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem(STORAGE_KEY, value)
    theme.value = value
  }

  function initTheme() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      applyTheme(stored)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }
  }

  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, initTheme, toggleTheme }
}
