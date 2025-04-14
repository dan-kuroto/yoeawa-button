<script setup lang="ts">
import { currentLanguage, i18nMessages } from "@/i18n";
</script>

<template>
  <div class="about-card">
    <div class="avatar-section">
      <a
        class="avatar-container"
        href="https://space.bilibili.com/3546754395933597"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="avatar-image"
          src="@/assets/images/icon.jpg"
          alt="夜永awa"
          :title="i18nMessages[currentLanguage].name"
        />
      </a>
    </div>
    <div class="info-section">
      <p>{{ i18nMessages[currentLanguage].welcome }}</p>
      <p class="tips">{{ i18nMessages[currentLanguage].tips }}</p>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 1200px;
  display: flex;
  gap: 30px;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar-container {
  width: 120px;
  height: 120px;
  border: 3px solid #ffa7d5;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa7d5;
  color: white;
  font-weight: bold;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-wrap;
}

.info-section h2 {
  color: #ffa7d5;
  margin-top: 0;
  border-bottom: 2px solid #ffa7d5;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.tips {
  font-size: 0.9rem;
  color: #777;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed #ddd;
}

@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
