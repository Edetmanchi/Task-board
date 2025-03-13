<template>
    <div class=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
      <div class="flex flex-col items-center pb-10">
        <img class="w-48 h-48 mb-3 rounded-full shadow-lg" :src="card.image" :alt="card.title"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ card.description }}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ card.details }}</span>
        <div class="flex mt-4 md:mt-6">
          <SecondaryButton :to="`/details/${card.id}`">Add friend</SecondaryButton>
          <PrimaryButton :to="`/details/${card.id}`">Read More</PrimaryButton>
        </div>        
      </div>
    </div>
  </template>
  
  <script setup>
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';


  
    const {card} = defineProps(['card'])
  </script>
  
 