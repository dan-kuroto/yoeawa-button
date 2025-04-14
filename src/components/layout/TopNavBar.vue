<script setup lang="ts">
import { ref, computed } from "vue";
import { currentLanguage, i18nMessages, switchLanguage } from "@/i18n";
import { loopPlayEnabled, toggleLoopPlay } from "@/config/audioControl";
import type { Language } from "@/types";
import repeatOutlineIcon from "@/assets/images/repeat-outline.svg";
import doubleArrowRightIcon from "@/assets/images/double-arrow-right-outline.svg";

const showLanguageMenu = ref(false);

const languages: Array<{ code: Language; name: string }> = [
  { code: "zh", name: "中文" },
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
];

// 根据循环状态计算显示的图标
const loopIcon = computed(() => {
  return loopPlayEnabled.value ? repeatOutlineIcon : doubleArrowRightIcon;
});

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

const handleLoopToggle = () => {
  toggleLoopPlay();
};
</script>

<template>
  <nav class="top-nav">
    <div class="nav-content">
      <div class="nav-title">
        {{ i18nMessages[currentLanguage].title }}
      </div>
      <div class="nav-btns">
        <div
          class="icon-link"
          :title="
            loopPlayEnabled
              ? i18nMessages[currentLanguage].loopPlayEnabled
              : i18nMessages[currentLanguage].loopPlayDisabled
          "
          @click="handleLoopToggle"
        >
          <img
            :src="loopIcon"
            :alt="i18nMessages[currentLanguage].loopPlayToggle"
            class="icon"
          />
        </div>

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

.language-dropdown {
  position: relative;
}

.language-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 110px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 200;
}

.language-menu.active {
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

.language-menu::before {
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

  .language-menu {
    right: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
  }

  .language-menu.active {
    transform: translateX(-50%) translateY(0);
  }

  .language-menu::before {
    right: auto;
    left: 50%;
    margin-left: -6px;
  }
}
</style>
