<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="title"
      placeholder="輸入事項"
      id="task-title"
      name="task-title"
    />
    <button type="submit">新增</button>
  </form>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useTaskStore } from "@/stores/taskStore";

  const title = ref('');
  const taskStore = useTaskStore();

  const handleSubmit = () => {
    if (title.value.trim()) {
      taskStore.addTask(title.value);
      title.value = '';
    };
  };
</script>

<style scoped>
  input {
    margin: 10px;
    height: 3rem;
    width: auto;
    font-size: 1.2rem;
  }
</style>