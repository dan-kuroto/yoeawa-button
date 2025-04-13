<script setup lang="ts">
import type { ButtonGroup as ButtonGroupType } from "@/types";
import { currentLanguage } from "@/i18n";
import AudioButton from "./AudioButton.vue";

defineProps<{
  group: ButtonGroupType;
}>();
</script>

<template>
  <div class="button-group">
    <h3 class="group-title">{{ group.title[currentLanguage] }}</h3>
    <div class="buttons-container">
      <AudioButton
        v-for="button in group.buttons"
        :key="button.id"
        :button="button"
      />
    </div>
  </div>
</template>

<style scoped>
.button-group {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 1200px;
}

.group-title {
  color: #ffa7d5;
  border-bottom: 2px solid #ffa7d5;
  padding-bottom: 10px;
  margin-top: 0;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 10px;
}
</style>
