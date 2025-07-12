import { ref, watch } from 'vue';
import { defineStore } from "pinia";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
};

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]') as Task[]);

  const addTask = (title: string) => {
    tasks.value.push({
      id: Date.now(),
      title,
      completed: false,
    });
  };
  
  const removeTask = (id: number) => {
    // 1 篩選
    tasks.value = tasks.value.filter(item => item.id !== id);
    // 2 依index移除 需先查詢id
    // const index = tasks.value.findIndex(item => item.id !== id);
    // if (index !== -1) {
    //   tasks.value.splice(index, 1);
    // };
    // 3 
    // const index = tasks.value.findIndex(item => item.id !== id);
    // if (index !== -1) {
    //   tasks.value = [
    //     ...tasks.value.slice(0, index),
    //     ...tasks.value.slice(index + 1)
    //   ];
    // };
  };

  const toggleTask = (id: number) => {
    const task = tasks.value.find(item => item.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  // 監聽tasks
  watch(tasks, (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }, { deep: true });

  return {
    tasks,
    addTask,
    removeTask,
    toggleTask,
  }
});