<script setup lang="ts">
  import { ref, computed } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  
  const currentPage = ref('home');
  const currentPageComponent = computed(() => {
    return currentPage.value === 'home'
      ? { is: HelloWorld, props: { msg: 'Hello' } }
      : { is: null, props: { msg: '' } };
  })
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
  <button @click="currentPage='about'">關於</button>
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
