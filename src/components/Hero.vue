<script setup>
import { useLanguage } from '../composables/useLanguage.js'
import { config } from '../data/config.js'

const { t } = useLanguage()

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero" aria-label="Presentación">
    <div class="hero-bg-glow" aria-hidden="true"></div>

    <div class="container hero-inner">

      <!-- Text side -->
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          {{ t('hero.badge') }}
        </div>

        <h1 class="hero-name">{{ config.name }}</h1>

        <div class="hero-roles">
          <span class="role-tag">{{ t('hero.role') }}</span>
          <span class="role-separator">·</span>
          <span class="role-tag secondary">{{ t('hero.roleSecondary') }}</span>
        </div>

        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
        <p class="hero-description">{{ t('hero.description') }}</p>

        <div class="hero-actions">
          <button class="btn btn-primary btn-lg" @click="scrollTo('#projects')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            {{ t('hero.viewProjects') }}
          </button>
          <button class="btn btn-secondary btn-lg" @click="scrollTo('#contact')">
            {{ t('hero.contact') }}
          </button>
        </div>

        <div class="hero-social">
          <a
            :href="config.github"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="GitHub de Nazareno Garrone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            :href="config.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn de Nazareno Garrone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <!-- Image side -->
      <div class="hero-image-wrap" aria-hidden="true">
        <div class="hero-image-frame">
          <img
            v-if="config.profileImage"
            :src="config.profileImage"
            :alt="`Foto de ${config.name}`"
            class="hero-photo"
          />
          <div v-else class="hero-placeholder">
            <span class="placeholder-initials">NG</span>
          </div>
        </div>
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
      </div>

    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" aria-hidden="true">
      <div class="scroll-dot"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: 68px;
  overflow: hidden;
}

.hero-bg-glow {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 1;
}

/* Content */
.hero-content {
  max-width: 600px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 999px;
  border: 1px solid var(--accent-subtle-border);
  background: var(--accent-subtle);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 500;
  margin-bottom: 1.75rem;
  letter-spacing: 0.01em;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 2s ease infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.hero-roles {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.role-tag {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.role-tag.secondary {
  color: var(--accent);
}

.role-separator {
  color: var(--text-muted);
}

.hero-tagline {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.5;
  margin-bottom: 0.875rem;
  letter-spacing: -0.01em;
}

.hero-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 2rem;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.hero-social {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  background: transparent;
  transition: all 0.2s ease;
}

.social-link:hover {
  color: var(--text-primary);
  border-color: var(--border-strong);
  background: var(--surface-2);
}

/* Image */
.hero-image-wrap {
  position: relative;
  width: 320px;
  height: 320px;
  flex-shrink: 0;
}

.hero-image-frame {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--border-strong);
  position: relative;
  z-index: 2;
  background: var(--surface-2);
}

.hero-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  image-rendering: -webkit-optimize-contrast;
}

.hero-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--accent-subtle) 0%, var(--surface-2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-initials {
  font-size: 5rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.05em;
  opacity: 0.6;
}

/* Decorative rings */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--accent-subtle-border);
  inset: 0;
  z-index: 1;
  animation: ring-pulse 3s ease-in-out infinite;
}

.ring-1 {
  inset: -16px;
  animation-delay: 0s;
}

.ring-2 {
  inset: -32px;
  opacity: 0.5;
  animation-delay: 0.5s;
}

@keyframes ring-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.01); }
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
}

.scroll-dot {
  width: 24px;
  height: 40px;
  border: 2px solid var(--border-strong);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5px;
}

.scroll-dot::after {
  content: '';
  display: block;
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
  animation: scroll-bounce 2s ease-in-out infinite;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  60% { transform: translateY(10px); opacity: 0.3; }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .hero-content {
    max-width: 100%;
    order: 2;
  }

  .hero-image-wrap {
    order: 1;
    width: 220px;
    height: 220px;
    margin: 0 auto;
  }

  .hero-roles {
    justify-content: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-social {
    justify-content: center;
  }

  .hero-description {
    margin: 0 auto 2rem;
  }
}

@media (max-width: 480px) {
  .hero-image-wrap {
    width: 180px;
    height: 180px;
  }

  .placeholder-initials {
    font-size: 3.5rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
