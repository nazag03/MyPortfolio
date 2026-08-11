import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'

const app = createApp(App)

// Global scroll-reveal directive
app.directive('reveal', {
  mounted(el, binding) {
    const options = binding.value || {}
    const delay = options.delay || 0
    el.classList.add('reveal')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
  }
})

app.mount('#app')
