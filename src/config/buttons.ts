import type { ButtonGroup } from "@/types";

// 按钮分组，每个分组包含多个按钮
export const buttonGroups: ButtonGroup[] = [
  {
    id: "kimeserifu",
    title: {
      zh: "招牌台词",
      en: "Catchphrases",
      ja: "決めセリフ",
    },
    buttons: [
      {
        id: "op",
        text: {
          zh: "开场白",
          en: "Opening Line",
          ja: "オープニングセリフ",
        },
        audioUrl: new URL("@/assets/audio/开场白.mp3", import.meta.url).href,
      },
      {
        id: "ed",
        text: {
          zh: "结束语",
          en: "Closing Line",
          ja: "エンディングセリフ",
        },
        audioUrl: new URL("@/assets/audio/结束语.mp3", import.meta.url).href,
      },
    ],
  },
  {
    id: "greetings",
    title: {
      zh: "问候语",
      en: "Greetings",
      ja: "挨拶",
    },
    buttons: [
      {
        id: "good afternoon",
        text: {
          zh: "凡人们~中午好",
          en: "Good afternoon, mortals",
          ja: "こんにちは、凡人ども",
        },
        audioUrl: new URL("@/assets/audio/凡人们中午好.mp3", import.meta.url)
          .href,
      },
      {
        id: "see you tonight",
        text: {
          zh: "晚上见晚上见",
          en: "See you tonight",
          ja: "夜にまた",
        },
        audioUrl: new URL("@/assets/audio/晚上见晚上见.mp3", import.meta.url)
          .href,
      },
      {
        id: "bye bye foam",
        text: {
          zh: "拜拜foam",
          en: "Bye bye~ foam",
          ja: "バイバイfoam",
        },
        audioUrl: new URL("@/assets/audio/拜拜foam.mp3", import.meta.url).href,
      },
      {
        id: "good night meow",
        text: {
          zh: "晚安喵",
          en: "Good night meow",
          ja: "おやすみニャー",
        },
        audioUrl: new URL("@/assets/audio/晚安喵.mp3", import.meta.url).href,
      },
      {
        id: "bye bye meow",
        text: {
          zh: "拜拜喵",
          en: "Bye bye meow",
          ja: "バイバイニャー",
        },
        audioUrl: new URL("@/assets/audio/拜拜喵.mp3", import.meta.url).href,
      },
      {
        id: "goodbye meow",
        text: {
          zh: "再见喵",
          en: "Goodbye meow",
          ja: "またニャン",
        },
        audioUrl: new URL("@/assets/audio/再见喵.mp3", import.meta.url).href,
      },
    ],
  },
  {
    id: "strange talk",
    title: {
      zh: "怪话",
      en: "Strange Talk",
      ja: "変な言葉",
    },
    buttons: [
      {
        id: "mother",
        text: {
          zh: "妈妈？谁是你妈妈呀",
          en: "Mom? Who's your mom?",
          ja: "ママ？誰が君のママなのよ",
        },
        audioUrl: new URL("@/assets/audio/谁是你妈妈呀.mp3", import.meta.url)
          .href,
      },
      {
        id: "20year",
        text: {
          zh: "吾辈才20岁呢",
          en: "I'm only 20 years old",
          ja: "吾輩はまだ二十歳ですよ",
        },
        audioUrl: new URL("@/assets/audio/吾辈才20岁呢.mp3", import.meta.url)
          .href,
      },
      {
        id: "marry",
        text: {
          zh: "跟你结婚？什么呀！",
          en: "Marry you? What are you talking about?",
          ja: "君と結婚？何を言ってるの？",
        },
        audioUrl: new URL(
          "@/assets/audio/跟你结婚？什么呀.mp3",
          import.meta.url
        ).href,
      },
      {
        id: "can't kiss yet",
        text: {
          zh: "还不是可以么么的关系",
          en: "can't kiss yet",
          ja: "まだちゅっしちゃだめ～",
        },
        audioUrl: new URL(
          "@/assets/audio/还不是可以么么的关系.mp3",
          import.meta.url
        ).href,
      },
      {
        id: "sorry",
        text: {
          zh: "I'm so sorry",
          en: "I'm so sorry",
          ja: "I'm so sorry",
        },
        audioUrl: new URL("@/assets/audio/Im_so_sorry.mp3", import.meta.url)
          .href,
      },
      {
        id: "So strange",
        text: {
          zh: "好怪",
          en: "So strange",
          ja: "変だね",
        },
        audioUrl: new URL("@/assets/audio/好怪.mp3", import.meta.url).href,
      },
      {
        id: "So scary",
        text: {
          zh: "哈人",
          en: "So scary",
          ja: "怖い",
        },
        audioUrl: new URL("@/assets/audio/哈人.mp3", import.meta.url).href,
      },
      {
        id: "scared",
        text: {
          zh: "吓一跳！哎呀（委屈）",
          en: "Scared me! Oh no (wronged)",
          ja: "びっくりした！ああ（不満）",
        },
        audioUrl: new URL("@/assets/audio/吓一跳.mp3", import.meta.url).href,
      },
      {
        id: "kugimiya",
        text: {
          zh: "八嘎hentai无路赛",
          en: "baka hentai urusai",
          ja: "バカ変態うるさい",
        },
        audioUrl: new URL(
          "@/assets/audio/八嘎hentai无路赛.mp3",
          import.meta.url
        ).href,
      },
      {
        id: "kugimiya_cn",
        text: {
          zh: "钉宫三连（中文版）",
          en: "Kugimiya 3 combo (Chinese version)",
          ja: "バカ変態うるさい（中国語版）",
        },
        audioUrl: new URL("@/assets/audio/钉宫三连中文版.mp3", import.meta.url)
          .href,
      },
      {
        id: "come",
        text: {
          zh: "你给我过来！",
          en: "Come here!",
          ja: "こっち来て！",
        },
        audioUrl: new URL("@/assets/audio/你给我过来.mp3", import.meta.url)
          .href,
      },
      {
        id: "kneel1",
        text: {
          zh: "foam跪下！",
          en: "Kneel, foam!",
          ja: "ひざまずけ、foam！",
        },
        audioUrl: new URL("@/assets/audio/foam跪下.mp3", import.meta.url).href,
      },
      {
        id: "kneel2",
        text: {
          zh: "凡人跪下！",
          en: "Kneel, mortals!",
          ja: "ひざまずけ、凡人ども！",
        },
        audioUrl: new URL("@/assets/audio/凡人跪下.mp3", import.meta.url).href,
      },
      {
        id: "kneel3",
        text: {
          zh: "人类跪下！",
          en: "Kneel, humans!",
          ja: "ひざまずけ、人間ども！",
        },
        audioUrl: new URL("@/assets/audio/人类跪下.mp3", import.meta.url).href,
      },
      {
        id: "kneel4",
        text: {
          zh: "碳基生物跪下！",
          en: "Kneel, carbon-based lifeforms!",
          ja: "ひざまずけ、炭素生命！",
        },
        audioUrl: new URL("@/assets/audio/碳基生物跪下.mp3", import.meta.url)
          .href,
      },
      {
        id: "hentai",
        text: {
          zh: "你这个变态",
          en: "You pervert",
          ja: "この変態",
        },
        audioUrl: new URL("@/assets/audio/你这个变态.mp3", import.meta.url)
          .href,
      },
      {
        id: "hentai2",
        text: {
          zh: "你这个变态2",
          en: "You pervert 2",
          ja: "この変態2",
        },
        audioUrl: new URL("@/assets/audio/你这个变态2.mp3", import.meta.url)
          .href,
      },
    ],
  },
  {
    id: "Cute Sounds",
    title: {
      zh: "可爱小动静",
      en: "Cute Sounds",
      ja: "かわいい音",
    },
    buttons: [
      {
        id: "1",
        text: {
          zh: "怪叫",
          en: "Strange Scream",
          ja: "奇妙な叫び声",
        },
        audioUrl: new URL("@/assets/audio/怪叫.mp3", import.meta.url).href,
      },
      {
        id: "2",
        text: {
          zh: "嘿嘿",
          en: "laugh",
          ja: "へへ",
        },
        audioUrl: new URL("@/assets/audio/嘿嘿.mp3", import.meta.url).href,
      },
      {
        id: "3",
        text: {
          zh: "喵喵喵",
          en: "Meow meow meow",
          ja: "ニャーニャーニャー",
        },
        audioUrl: new URL("@/assets/audio/喵喵喵.mp3", import.meta.url).href,
      },
      {
        id: "4",
        text: {
          zh: "喵喵喵喵喵喵…",
          en: "Meow meow meow meow meow...",
          ja: "ニャーニャーニャーニャーニャー…",
        },
        audioUrl: new URL("@/assets/audio/喵喵喵喵喵喵.mp3", import.meta.url)
          .href,
      },
      {
        id: "5",
        text: {
          zh: "喵喵喵喵喵喵2",
          en: "Meow meow meow meow meow 2",
          ja: "ニャーニャーニャーニャーニャー2",
        },
        audioUrl: new URL("@/assets/audio/喵喵喵喵喵喵2.mp3", import.meta.url)
          .href,
      },
      {
        id: "6",
        text: {
          zh: "喵喵喵喵喵喵3",
          en: "Meow meow meow meow meow 3",
          ja: "ニャーニャーニャーニャーニャー3",
        },
        audioUrl: new URL("@/assets/audio/喵喵喵喵喵喵3.mp3", import.meta.url)
          .href,
      },
      {
        id: "7",
        text: {
          zh: "喵喵喵喵喵喵4",
          en: "Meow meow meow meow meow 4",
          ja: "ニャーニャーニャーニャーニャー4",
        },
        audioUrl: new URL("@/assets/audio/喵喵喵喵喵喵4.mp3", import.meta.url)
          .href,
      },
      {
        id: "8",
        text: {
          zh: "喵喵喵喵喵喵5",
          en: "Meow meow meow meow meow 5",
          ja: "ニャーニャーニャーニャーニャー5",
        },
        audioUrl: new URL("@/assets/audio/喵喵喵喵喵喵5.mp3", import.meta.url)
          .href,
      },
      {
        id: "9",
        text: {
          zh: "叹气",
          en: "Sigh",
          ja: "ため息",
        },
        audioUrl: new URL("@/assets/audio/叹气.mp3", import.meta.url).href,
      },
      {
        id: "10",
        text: {
          zh: "防空警报",
          en: "Air Raid Siren",
          ja: "防空警報",
        },
        audioUrl: new URL("@/assets/audio/防空警报.mp3", import.meta.url).href,
      },
      {
        id: "11",
        text: {
          zh: "蚊子叫",
          en: "Mosquito Sound",
          ja: "蚊の音",
        },
        audioUrl: new URL("@/assets/audio/蚊子叫.mp3", import.meta.url).href,
      },
      {
        id: "12",
        text: {
          zh: "惊叫",
          en: "Scream",
          ja: "恐怖な叫び声",
        },
        audioUrl: new URL("@/assets/audio/惊叫.mp3", import.meta.url).href,
      },
      {
        id: "13",
        text: {
          zh: "foam foam 酱酱 酱酱",
          en: "foam foam JangJang JangJang",
          ja: "foam foam ジャンジャン ジャンジャン",
        },
        audioUrl: new URL(
          "@/assets/audio/foamfoam酱酱酱酱.mp3",
          import.meta.url
        ).href,
      },
    ],
  },
  {
    id: "others",
    title: {
      zh: "杂",
      en: "Others",
      ja: "雑",
    },
    buttons: [
      {
        id: "1",
        text: {
          zh: "好好好~",
          en: "ok~",
          ja: "いいよ～",
        },
        audioUrl: new URL("@/assets/audio/好好好.mp3", import.meta.url).href,
      },
      {
        id: "2",
        text: {
          zh: "真的是真的是",
          en: "Geez...",
          ja: "もう…",
        },
        audioUrl: new URL("@/assets/audio/真的是真的是.mp3", import.meta.url)
          .href,
      },
    ],
  },
];
