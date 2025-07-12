<template>
  <main >
    <h1>任務管理器</h1>
    <TaskForm />
    <TaskList />
  </main>
</template>

<script setup lang="ts">
  import TaskForm from '@/components/taskList/TaskForm.vue'
  import TaskList from '@/components/taskList/TaskList.vue'
</script>