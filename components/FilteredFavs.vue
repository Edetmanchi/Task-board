<template>
    <div>
      <h2>Favorited Tasks</h2>
      <div v-if="favs.length > 0">
        <div v-for="task in all" :key="task.id" class="task-box">
          <p>{{ task.title }}</p>
        </div>
      </div>
      <p v-else>No favorited tasks found.</p>
    </div>
  </template>
  
  <script setup>
    import { inject } from 'vue';
    
    const favTasks = inject('favs');
  </script>
