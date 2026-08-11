<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open'])
const { t, language } = useLanguage()

const displayTitle = computed(() =>
  language.value === 'en' && props.project.titleEn ? props.project.titleEn : props.project.title
)
const displayDesc = computed(() =>
  language.value === 'en' && props.project.shortDescriptionEn ? props.project.shortDescriptionEn : props.project.shortDescription
)
const displayCategory = computed(() => {
  const labels = t('projects.categoryLabels')
  return labels?.[props.project.category] ?? props.project.category
})

const categoryColors = {
  'Web': { bg: 'rgba(16,185,129,0.1)', color: '#10b981', border: 'rgba(16,185,129,0.2)' },
  'Sistema': { bg: 'rgba(99,102,241,0.1)', color: '#6366f1', border: 'rgba(99,102,241,0.2)' },
  'E-commerce': { bg: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: 'rgba(245,158,11,0.2)' }
}

function getCategoryStyle(category) {
  const c = categoryColors[category]
  if (!c) return {}
  return {
    backgroundColor: c.bg,
    color: c.color,
    borderColor: c.border
  }
}
</script>

<template>
  <article class="project-card card" @click="emit('open', project)" role="button" tabindex="0" :aria-label="`Ver detalles de ${project.title}`" @keyup.enter="emit('open', project)">

    <!-- Image / placeholder -->
    <div class="card-image">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Imagen del proyecto ${project.title}`"
        class="project-img"
        loading="lazy"
      />
      <div v-else class="project-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        <span>{{ t('projects.pendingImage') }}</span>
      </div>

      <!-- Featured badge -->
      <div v-if="project.featured" class="featured-badge" :aria-label="t('projects.featured')">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        {{ t('projects.featured') }}
      </div>
    </div>

    <!-- Content -->
    <div class="card-content">
      <div class="card-meta">
        <span class="category-badge" :style="getCategoryStyle(project.category)">
          {{ displayCategory }}
        </span>
      </div>

      <h3 class="project-title">{{ displayTitle }}</h3>
      <p class="project-description">{{ displayDesc }}</p>

      <!-- Technologies -->
      <div v-if="project.technologies && project.technologies.length" class="project-tech">
        <span v-for="tech in project.technologies.slice(0, 4)" :key="tech" class="tag">{{ tech }}</span>
        <span v-if="project.technologies.length > 4" class="tag tag-more">+{{ project.technologies.length - 4 }}</span>
      </div>
      <div v-else class="project-tech">
        <span class="tag tag-pending">{{ t('projects.pendingTech') }}</span>
      </div>

      <!-- Action -->
      <div class="card-footer">
        <span class="view-link">
          {{ t('projects.viewProject') }}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-subtle-border);
  box-shadow: var(--shadow);
}

/* Image */
.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--surface-2);
  flex-shrink: 0;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-img {
  transform: scale(1.04);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.featured-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: var(--accent);
  color: #fff;
}

/* Content */
.card-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.category-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid transparent;
}

.project-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.project-description {
  font-size: 0.845rem;
  color: var(--text-secondary);
  line-height: 1.65;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

.tag-pending {
  color: var(--text-muted);
  border-color: var(--border);
  background: transparent;
}

.tag-more {
  color: var(--text-muted);
}

/* Footer */
.card-footer {
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

.view-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--accent);
  transition: gap 0.2s ease;
}

.project-card:hover .view-link {
  gap: 0.6rem;
}
</style>
