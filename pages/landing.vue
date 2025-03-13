<template>
    <div>
      <h1 class="text-center font-bold text-5xl py-6">My Cards</h1>
      <div class="cards-container">
        <div
          v-for="c in cards"
          :key="c.id"
          class="card"
    
        >
          <Card  :card="c"/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { cards } from "~/data";

  definePageMeta({
    middleware: ['auth']
  })

  
  // const router = useRouter();
  // function navigateToCard(id) {
  //   router.push(`/cards/${id}`);
  // }
  </script>
  
  <style scoped>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .card {
    border: 1px solid #ccc;
    padding: 20px;
    cursor: pointer;
    text-align: center;
  }
  
  .card img {
    max-width: 100%;
    height: auto;
  }
  </style>