import type { ButtonGroup } from "@/types";

// 按钮分组，每个分组包含多个按钮
export const buttonGroups: ButtonGroup[] = [
  {
    id: "greetings",
    title: {
      zh: "问候语",
      en: "Greetings",
      ja: "挨拶",
    },
    buttons: [
      {
        id: "hello",
        text: {
          zh: "你好",
          en: "Hello",
          ja: "こんにちは",
        },
        audioUrl: "/audio/hello.mp3", // 实际音频文件路径待添加
      },
      {
        id: "goodbye",
        text: {
          zh: "再见",
          en: "Goodbye",
          ja: "さようなら",
        },
        audioUrl: "/audio/goodbye.mp3", // 实际音频文件路径待添加
      },
    ],
  },
  {
    id: "catchphrases",
    title: {
      zh: "经典语录",
      en: "Catchphrases",
      ja: "決め台詞",
    },
    buttons: [
      {
        id: "phrase1",
        text: {
          zh: "经典语录1",
          en: "Catchphrase 1",
          ja: "決め台詞 1",
        },
        audioUrl: "/audio/phrase1.mp3", // 实际音频文件路径待添加
      },
      {
        id: "phrase2",
        text: {
          zh: "经典语录2",
          en: "Catchphrase 2",
          ja: "決め台詞 2",
        },
        audioUrl: "/audio/phrase2.mp3", // 实际音频文件路径待添加
      },
    ],
  },
  {
    id: "reactions",
    title: {
      zh: "反应",
      en: "Reactions",
      ja: "リアクション",
    },
    buttons: [
      {
        id: "laugh",
        text: {
          zh: "笑声",
          en: "Laugh",
          ja: "笑い声",
        },
        audioUrl: "/audio/laugh.mp3", // 实际音频文件路径待添加
      },
      {
        id: "surprised",
        text: {
          zh: "惊讶",
          en: "Surprised",
          ja: "驚き",
        },
        audioUrl: "/audio/surprised.mp3", // 实际音频文件路径待添加
      },
    ],
  },
];
