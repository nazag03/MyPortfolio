import { ref } from 'vue'
import { translations } from '../data/translations.js'

const STORAGE_KEY = 'portfolio-language'
const language = ref('es')

export function useLanguage() {
  function initLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') {
      language.value = stored
    }
  }

  function toggleLanguage() {
    language.value = language.value === 'es' ? 'en' : 'es'
    localStorage.setItem(STORAGE_KEY, language.value)
  }

  function t(key) {
    const keys = key.split('.')
    let result = translations[language.value]
    for (const k of keys) {
      if (result == null) return key
      result = result[k]
    }
    return result ?? key
  }

  return { language, initLanguage, toggleLanguage, t }
}
