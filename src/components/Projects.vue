<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects.js'
import { useLanguage } from '../composables/useLanguage.js'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'

const { t } = useLanguage()

const selectedProject = ref(null)
const activeFilter = ref('all')

const filterDefs = [
  { id: 'all' },
  { id: 'featured' },
  { id: 'Web' },
  { id: 'Sistema' },
  { id: 'E-commerce' }
]

const localizedFilters = computed(() => {
  const labels = t('projects.filters')
  return filterDefs.map((f, i) => ({ ...f, label: labels[i] ?? f.id }))
})

function getCount(f) {
  if (f.id === 'all') return projects.length
  if (f.id === 'featured') return projects.filter(p => p.featured).length
  return projects.filter(p => p.category === f.id).length
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  if (activeFilter.value === 'featured') return projects.filter(p => p.featured)
  return projects.filter(p => p.category === activeFilter.value)
})

function openModal(project) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="section section-alt">
    <div class="container">

      <div class="projects-header" v-reveal>
        <p class="section-eyebrow">{{ t('projects.eyebrow') }}</p>
        <h2 class="section-title">{{ t('projects.title') }}</h2>
        <p class="section-subtitle">{{ t('projects.subtitle') }}</p>
      </div>

      <!-- Filters -->
      <div class="filters" role="group" :aria-label="t('projects.eyebrow')" v-reveal="{ delay: 100 }">
        <button
          v-for="f in localizedFilters"
          :key="f.id"
          class="filter-btn"
          :class="{ active: activeFilter === f.id }"
          @click="activeFilter = f.id"
        >
          {{ f.label }}
          <span v-if="getCount(f) > 0" class="filter-count">{{ getCount(f) }}</span>
        </button>
      </div>

      <!-- Grid -->
      <Transition name="grid-fade" mode="out-in">
        <div :key="activeFilter" class="projects-grid">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            v-reveal="{ delay: index * 80 }"
          >
            <ProjectCard :project="project" @open="openModal" />
          </div>
        </div>
      </Transition>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <p>{{ t('projects.noProjects') }}</p>
      </div>

    </div>

    <!-- Modal -->
    <ProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>

<style scoped>
.projects-header {
  margin-bottom: 2rem;
}

/* Filters */
.filters {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--surface);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.filter-btn:hover {
  color: var(--text-primary);
  border-color: var(--border-strong);
  background: var(--surface-hover);
}

.filter-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  font-size: 0.65rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  line-height: 1;
}

.filter-btn:not(.active) .filter-count {
  background: var(--surface-2);
  color: var(--text-muted);
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

/* Grid transition */
.grid-fade-enter-active,
.grid-fade-leave-active {
  transition: opacity 0.2s ease;
}
.grid-fade-enter-from,
.grid-fade-leave-to {
  opacity: 0;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 4rem 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filters {
    gap: 0.3rem;
  }

  .filter-btn {
    padding: 0.4rem 0.75rem;
    font-size: 0.78rem;
  }
}
</style>
