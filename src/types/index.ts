// 支持的语言类型
export type Language = "zh" | "en" | "ja";

// 音频按钮的类型定义
export interface AudioButton {
  id: string; // 按钮唯一ID
  text: {
    [key in Language]: string;
  };
  audioUrl: string; // 音频文件路径
}

// 按钮分组的类型定义
export interface ButtonGroup {
  id: string; // 分组唯一ID
  title: {
    [key in Language]: string;
  };
  buttons: AudioButton[]; // 该分组下的按钮列表
}
