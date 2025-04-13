import { ref } from "vue";
import type { Language } from "@/types";

// 默认语言为中文
export const currentLanguage = ref<Language>("zh");

// 语言文本内容
export const i18nMessages = {
  zh: {
    title: "夜永awa按钮",
    projectIntro: "这是夜永awa的音声按钮站",
    disclaimer: "声明：本项目仅为粉丝作品，和夜永awa本人没有关联",
    viewOnGithub: "在GitHub上查看",
    languageSwitcher: "切换语言",
  },
  en: {
    title: "Yoeawa Button",
    projectIntro: "This is a voice button website for Yoeawa",
    disclaimer: "Disclaimer: This project is a fan work and has no affiliation with Yoeawa",
    viewOnGithub: "View on GitHub",
    languageSwitcher: "Switch Language",
  },
  ja: {
    title: "夜永awaボタン",
    projectIntro: "これは夜永awaの音声ボタンサイトです",
    disclaimer: "声明：このプロジェクトはファン作品であり、夜永awa本人とは関係ありません",
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
