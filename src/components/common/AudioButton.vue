<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import type { AudioButton as AudioButtonType } from "@/types";
import { currentLanguage } from "@/i18n";

const props = defineProps<{
  button: AudioButtonType;
}>();

let audio: HTMLAudioElement | null = null;
const isPlaying = ref(false);
const progress = ref(0); // 音频播放进度 (0-100)
let progressRaf = 0;

// 更新进度条
const updateProgress = () => {
  if (audio) {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    progressRaf = requestAnimationFrame(updateProgress);
  }
};

// 切换播放/暂停
const toggleAudio = () => {
  if (!audio) {
    audio = new Audio(props.button.audioUrl);

    audio.addEventListener("ended", () => {
      isPlaying.value = false;
      progress.value = 0;
      cancelAnimationFrame(progressRaf);
    });

    audio.addEventListener("pause", () => {
      isPlaying.value = false;
      cancelAnimationFrame(progressRaf);
    });
  }

  if (isPlaying.value) {
    // 如果已经在播放，则停止当前播放
    audio.pause();
    isPlaying.value = false;
    cancelAnimationFrame(progressRaf);
  } else {
    // 否则开始播放
    audio.play();
    isPlaying.value = true;
    cancelAnimationFrame(progressRaf);
    progressRaf = requestAnimationFrame(updateProgress);
  }
};

onUnmounted(() => {
  cancelAnimationFrame(progressRaf);
  if (audio) {
    audio.pause();
    audio = null;
  }
});
</script>

<template>
  <button
    @click="toggleAudio"
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
