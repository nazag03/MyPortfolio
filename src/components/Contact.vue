<script setup>
import { ref, computed } from 'vue'
import { config } from '../data/config.js'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const form = ref({ name: '', email: '', message: '' })

function handleSubmit() {
  const { name, email, message } = form.value
  if (!name || !email || !message) return

  const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`)
  const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)
  window.open(
    `https://mail.google.com/mail/?view=cm&to=${config.email}&su=${subject}&body=${body}`,
    '_blank'
  )
}

const contactLinks = computed(() => [
  {
    id: 'email',
    label: t('contact.emailLabel'),
    value: config.email,
    href: `https://mail.google.com/mail/?view=cm&to=${config.email}`,
    icon: 'mail',
    external: true
  },
  {
    id: 'github',
    label: t('contact.githubLabel'),
    value: 'github.com/nazag03',
    href: config.github,
    icon: 'github',
    external: true
  },
  {
    id: 'linkedin',
    label: t('contact.linkedinLabel'),
    value: 'linkedin.com/in/nazareno-garrone',
    href: config.linkedin,
    icon: 'linkedin',
    external: true
  },
  {
    id: 'location',
    label: t('contact.location'),
    value: config.location,
    href: null,
    icon: 'map'
  }
])

const svgIcons = {
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">

      <div class="contact-header" v-reveal>
        <p class="section-eyebrow">{{ t('contact.eyebrow') }}</p>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="contact-grid">

        <!-- Info column -->
        <div class="contact-info" v-reveal="{ delay: 100 }">
          <div class="info-links">
            <a
              v-for="link in contactLinks"
              :key="link.id"
              class="info-link"
              :class="{ clickable: !!link.href }"
              :href="link.href || undefined"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :aria-label="link.href ? `${link.label}: ${link.value}` : undefined"
            >
              <div class="info-icon" v-html="svgIcons[link.icon]"></div>
              <div class="info-text">
                <span class="info-label">{{ link.label }}</span>
                <span class="info-value">{{ link.value }}</span>
              </div>
              <svg v-if="link.href" class="info-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <div class="availability-card card">
            <div class="avail-dot"></div>
            <div>
              <strong class="avail-title">{{ t('contact.availabilityTitle') }}</strong>
              <p class="avail-desc">{{ t('contact.availabilityDesc') }}</p>
            </div>
          </div>
        </div>

        <!-- Form column -->
        <div class="contact-form-wrap" v-reveal="{ delay: 200 }">
          <form class="contact-form card" @submit.prevent="handleSubmit" novalidate>
            <h3 class="form-title">{{ t('contact.formTitle') }}</h3>

            <div class="form-group">
              <label for="contact-name" class="form-label">{{ t('contact.name') }}</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                class="form-input"
                :placeholder="t('contact.namePlaceholder')"
                required
                autocomplete="name"
              />
            </div>

            <div class="form-group">
              <label for="contact-email" class="form-label">{{ t('contact.email') }}</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                class="form-input"
                :placeholder="t('contact.emailPlaceholder')"
                required
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label">{{ t('contact.message') }}</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                class="form-input form-textarea"
                :placeholder="t('contact.messagePlaceholder')"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              {{ t('contact.send') }}
            </button>

            <p class="form-note">{{ t('contact.formNote') }}</p>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-header {
  margin-bottom: 3rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 3rem;
  align-items: start;
}

/* Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.125rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  transition: all 0.2s ease;
  text-decoration: none;
}

.info-link.clickable:hover {
  border-color: var(--accent-subtle-border);
  background: var(--accent-subtle);
  transform: translateX(4px);
}

.info-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.info-link.clickable:hover .info-icon {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
  min-width: 0;
}

.info-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.info-value {
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 450;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info-arrow {
  color: var(--text-muted);
  flex-shrink: 0;
  transition: transform 0.2s, color 0.2s;
}

.info-link.clickable:hover .info-arrow {
  transform: translateX(3px);
  color: var(--accent);
}

/* Availability card */
.availability-card {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 1.125rem 1.25rem;
}

.avail-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
  margin-top: 4px;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  animation: pulse-avail 2.5s ease infinite;
}

@keyframes pulse-avail {
  0%, 100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.2); }
  50% { box-shadow: 0 0 0 6px rgba(16,185,129,0.1); }
}

.avail-title {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.avail-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Form */
.contact-form {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.form-input {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-strong);
  background: var(--surface-2);
  color: var(--text-primary);
  font-size: 0.9rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-subtle);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  width: 100%;
  justify-content: center;
  padding: 0.8rem;
  font-size: 0.925rem;
}

.form-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
