<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const services = computed(() => t('services.items'))

const icons = {
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
}
</script>

<template>
  <section id="services" class="section section-alt">
    <div class="container">

      <div class="srv-header" v-reveal>
        <p class="section-eyebrow">{{ t('services.eyebrow') }}</p>
        <h2 class="section-title">{{ t('services.title') }}</h2>
        <p class="section-subtitle">{{ t('services.subtitle') }}</p>
      </div>

      <div class="services-grid">
        <article
          v-for="(service, index) in services"
          :key="service.id"
          class="service-card card"
          v-reveal="{ delay: index * 80 }"
        >
          <div class="service-icon" v-html="icons[service.icon]" aria-hidden="true"></div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.srv-header {
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.service-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-subtle-border);
  box-shadow: var(--shadow);
}

.service-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-subtle);
  border: 1px solid var(--accent-subtle-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  transition: background-color 0.2s, transform 0.2s;
}

.service-card:hover .service-icon {
  transform: scale(1.05);
}

.service-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.service-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
