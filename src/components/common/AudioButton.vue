<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";
import type { AudioButton as AudioButtonType } from "@/types";
import { currentLanguage } from "@/i18n";
import {
  loopPlayEnabled,
  concurrentPlayEnabled,
  onAudioEvent,
  emitAudioEvent,
} from "@/config/audioControl";

const props = defineProps<{
  button: AudioButtonType;
}>();

let audio: HTMLAudioElement | null = null;
const isPlaying = ref(false);
const progress = ref(0); // 音频播放进度 (0-100)
let progressRaf = 0;
let unsubscribeStopEvent: (() => void) | null = null;

// 用于存储音频事件的处理函数，以便于后续取消注册
const audioEventHandlers = {
  ended: null as null | EventListener,
};

// 更新进度条
const updateProgress = () => {
  if (audio) {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    progressRaf = requestAnimationFrame(updateProgress);
  }
};

// 停止播放并重置
const stopAndReset = () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    isPlaying.value = false;
    progress.value = 0;
    cancelAnimationFrame(progressRaf);
  }
};

// 初始化音频和事件监听器
const initAudio = () => {
  audio = new Audio(props.button.audioUrl);

  // 创建并保存 ended 事件处理函数
  audioEventHandlers.ended = () => {
    progress.value = 0;
    if (loopPlayEnabled.value) {
      // 如果开启了循环播放，则重新播放
      audio?.play();
    } else {
      // 否则停止播放
      isPlaying.value = false;
      cancelAnimationFrame(progressRaf);
    }
  };

  // 注册事件监听器
  audio.addEventListener("ended", audioEventHandlers.ended);

  // 注册 stop-all-except 事件监听器
  unsubscribeStopEvent = onAudioEvent("stop-all-except", () => {
    // 如果当前正在播放，就停止
    if (isPlaying.value) {
      stopAndReset();
    }
  });
};

// 清理音频资源和事件监听器
const cleanUpAudio = () => {
  if (!audio) {
    return;
  }
  // 取消注册音频事件监听器
  if (audioEventHandlers.ended) {
    audio.removeEventListener("ended", audioEventHandlers.ended);
  }

  // 停止并释放音频资源
  audio.pause();
  audio = null;
};

// 从头开始播放
const replay = () => {
  // 如果同时播放被禁用，则通知其他按钮停止播放
  if (!concurrentPlayEnabled.value) {
    emitAudioEvent("stop-all-except");
  }

  if (!audio) {
    initAudio();
  }
  if (audio) {
    // 无论当前是否在播放，都先停止并重置
    audio.pause();
    audio.currentTime = 0;
    progress.value = 0;

    // 然后开始播放
    audio.loop = loopPlayEnabled.value;
    audio.play();
    isPlaying.value = true;
    progressRaf = requestAnimationFrame(updateProgress);
  }
};

// 监听循环播放状态的变化
watch(loopPlayEnabled, (newValue) => {
  if (audio) {
    audio.loop = newValue;
  }
});

onUnmounted(() => {
  // 取消动画帧
  cancelAnimationFrame(progressRaf);

  // 清理音频和事件
  cleanUpAudio();

  // 取消事件总线订阅
  if (unsubscribeStopEvent) {
    unsubscribeStopEvent();
    unsubscribeStopEvent = null;
  }
});
</script>

<template>
  <button
    @click="replay"
    class="audio-button"
    :class="{ playing: isPlaying }"
    :style="{ '--progress': `${progress}%` }"
  >
    {{ button.text[currentLanguage] }}
    <div
      class="progress-overlay"
      :style="{ transform: `scaleX(${progress / 100})` }"
    ></div>
  </button>
</template>

<style scoped>
.audio-button {
  background-color: #ffa7d5;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 7px 18px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.audio-button:hover {
  background-color: #ff8ac0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.audio-button:active {
  transform: translateY(1px);
}

.audio-button.playing {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 167, 213, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 167, 213, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 167, 213, 0);
  }
}

.progress-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: -1;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.1s linear;
}
</style>
