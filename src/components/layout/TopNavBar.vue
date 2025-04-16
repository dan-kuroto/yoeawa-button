<script setup lang="ts">
import { ref, watch } from "vue";
import { currentLanguage, i18nMessages, switchLanguage } from "@/i18n";
import {
  concurrentPlayEnabled,
  emitAudioEvent,
  loopPlayEnabled,
  toggleConcurrentPlay,
  toggleLoopPlay,
} from "@/config/audioControl";
import type { Language } from "@/types";

const showLanguageMenu = ref(false);
const showSettingsMenu = ref(false);

const languages: Array<{ code: Language; name: string }> = [
  { code: "zh", name: "中文" },
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
];

const handleLanguageSwitch = (lang: Language) => {
  switchLanguage(lang);
  closeLanguageMenu();
};

const openLanguageMenu = () => {
  showLanguageMenu.value = true;
};
const closeLanguageMenu = () => {
  showLanguageMenu.value = false;
};

const openSettingsMenu = () => {
  showSettingsMenu.value = true;
};
const closeSettingsMenu = () => {
  showSettingsMenu.value = false;
};

watch(concurrentPlayEnabled, (newVal) => {
  if (!newVal) {
    // 如果关闭了并发播放，停止所有音频
    emitAudioEvent("stop-all");
  }
});
</script>

<template>
  <nav class="top-nav">
    <div class="nav-content">
      <div class="nav-title">🫧 {{ i18nMessages[currentLanguage].title }}</div>
      <div class="nav-btns">
        <a
          href="https://github.com/dan-kuroto/yoeawa-button"
          target="_blank"
          class="icon-link"
          :title="i18nMessages[currentLanguage].viewOnGithub"
        >
          <img src="@/assets/images/github.svg" alt="GitHub" class="icon" />
        </a>

        <div
          class="language-dropdown"
          @mouseleave="closeLanguageMenu"
          @mouseenter="openLanguageMenu"
        >
          <div
            class="icon-link"
            :title="i18nMessages[currentLanguage].languageSwitcher"
            @click="openLanguageMenu"
          >
            <img
              src="@/assets/images/language.svg"
              alt="Language"
              class="icon"
            />
          </div>

          <div class="language-menu" :class="{ active: showLanguageMenu }">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="handleLanguageSwitch(lang.code)"
              :class="{ active: currentLanguage === lang.code }"
              class="language-option"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>

        <div
          class="settings-dropdown"
          @mouseleave="closeSettingsMenu"
          @mouseenter="openSettingsMenu"
        >
          <div class="icon-link" title="设置" @click="openSettingsMenu">
            <img
              src="@/assets/images/settings-outline.svg"
              alt="Settings"
              class="icon"
            />
          </div>

          <div class="settings-menu" :class="{ active: showSettingsMenu }">
            <label class="settings-option">
              <input
                type="checkbox"
                :checked="loopPlayEnabled"
                @change="toggleLoopPlay"
              />
              <span>{{ i18nMessages[currentLanguage].loopPlayToggle }}</span>
            </label>
            <label class="settings-option">
              <input
                type="checkbox"
                :checked="concurrentPlayEnabled"
                @change="toggleConcurrentPlay"
              />
              <span>{{
                i18nMessages[currentLanguage].concurrentPlayToggle
              }}</span>
            </label>
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
  padding: 15px 10px;
}

.nav-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-btns {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.icon-link:hover {
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
}

.icon {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1); /* 将图标变为白色 */
}

.language-dropdown,
.settings-dropdown {
  position: relative;
}

.language-menu,
.settings-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: auto;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 200;
}

.language-menu.active,
.settings-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  background: none;
  border: none;
  color: #333;
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.language-option:hover {
  background-color: #f0f0f0;
}

.language-option.active {
  background-color: #ffa7d5;
  color: white;
  font-weight: bold;
}

.settings-option {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.settings-option:hover {
  background-color: #f0f0f0;
}

.settings-option input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #ffa7d5;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.settings-option input[type="checkbox"]:checked {
  background-color: #ffa7d5;
}

.settings-option input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  left: 3px;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.settings-option input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 167, 213, 0.3);
}

.settings-option span {
  white-space: nowrap;
}

.language-menu::before,
.settings-menu::before {
  content: "";
  position: absolute;
  top: -6px;
  right: 14px;
  width: 12px;
  height: 12px;
  background-color: white;
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 10px;
  }

  .nav-btns {
    width: auto;
    justify-content: center;
    gap: 10px;
  }

  .language-menu,
  .settings-menu {
    right: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
  }

  .language-menu.active,
  .settings-menu.active {
    transform: translateX(-50%) translateY(0);
  }

  .language-menu::before,
  .settings-menu::before {
    right: auto;
    left: 50%;
    margin-left: -6px;
  }
}
</style>
