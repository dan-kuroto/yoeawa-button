<script setup lang="ts">
import { buttonGroups } from "@/config/buttons";
import TopNavBar from "@/components/layout/TopNavBar.vue";
import AboutCard from "@/components/layout/AboutCard.vue";
import ButtonGroup from "@/components/common/ButtonGroup.vue";
</script>

<template>
  <div class="app">
    <TopNavBar />
    <main class="main-content">
      <AboutCard />
      <ButtonGroup
        v-for="group in buttonGroups"
        :key="group.id"
        :group="group"
      />
    </main>
    <footer class="footer">
      <p>© 2025 夜永awa按钮站</p>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-color: #ffa7d5;
  --primary-light: #ffcce5;
  --primary-dark: #ff8ac0;
  --text-color: #333;
  --background-color: #f9f3f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 30px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    padding: 10px;
  }
}
</style>
