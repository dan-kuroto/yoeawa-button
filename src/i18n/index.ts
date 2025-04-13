import { ref } from "vue";
import type { Language } from "@/types";

// 默认语言为中文
export const currentLanguage = ref<Language>("zh");

// 语言文本内容
export const i18nMessages = {
  zh: {
    title: "夜永awa按钮",
    about: "关于",
    projectIntro: "这是夜永awa的音声按钮站",
    disclaimer: "音频版权归夜永awa所有，仅供粉丝交流使用",
    viewOnGithub: "在GitHub上查看",
    languageSwitcher: "切换语言",
  },
  en: {
    title: "Yoeawa Button",
    about: "About",
    projectIntro: "This is a voice button website for Yoeawa",
    disclaimer: "Audio copyright belongs to Yoeawa, for fans only",
    viewOnGithub: "View on GitHub",
    languageSwitcher: "Switch Language",
  },
  ja: {
    title: "夜永awaボタン",
    about: "概要",
    projectIntro: "これは夜永awaの音声ボタンサイトです",
    disclaimer: "音声の著作権は夜永awaに帰属し、ファンのみ使用可能です",
    viewOnGithub: "GitHubで見る",
    languageSwitcher: "言語切替",
  },
};

// 切换语言的函数
export function switchLanguage(lang: Language) {
  currentLanguage.value = lang;
}

// 获取当前语言的文本
export function getText(key: keyof typeof i18nMessages.zh) {
  return i18nMessages[currentLanguage.value][key];
}
