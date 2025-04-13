import { ref, watch } from "vue";
import type { Language } from "@/types";

// 默认语言为中文
export const currentLanguage = ref<Language>("zh");

// 语言文本内容
export const i18nMessages = {
  zh: {
    name: "夜永awa",
    title: "夜永awa按钮",
    welcome: "酱酱！欢迎来到夜永awa音声按钮站~",
    tips: `你好，这里是开发者（B站 @幻夜つかさ）！个人精力有限，欢迎帮忙收集音声。
新增方式：上Github提交Pull Request或Issue。
声明：本项目仅为粉丝作品，和夜永awa本人没有关联。`,
    viewOnGithub: "在GitHub上查看",
    languageSwitcher: "切换语言",
  },
  en: {
    name: "Yoeawa",
    title: "Yoeawa Button",
    welcome: "Jang Jang! Welcome to Yoeawa's voice button website~",
    tips: `Hello, this is the developer (Bilibili @幻夜つかさ)! Due to limited personal energy, help collecting voice clips is appreciated.
How to add: Submit a Pull Request or Issue on Github.
Disclaimer: This project is a fan work and has no affiliation with Yoeawa herself.`,
    viewOnGithub: "View on GitHub",
    languageSwitcher: "Switch Language",
  },
  ja: {
    name: "夜永awa",
    title: "夜永awaボタン",
    welcome: "ジャンジャン！夜永awaの音声ボタンサイトへようこそ～",
    tips: `こんにちは、開発者です（ビリビリ @幻夜つかさ）！個人の力には限りがあるので、音声の収集にご協力いただければ幸いです。
追加方法：GitHubでPull RequestまたはIssueを提出してください。
免責事項：このプロジェクトはファン作品であり、夜永awa本人とは一切関係ありません。`,
    viewOnGithub: "GitHubで見る",
    languageSwitcher: "言語切替",
  },
};

// 更新网页标题和HTML lang属性
function updateDocumentLang(lang: Language) {
  // 更新HTML lang属性
  document.documentElement.lang = {
    zh: "zh-CN",
    en: "en-US",
    ja: "ja-JP",
  }[lang];

  // 更新网页标题
  document.title = i18nMessages[lang].title;
}

// 切换语言的函数
export function switchLanguage(lang: Language) {
  currentLanguage.value = lang;
}

// 获取当前语言的文本
export function getText(key: keyof typeof i18nMessages.zh) {
  return i18nMessages[currentLanguage.value][key];
}

// 监听语言变化
watch(currentLanguage, (newLang) => {
  updateDocumentLang(newLang);
});
