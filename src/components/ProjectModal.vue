<script setup>
import { watch, onMounted, onUnmounted, ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const props = defineProps({
  project: { type: Object, default: null }
})

const emit = defineEmits(['close'])
const { t } = useLanguage()

const currentIndex = ref(0)

const images = computed(() => {
  const p = props.project
  if (!p) return []
  if (p.screenshots && p.screenshots.length > 0) return p.screenshots
  if (p.image) return [p.image]
  return []
})

function prev() {
  if (images.value.length < 2) return
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
function next() {
  if (images.value.length < 2) return
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
function goTo(i) {
  currentIndex.value = i
}

function close() { emit('close') }

function handleKeydown(e) {
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

let touchStartX = 0
function onTouchStart(e) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50) dx > 0 ? prev() : next()
}

watch(() => props.project, (val) => {
  currentIndex.value = 0
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

function hasContent(val) {
  if (!val) return false
  if (Array.isArray(val)) return val.length > 0
  return val.trim() !== ''
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="modal-backdrop"
        @click.self="close"
        role="dialog"
        :aria-modal="true"
        :aria-label="`Detalle del proyecto ${project?.title}`"
      >
        <div class="modal-panel">

          <!-- Header -->
          <div class="modal-header">
            <div class="modal-title-group">
              <span v-if="project.category" class="tag modal-category">{{ project.category }}</span>
              <h2 class="modal-title">{{ project.title }}</h2>
            </div>
            <button class="modal-close" @click="close" :aria-label="t('projectModal.close') || 'Cerrar'">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <!-- Scrollable body -->
          <div class="modal-body">

            <!-- Carousel / image -->
            <div
              v-if="images.length > 0"
              class="modal-carousel"
              @touchstart.passive="onTouchStart"
              @touchend.passive="onTouchEnd"
            >
              <div class="carousel-track">
                <img
                  :src="images[currentIndex]"
                  :alt="`Captura ${currentIndex + 1} de ${project.title}`"
                  class="carousel-img"
                />
              </div>

              <div v-if="images.length > 1" class="carousel-nav">
                <button class="carousel-arrow" @click="prev" aria-label="Anterior">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>

                <div class="carousel-dots">
                  <button
                    v-for="(_, i) in images"
                    :key="i"
                    class="carousel-dot"
                    :class="{ active: i === currentIndex }"
                    @click="goTo(i)"
                    :aria-label="`Imagen ${i + 1}`"
                  />
                </div>

                <span class="carousel-counter">{{ currentIndex + 1 }} / {{ images.length }}</span>

                <button class="carousel-arrow" @click="next" aria-label="Siguiente">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Placeholder if no images -->
            <div v-else class="modal-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
              <span>{{ t('projectModal.pendingImage') }}</span>
            </div>

            <!-- Action links -->
            <div v-if="project.github || project.demo" class="modal-actions">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {{ t('projectModal.viewCode') }}
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {{ t('projectModal.viewDemo') }}
              </a>
            </div>

            <!-- Technologies -->
            <div v-if="hasContent(project.technologies)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.technologies') }}</h3>
              <div class="tech-tags">
                <span v-for="tech in project.technologies" :key="tech" class="tag">{{ tech }}</span>
              </div>
            </div>

            <!-- Description -->
            <div v-if="hasContent(project.description)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.description') }}</h3>
              <p class="modal-text">{{ project.description }}</p>
            </div>

            <!-- Problem -->
            <div v-if="hasContent(project.problem)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.problem') }}</h3>
              <p class="modal-text">{{ project.problem }}</p>
            </div>

            <!-- Solution -->
            <div v-if="hasContent(project.solution)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.solution') }}</h3>
              <p class="modal-text">{{ project.solution }}</p>
            </div>

            <!-- Features -->
            <div v-if="hasContent(project.features)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.features') }}</h3>
              <ul class="modal-list">
                <li v-for="feat in project.features" :key="feat" class="modal-list-item">
                  <span class="list-dot" aria-hidden="true"></span>
                  {{ feat }}
                </li>
              </ul>
            </div>

            <!-- Participation -->
            <div v-if="hasContent(project.participation)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.participation') }}</h3>
              <p class="modal-text">{{ project.participation }}</p>
            </div>

            <!-- Learnings -->
            <div v-if="hasContent(project.learnings)" class="modal-section">
              <h3 class="modal-section-title">{{ t('projectModal.learnings') }}</h3>
              <p class="modal-text">{{ project.learnings }}</p>
            </div>

            <!-- Pending notice -->
            <div v-if="!hasContent(project.description) && !hasContent(project.features) && !hasContent(project.technologies)" class="modal-pending">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>{{ t('projectModal.pending') }}</p>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-panel {
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: 18px;
  width: 100%;
  max-width: 780px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

/* Header */
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.modal-title-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal-category { width: fit-content; }

.modal-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.25;
}

.modal-close {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  background: transparent;
  transition: all 0.2s;
  flex-shrink: 0;
  margin-top: 2px;
}
.modal-close:hover {
  color: var(--text-primary);
  background: var(--surface-2);
}

/* Body */
.modal-body {
  overflow-y: auto;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Carousel */
.modal-carousel {
  border-radius: 10px;
  border: 1px solid var(--border);
  overflow: hidden;
  background: var(--surface-2);
  user-select: none;
}

.carousel-track {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: var(--surface-2);
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Nav bar below image */
.carousel-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  border-top: 1px solid var(--border);
  background: var(--surface);
}

.carousel-arrow {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}
.carousel-arrow:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

/* Dots */
.carousel-dots {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-strong);
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  padding: 0;
}
.carousel-dot.active {
  background: var(--accent);
  transform: scale(1.25);
}

.carousel-counter {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

/* Placeholder */
.modal-placeholder {
  height: 200px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* Actions */
.modal-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* Sections */
.modal-section {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.modal-section-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.modal-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* List */
.modal-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal-list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.list-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 0.45rem;
}

/* Pending notice */
.modal-pending {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem;
  text-align: center;
  color: var(--text-muted);
  border: 1px dashed var(--border-strong);
  border-radius: 12px;
}
.modal-pending p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: scale(0.96) translateY(12px);
  opacity: 0;
}

/* Responsive */
@media (max-width: 600px) {
  .modal-backdrop {
    padding: 0;
    align-items: flex-end;
  }
  .modal-panel {
    border-radius: 18px 18px 0 0;
    max-height: 95vh;
  }
  .modal-body {
    padding: 1.25rem;
  }
  .carousel-btn {
    width: 32px;
    height: 32px;
  }
}
</style>
