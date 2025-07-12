<template>
  <ul>
    <li v-for="task in taskStore.tasks" :key="task.id">
      <input
        type="checkbox"
        v-model="task.completed"
        :id="`task-checkbox-${task.id}`"
        :name="`task-checkbox-${task.id}`"
      />
      <!-- <input
        type="checkbox"
        :checked="task.completed"
        @change="taskStore.toggleTask(task.id)"
      /> -->
      <label :for="`task-checkbox-${task.id}`">
        {{ task.title }}
      </label>
      <button @click="taskStore.removeTask(task.id)">刪除</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { useTaskStore } from '@/store/taskStore';

  const taskStore = useTaskStore();
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
  label {
    flex-grow: 1;
    font-size: 2rem;
  }
  button {
    margin: 10px;
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ff7875;
  }
</style>