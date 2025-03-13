<template>
    <div>
      <h1>{{ card.title }}</h1>
      <img :src="card.image" :alt="card.title" />
      <p>{{ card.details }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </template>
  
  <script setup>
  const {card} = defineProps(['card'])
 
  
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
  </style>