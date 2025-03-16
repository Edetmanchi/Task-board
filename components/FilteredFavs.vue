<template>
    <div>
      <h2 class="text-red-400 text-2xl">Favorited Tasks</h2>
      <div>
        <div v-for="f in favs" :key="task.id" class="task-box">
          <p> {{ task.title }} </p>
        </div>
      </div>
      <!-- <div v-if="favs.length > 0">
        <div v-for="task in all" :key="task.id" class="task-box">
          <p> {{ task.title }} </p>
        </div>
      </div> -->
      <!-- <p v-else>No favorited tasks found.</p> -->
    </div>
  </template>
  
  <script setup>

    import { inject } from 'vue';
    const favs = inject('favs');

  </script>
