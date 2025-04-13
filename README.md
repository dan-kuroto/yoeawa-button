# 夜永awa按钮站 / Yoeawa Button / 夜永awaボタン

<div align="center">
  <img src="src/assets/images/icon.jpg" width="200px" alt="夜永awa">
</div>

这是一个为虚拟主播"夜永awa"（Yoeawa）制作的音声按钮网站。用户可以点击按钮播放主播的语音片段，支持中文、英文和日文三种语言界面。

- **预览**：[在线访问](https://dan-kuroto.github.io/yoeawa-button)
- **技术栈**：`Vue3` + `TypeScript` + `Vite` + `pnpm`

| 声明：本项目仅为粉丝作品，和夜永awa本人没有关联。

## 添加新的语音按钮

要添加新的语音按钮，只需修改 `src/config/buttons.ts` 文件中的配置：

1. 将音频文件放入 `public/audio/` 目录
2. 在配置文件的适当分组中添加新按钮：

```typescript
{
  id: "button-id",
  text: {
    zh: "中文按钮文本",
    en: "English Button Text",
    ja: "日本語ボタンテキスト"
  },
  audioUrl: "/audio/your-audio-file.mp3"
}
```

**注意**：分组id不可重复，同分组下按钮id不可重复。
