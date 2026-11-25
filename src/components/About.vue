<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const highlights = computed(() => t('about.highlights'))
const traits = computed(() => t('about.traits'))
const paragraphs = computed(() => t('about.paragraphs'))

const age = computed(() => {
  const birth = new Date(2003, 3, 30) // 30 abril 2003
  const now = new Date()
  let years = now.getFullYear() - birth.getFullYear()
  const passed = now.getMonth() > 3 || (now.getMonth() === 3 && now.getDate() >= 30)
  if (!passed) years--
  return years
})
</script>

<template>
  <section id="about" class="section">
    <div class="container">

      <div class="about-grid">
        <!-- Text column -->
        <div class="about-text" v-reveal>
          <p class="section-eyebrow">{{ t('about.eyebrow') }}</p>
          <h2 class="section-title">{{ t('about.title') }}</h2>

          <div class="about-paragraphs">
            <p v-for="(para, i) in paragraphs" :key="i" class="about-para">
              <template v-if="i === 0">
                <span class="age-intro">{{ t('about.ageIntro').replace('{n}', age) }}</span>
                {{ ' ' }}
              </template>{{ para }}
            </p>
          </div>

          <div class="traits-wrap">
            <span v-for="trait in traits" :key="trait" class="trait-chip">
              {{ trait }}
            </span>
          </div>
        </div>

        <!-- Right column -->
        <div class="about-side">
          <!-- Highlights grid -->
          <div class="highlights-grid" v-reveal="{ delay: 150 }">
            <article
              v-for="h in highlights"
              :key="h.label"
              class="highlight-card card"
            >
              <span class="highlight-value">{{ h.value }}</span>
              <span class="highlight-label">{{ h.label }}</span>
              <span class="highlight-detail">{{ h.detail }}</span>
            </article>
          </div>

          <!-- UTN callout -->
          <div class="utn-card card" v-reveal="{ delay: 250 }">
            <div class="utn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div class="utn-text">
              <strong>{{ t('about.utn') }}</strong>
              <span>{{ t('about.utnCampus') }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}

/* Text */
.about-text {
  max-width: 600px;
}

.about-paragraphs {
  margin: 1.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-para {
  font-size: 0.975rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.age-intro {
  color: var(--text-secondary);
}

.traits-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.trait-chip {
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  background: var(--surface-2);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  white-space: nowrap;
}

/* Highlights */
.about-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
}

.highlight-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.highlight-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent-subtle-border);
}

.highlight-value {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--accent);
  line-height: 1;
}

.highlight-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.highlight-detail {
  font-size: 0.72rem;
  color: var(--text-secondary);
  line-height: 1.3;
}

/* UTN card */
.utn-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.125rem 1.25rem;
}

.utn-icon {
  width: 40px;
  height: 40px;
  background: var(--accent-subtle);
  border: 1px solid var(--accent-subtle-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.utn-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.utn-text strong {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.utn-text span {
  font-size: 0.78rem;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .about-text {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .highlights-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
