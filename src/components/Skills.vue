<script setup>
import { ref, computed } from 'vue'
import { skillCategories } from '../data/skills.js'
import { useLanguage } from '../composables/useLanguage.js'

const { t, language } = useLanguage()
const activeTab = ref(skillCategories[0].id)

const localizedCategories = computed(() =>
  skillCategories.map(cat => ({
    ...cat,
    label: t(`skills.categories.${cat.id}`) || cat.label,
    skills: cat.skills.map(skill => ({
      ...skill,
      displayName: language.value === 'en' && skill.nameEn ? skill.nameEn : skill.name,
      displayDescription: language.value === 'en' && skill.descriptionEn ? skill.descriptionEn : skill.description
    }))
  }))
)

function setTab(id) {
  activeTab.value = id
}
</script>

<template>
  <section id="skills" class="section">
    <div class="container">

      <div class="skills-header" v-reveal>
        <p class="section-eyebrow">{{ t('skills.eyebrow') }}</p>
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        <p class="section-subtitle">{{ t('skills.subtitle') }}</p>
      </div>

      <!-- Category tabs -->
      <div class="skills-tabs" role="tablist" :aria-label="t('skills.eyebrow')" v-reveal="{ delay: 100 }">
        <button
          v-for="cat in localizedCategories"
          :key="cat.id"
          class="skills-tab"
          :class="{ active: activeTab === cat.id }"
          role="tab"
          :aria-selected="activeTab === cat.id"
          :aria-controls="`tab-${cat.id}`"
          @click="setTab(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills grid -->
      <div
        v-for="cat in localizedCategories"
        :key="cat.id"
        :id="`tab-${cat.id}`"
        role="tabpanel"
        class="skills-grid"
        :class="{ visible: activeTab === cat.id }"
      >
        <article
          v-for="(skill, idx) in cat.skills"
          :key="skill.name"
          class="skill-card card"
          :style="{ animationDelay: `${idx * 60}ms` }"
        >
          <!-- Devicon or text badge -->
          <div class="skill-icon-wrap" :style="{ '--skill-color': skill.color }">
            <i
              v-if="skill.icon"
              :class="skill.icon"
              class="skill-devicon"
              :style="{ color: skill.icon.includes('express') || skill.icon.includes('github') ? 'var(--text-secondary)' : skill.color }"
              :aria-label="skill.displayName"
            ></i>
            <span v-else class="skill-abbr">{{ skill.abbr }}</span>
          </div>

          <div class="skill-info">
            <h3 class="skill-name">{{ skill.displayName }}</h3>
            <p class="skill-desc">{{ skill.displayDescription }}</p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skills-header {
  margin-bottom: 2.5rem;
}

/* Tabs */
.skills-tabs {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding: 4px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  width: fit-content;
}

.skills-tab {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.skills-tab:hover {
  color: var(--text-primary);
  background: var(--surface-2);
}

.skills-tab.active {
  background: var(--accent);
  color: #fff;
}

/* Grid */
.skills-grid {
  display: none;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.skills-grid.visible {
  display: grid;
  animation: tab-fade-in 0.3s ease;
}

@keyframes tab-fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Skill card */
.skill-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.125rem 1.25rem;
  cursor: default;
}

.skill-card:hover {
  border-color: var(--accent-subtle-border);
  transform: translateY(-2px);
}

.skill-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.2s;
}

.skill-card:hover .skill-icon-wrap {
  background: var(--accent-subtle);
  border-color: var(--accent-subtle-border);
}

.skill-devicon {
  font-size: 1.375rem;
  line-height: 1;
}

.skill-abbr {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--skill-color, var(--accent));
}

.skill-info {
  flex: 1;
  min-width: 0;
}

.skill-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.skill-desc {
  font-size: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .skills-tabs {
    width: 100%;
  }

  .skills-tab {
    flex: 1;
    text-align: center;
    padding: 0.5rem 0.625rem;
    font-size: 0.75rem;
  }

  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
