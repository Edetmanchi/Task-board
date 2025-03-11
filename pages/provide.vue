

<template>
  <div>
    <!-- Button to toggle the filteredFav component -->
    <div class="box1">
      <button @click="showFilteredFav = !showFilteredFav">
        {{ showFilteredFav ? 'Hide Favorited Tasks' : 'Show Favorited Tasks' }}
      </button>
    </div>

    <!-- Display the filteredFav component conditionally -->
    <FilteredFavs v-if="showFilteredFav" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Local state to control the visibility of the filteredFav component
const showFilteredFav = ref(false);
</script>