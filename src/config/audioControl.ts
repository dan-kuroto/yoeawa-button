import { ref } from "vue";

// 循环播放开关状态
export const loopPlayEnabled = ref(false);

// 同时播放开关状态
export const concurrentPlayEnabled = ref(true);

// 切换循环播放状态
export function toggleLoopPlay() {
  loopPlayEnabled.value = !loopPlayEnabled.value;
}

// 切换同时播放状态
export function toggleConcurrentPlay() {
  concurrentPlayEnabled.value = !concurrentPlayEnabled.value;
}

// 简单的事件总线，用于音频按钮之间的通信
type EventCallback = () => void;
const audioBus: Map<string, Set<EventCallback>> = new Map();

// 确保事件集合存在
function ensureEventExists(event: string): Set<EventCallback> {
  if (!audioBus.has(event)) {
    audioBus.set(event, new Set());
  }
  return audioBus.get(event)!;
}

// 注册事件监听器
export function onAudioEvent(
  event: string,
  callback: EventCallback
): () => void {
  const listeners = ensureEventExists(event);
  listeners.add(callback);

  // 返回用于取消注册的函数
  return () => {
    listeners.delete(callback);
  };
}

// 触发事件
export function emitAudioEvent(event: string): void {
  const listeners = audioBus.get(event);
  if (listeners) {
    listeners.forEach((callback) => callback());
  }
}
