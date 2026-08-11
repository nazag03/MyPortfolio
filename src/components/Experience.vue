<script setup>
import { computed } from 'vue'
import { experiences } from '../data/experience.js'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const previewProjects = computed(() => t('experience.previewProjects'))
</script>

<template>
  <section id="experience" class="section">
    <div class="container">

      <div class="exp-header" v-reveal>
        <p class="section-eyebrow">{{ t('experience.eyebrow') }}</p>
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        <p class="section-subtitle">{{ t('experience.subtitle') }}</p>
      </div>

      <!-- Timeline when there is data -->
      <div v-if="experiences.length" class="timeline">
        <article
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="timeline-item"
          v-reveal="{ delay: index * 100 }"
        >
          <div class="timeline-dot" :class="{ current: exp.current }" aria-hidden="true"></div>

          <div class="timeline-card card">
            <div class="exp-top">
              <div class="exp-meta">
                <time class="exp-period">{{ exp.period }}</time>
                <span v-if="exp.current" class="current-badge">{{ t('experience.current') }}</span>
              </div>
              <h3 class="exp-role">{{ exp.role }}</h3>
              <p class="exp-company">{{ exp.company }}</p>
            </div>

            <p v-if="exp.description" class="exp-description">{{ exp.description }}</p>

            <ul v-if="exp.responsibilities && exp.responsibilities.length" class="exp-list">
              <li v-for="r in exp.responsibilities" :key="r" class="exp-list-item">
                <span class="list-dot" aria-hidden="true"></span>
                {{ r }}
              </li>
            </ul>

            <div v-if="exp.technologies && exp.technologies.length" class="exp-tech">
              <span v-for="tech in exp.technologies" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div v-else class="exp-empty" v-reveal="{ delay: 100 }">
        <div class="exp-empty-inner card">
          <div class="empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          </div>
          <div>
            <h3 class="empty-title">{{ t('experience.emptyTitle') }}</h3>
            <p class="empty-desc">{{ t('experience.emptyDesc') }}</p>
          </div>
        </div>

        <div class="exp-preview">
          <p class="preview-label">{{ t('experience.previewLabel') }}</p>
          <div class="exp-preview-grid">
            <div v-for="project in previewProjects" :key="project" class="exp-preview-item">
              <span class="preview-dot" aria-hidden="true"></span>
              {{ project }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.exp-header {
  margin-bottom: 2.5rem;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 1.25rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--border-strong);
  background: var(--surface);
  z-index: 1;
}

.timeline-dot.current {
  background: var(--accent);
  border-color: var(--accent);
}

.timeline-card { padding: 1.5rem; }

.exp-top { margin-bottom: 1rem; }

.exp-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.exp-period {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

.current-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: rgba(16,185,129,0.1);
  color: #10b981;
  border: 1px solid rgba(16,185,129,0.25);
}

.exp-role {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.exp-company {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 500;
}

.exp-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.exp-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1rem;
}

.exp-list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.list-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

/* Empty state */
.exp-empty {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.exp-empty-inner {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
}

.empty-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-subtle);
  border: 1px solid var(--accent-subtle-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.empty-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
}

.empty-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.exp-preview {
  padding: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.preview-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.exp-preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
}

.exp-preview-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.preview-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .exp-empty-inner { flex-direction: column; gap: 1rem; }
  .exp-preview-grid { grid-template-columns: 1fr; }
  .timeline { padding-left: 1.5rem; }
  .timeline-dot { left: -1.5rem; }
  .timeline-item { padding-left: 1.5rem; }
}
</style>
