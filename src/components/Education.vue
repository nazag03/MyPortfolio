<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t } = useLanguage()

const educationItems = computed(() => t('education.items'))
</script>

<template>
  <section id="education" class="section section-alt">
    <div class="container">

      <div class="edu-header" v-reveal>
        <p class="section-eyebrow">{{ t('education.eyebrow') }}</p>
        <h2 class="section-title">{{ t('education.title') }}</h2>
        <p class="section-subtitle">{{ t('education.subtitle') }}</p>
      </div>

      <div class="timeline">
        <article
          v-for="(item, index) in educationItems"
          :key="item.id"
          class="timeline-item"
          v-reveal="{ delay: index * 100 }"
        >
          <!-- Dot -->
          <div class="timeline-dot" :class="item.statusType" aria-hidden="true"></div>

          <!-- Card -->
          <div class="timeline-card card">
            <div class="card-top">
              <div class="card-meta">
                <time class="edu-period">{{ item.period }}</time>
                <span class="edu-status" :class="item.statusType">{{ item.status }}</span>
              </div>

              <h3 class="edu-degree">{{ item.degree }}</h3>
              <p class="edu-institution">
                {{ item.institution }}
                <span v-if="item.campus"> · {{ item.campus }}</span>
              </p>
            </div>

            <p v-if="item.description" class="edu-description">{{ item.description }}</p>

            <div v-if="item.highlights.length" class="edu-highlights">
              <span v-for="h in item.highlights" :key="h" class="tag">{{ h }}</span>
            </div>

            <div v-if="item.documents?.length" class="edu-docs">
              <a
                v-for="doc in item.documents"
                :key="doc.href"
                :href="doc.href"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary btn-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></svg>
                {{ doc.label }}
              </a>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.edu-header {
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 2rem;
}

/* Vertical line */
.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: var(--border);
}

/* Timeline item */
.timeline-item {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* Dot */
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
  transition: border-color 0.2s;
}

.timeline-dot.completed {
  background: var(--accent);
  border-color: var(--accent);
}

.timeline-dot.partial {
  background: var(--surface);
  border-color: var(--accent);
}

.timeline-dot.pending {
  background: var(--surface-2);
  border-color: var(--border-strong);
}

/* Card */
.timeline-card {
  padding: 1.5rem;
}

.timeline-item:hover .timeline-dot {
  border-color: var(--accent);
}

.card-top {
  margin-bottom: 1rem;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.625rem;
  flex-wrap: wrap;
}

.edu-period {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

.edu-status {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid;
}

.edu-status.completed {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-color: rgba(16, 185, 129, 0.25);
}

.edu-status.partial {
  background: var(--accent-subtle);
  color: var(--accent);
  border-color: var(--accent-subtle-border);
}

.edu-status.pending {
  background: var(--surface-2);
  color: var(--text-muted);
  border-color: var(--border);
}

.edu-degree {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.edu-institution {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.edu-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.edu-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.edu-docs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-dot {
    left: -1.5rem;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }
}
</style>
