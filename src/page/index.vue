<script setup lang="ts">
  import { ref, computed } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import TaskList from '@/page/taskList/index.vue';
  
  const pageMap = {
    home: { is: HelloWorld, props: { msg: 'Hello' } },
    taskList: { is: TaskList, props: { msg: '' } },
  }

  type PageKey = keyof typeof pageMap;

  const currentPage = ref<PageKey>('home');
  const currentPageComponent = computed(() => pageMap[currentPage.value]);

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="currentPage='home'">首頁</button>
  <button @click="currentPage='taskList'">任務管理</button>
  <component
    :is="currentPageComponent.is"
    v-bind="currentPageComponent.props"
  />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
