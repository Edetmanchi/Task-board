<template>
  <div>
    <!-- Button to toggle the filteredFav component -->

    <div class="box1">
      <button @click="showFilteredFav = !showFilteredFav">
        {{ showFilteredFav ? 'Hide Favorited Tasks' : 'Show Favorited Tasks' }}
        <FilteredFavs  v-if="showFilteredFav"/>
      </button>
    </div>

  </div>
</template>

<script setup>

  import { ref } from 'vue';
  const showFilteredFav = ref(false);
  const message = inject('favs')

</script>