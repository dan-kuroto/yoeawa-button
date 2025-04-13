<script setup lang="ts">
import { currentLanguage, i18nMessages } from "@/i18n";
</script>

<template>
  <div class="about-card">
    <div class="avatar-section">
      <div class="avatar-container">
        <!-- 这里放主播的头像，先留空 -->
        <div class="avatar-placeholder">夜永awa</div>
      </div>
    </div>
    <div class="info-section">
      <h2>{{ i18nMessages[currentLanguage].about }}</h2>
      <p>{{ i18nMessages[currentLanguage].projectIntro }}</p>
      <p class="disclaimer">{{ i18nMessages[currentLanguage].disclaimer }}</p>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;
  display: flex;
  gap: 30px;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa7d5;
  color: white;
  font-weight: bold;
}

.avatar-placeholder {
  font-size: 1.2rem;
  text-align: center;
}

.info-section {
  flex: 1;
}

.info-section h2 {
  color: #ffa7d5;
  margin-top: 0;
  border-bottom: 2px solid #ffa7d5;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.disclaimer {
  font-size: 0.9rem;
  color: #777;
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px dashed #ddd;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
