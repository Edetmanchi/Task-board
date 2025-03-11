<template>
        <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
            <i :class='{active: task.isFav}' @click="taskStore.favTask(task.id)" class="material-icons">favorite</i>
        </div>
        </div>

  </template>
  
  <script setup>
    const {task} = defineProps(['task'])
    import { useTaskStore } from '~/store/TaskStore'
  
    const taskStore = useTaskStore()
   
  </script>