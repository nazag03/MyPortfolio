<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import { useLanguage } from '../composables/useLanguage.js'
import { config } from '../data/config.js'

const { theme, toggleTheme } = useTheme()
const { language, toggleLanguage, t } = useLanguage()

const isScrolled = ref(false)
const menuOpen = ref(false)

const navLinks = computed(() => [
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.education'), href: '#education' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.services'), href: '#services' },
  { label: t('nav.contact'), href: '#contact' }
])

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMenu() {
  menuOpen.value = false
}

function handleNavClick(href) {
  closeMenu()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="navbar" :class="{ scrolled: isScrolled }" role="banner">
    <div class="nav-inner container">

      <!-- Logo -->
      <a href="#" class="nav-logo" aria-label="Inicio" @click.prevent="handleNavClick('#')">
        <span class="logo-badge">NG</span>
        <span class="logo-name">Nazareno Garrone</span>
      </a>

      <!-- Desktop nav -->
      <nav class="nav-links" aria-label="Navegación principal">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click.prevent="handleNavClick(link.href)"
        >{{ link.label }}</a>
      </nav>

      <!-- Actions -->
      <div class="nav-actions">
        <!-- Language toggle -->
        <button
          class="lang-btn"
          @click="toggleLanguage"
          :title="language === 'es' ? 'Switch to English' : 'Cambiar a Español'"
          :aria-label="language === 'es' ? 'Switch to English' : 'Cambiar a Español'"
        >
          <span :class="{ active: language === 'es' }">ES</span>
          <span class="lang-sep">|</span>
          <span :class="{ active: language === 'en' }">EN</span>
        </button>

        <!-- Theme toggle -->
        <button
          class="theme-btn"
          @click="toggleTheme"
          :aria-label="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'"
        >
          <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- CV download (temporalmente oculto)
        <a :href="config.cv" download class="btn btn-primary btn-sm nav-cv">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {{ t('nav.downloadCV') }}
        </a>
        -->

        <!-- Hamburger -->
        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }" aria-hidden="!menuOpen">
      <nav class="mobile-links">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="mobile-link"
          @click.prevent="handleNavClick(link.href)"
        >{{ link.label }}</a>
      </nav>
      <div class="mobile-bottom">
        <button class="lang-btn lang-btn-mobile" @click="toggleLanguage">
          <span :class="{ active: language === 'es' }">ES</span>
          <span class="lang-sep">|</span>
          <span :class="{ active: language === 'en' }">EN</span>
        </button>
        <!-- <a :href="config.cv" download class="btn btn-primary btn-sm mobile-cv">
          {{ t('nav.downloadCV') }}
        </a> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background-color: var(--nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  gap: 2rem;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  text-decoration: none;
}

.logo-badge {
  width: 34px;
  height: 34px;
  background: var(--accent);
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  flex-shrink: 0;
}

.logo-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

/* Desktop nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.nav-link {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 450;
  color: var(--text-secondary);
  transition: color 0.2s, background-color 0.2s;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--surface-2);
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

/* Language toggle */
.lang-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0 0.75rem;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  background: var(--surface-2);
  border-color: var(--border-strong);
}

.lang-btn span {
  transition: color 0.2s;
}

.lang-btn span.active {
  color: var(--accent);
  font-weight: 700;
}

.lang-sep {
  opacity: 0.35;
  font-weight: 400;
}

/* Theme toggle */
.theme-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.theme-btn:hover {
  color: var(--text-primary);
  background: var(--surface-2);
  border-color: var(--border-strong);
}

.nav-cv {
  display: flex;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  transition: background-color 0.2s;
}

.hamburger:hover {
  background: var(--surface-2);
}

.hamburger span {
  display: block;
  width: 16px;
  height: 1.5px;
  background: var(--text-secondary);
  border-radius: 1px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(5.5px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-5.5px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease, padding 0.35s ease;
  background: var(--nav-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid transparent;
}

.mobile-menu.open {
  max-height: 460px;
  border-color: var(--border);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  gap: 0.25rem;
}

.mobile-link {
  padding: 0.65rem 0.875rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 450;
  color: var(--text-secondary);
  transition: color 0.2s, background-color 0.2s;
}

.mobile-link:hover {
  color: var(--text-primary);
  background: var(--surface-2);
}

.mobile-bottom {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 1.25rem 1rem;
}

.lang-btn-mobile {
  flex-shrink: 0;
}

.mobile-cv {
  flex: 1;
  justify-content: center;
}

/* Responsive */
@media (max-width: 900px) {
  .nav-links {
    display: none;
  }
  .nav-cv {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .lang-btn:not(.lang-btn-mobile) {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-name {
    display: none;
  }
}
</style>
