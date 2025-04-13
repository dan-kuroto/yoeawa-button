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

<style scoped>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer {
  text-align: center;
  padding: 15px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 10px;
  }
}
</style>
