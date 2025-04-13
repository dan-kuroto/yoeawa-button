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
      {
        id: "test1",
        text: { zh: "测试1", en: "Test 1", ja: "テスト1" },
        audioUrl: "/audio/test1.mp3",
      }, // 实际音频文件路径待添加
      {
        id: "test2",
        text: { zh: "测试2", en: "Test 2", ja: "テスト2" },
        audioUrl: "/audio/test2.mp3",
      },
      {
        id: "test3",
        text: { zh: "测试3", en: "Test 3", ja: "テスト3" },
        audioUrl: "/audio/test3.mp3",
      }, // 实际音频文件路径待添加
      {
        id: "test4",
        text: { zh: "测试4", en: "Test 4", ja: "テスト4" },
        audioUrl: "/audio/test4.mp3",
      }, // 实际音频文件路径待添加
      {
        id: "test5",
        text: { zh: "测试5", en: "Test 5", ja: "テスト5" },
        audioUrl: "/audio/test5.mp3",
      }, // 实际音频文件路径待添加
      {
        id: "test6",
        text: { zh: "测试6", en: "Test 6", ja: "テスト6" },
        audioUrl: "/audio/test6.mp3",
      },
      {
        id: "test7",
        text: { zh: "测试7测试7测试7测试7测试7测试7测试7测试7测试7", en: "Test 7", ja: "テスト7" },
        audioUrl: "/audio/test7.mp3",
      }, // 实际音频文件路径待添加
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
