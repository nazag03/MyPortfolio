<script setup>
import { computed } from 'vue'
import { config } from '../data/config.js'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const currentYear = new Date().getFullYear()

const navLinks = computed(() => [
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.education'), href: '#education' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.services'), href: '#services' },
  { label: t('nav.contact'), href: '#contact' }
])

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="container">

      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-badge">NG</span>
            <span class="logo-name">{{ config.name }}</span>
          </div>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
          <p class="footer-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {{ config.location }}
          </p>
        </div>

        <!-- Nav -->
        <nav class="footer-nav" :aria-label="t('footer.sections')">
          <p class="footer-nav-title">{{ t('footer.sections') }}</p>
          <ul class="footer-nav-list">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="footer-link" @click.prevent="scrollTo(link.href)">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Social / contact -->
        <div class="footer-contact">
          <p class="footer-nav-title">{{ t('footer.contact') }}</p>
          <div class="footer-socials">
            <a :href="`mailto:${config.email}`" class="footer-social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              {{ config.email }}
            </a>
            <a :href="config.github" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              github.com/nazag03
            </a>
            <a :href="config.linkedin" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <hr class="divider" />

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} {{ config.name }}. {{ t('footer.copyright') }}
        </p>
        <!-- <a :href="config.cv" download class="btn btn-ghost btn-sm cv-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {{ t('footer.downloadCV') }}
        </a> -->
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg-secondary);
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 3rem;
  padding: 3rem 0 2.5rem;
  align-items: start;
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.logo-badge {
  width: 32px;
  height: 32px;
  background: var(--accent);
  color: #fff;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  flex-shrink: 0;
}

.logo-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.footer-tagline {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.footer-location {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Nav */
.footer-nav-title {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 0.875rem;
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  font-size: 0.84rem;
  color: var(--text-secondary);
  transition: color 0.2s;
  display: inline-block;
}

.footer-link:hover {
  color: var(--text-primary);
}

/* Contact / socials */
.footer-contact {
  min-width: 220px;
}

.footer-socials {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
  transition: color 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.footer-social-link:hover {
  color: var(--accent);
}

/* Bottom */
.divider {
  height: 1px;
  background: var(--border);
  border: none;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  gap: 1rem;
}

.copyright {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.cv-link {
  font-size: 0.8rem;
  gap: 0.4rem;
}

/* Responsive */
@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 0 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
}
</style>
