<script setup lang="ts">
import { ref } from "vue";
import type { AudioButton as AudioButtonType } from "@/types";
import { currentLanguage } from "@/i18n";

const props = defineProps<{
  button: AudioButtonType;
}>();

const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);

const playAudio = () => {
  if (!audio.value) {
    audio.value = new Audio(props.button.audioUrl);

    audio.value.addEventListener("ended", () => {
      isPlaying.value = false;
    });

    audio.value.addEventListener("pause", () => {
      isPlaying.value = false;
    });
  }

  // 如果已经在播放，则停止当前播放并重新开始
  if (isPlaying.value) {
    audio.value.pause();
    audio.value.currentTime = 0;
  }

  audio.value.play();
  isPlaying.value = true;
};
</script>

<template>
  <button
    @click="playAudio"
    class="audio-button"
    :class="{ playing: isPlaying }"
  >
    {{ button.text[currentLanguage] }}
  </button>
</template>

<style scoped>
.audio-button {
  background-color: #ffa7d5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 8px;
  min-width: 120px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .audio-button {
    min-width: 100px;
    padding: 10px 15px;
  }
}
</style>
