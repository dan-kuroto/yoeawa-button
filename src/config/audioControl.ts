import { ref } from "vue";

// 循环播放音频的状态，默认为关闭
export const loopPlayEnabled = ref<boolean>(false);

// 切换循环播放状态的函数
export function toggleLoopPlay() {
  loopPlayEnabled.value = !loopPlayEnabled.value;
}