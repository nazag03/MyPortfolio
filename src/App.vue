<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme.js'
import { useLanguage } from './composables/useLanguage.js'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const { initTheme } = useTheme()
const { initLanguage } = useLanguage()

onMounted(() => {
  initTheme()
  initLanguage()
})
</script>

<template>
  <div id="app-root">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
#app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
