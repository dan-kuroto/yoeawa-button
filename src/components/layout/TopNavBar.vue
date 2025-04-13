<script setup lang="ts">
import { currentLanguage, i18nMessages, switchLanguage } from "@/i18n";
import type { Language } from "@/types";

const languages: Array<{ code: Language; name: string }> = [
  { code: "zh", name: "中文" },
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
];

const handleLanguageSwitch = (lang: Language) => {
  switchLanguage(lang);
};
</script>

<template>
  <nav class="top-nav">
    <div class="nav-content">
      <div class="nav-title">
        {{ i18nMessages[currentLanguage].title }}
      </div>
      <div class="nav-links">
        <a
          href="https://github.com/your-username/yoeawa-button"
          target="_blank"
          class="github-link"
        >
          {{ i18nMessages[currentLanguage].viewOnGithub }}
        </a>
        <div class="language-switcher">
          <span>{{ i18nMessages[currentLanguage].languageSwitcher }}:</span>
          <div class="language-buttons">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="handleLanguageSwitch(lang.code as Language)"
              :class="{ active: currentLanguage === lang.code }"
              class="lang-button"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.top-nav {
  background-color: #ffa7d5;
  color: white;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.nav-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.github-link {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

.github-link:hover {
  text-decoration: underline;
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-buttons {
  display: flex;
  gap: 5px;
}

.lang-button {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-button.active {
  background-color: white;
  color: #ffa7d5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 10px;
  }

  .nav-links {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }

  .language-switcher {
    width: 100%;
    justify-content: center;
  }
}
</style>
