<template>
  <div>
    <h1>Stock Price Tracker</h1>
    <div>
      <label for="symbol">Stock Symbol:</label>
      <input id="symbol" v-model="symbol" placeholder="Enter stock symbol (e.g., AAPL)" />
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else-if="stockData">
      <h2>{{ stockData.symbol }} - {{ stockData.close }}</h2>
      <p>Date: {{ stockData.date }}</p>
      <p>Open: {{ stockData.open }}</p>
      <p>Close: {{ stockData.close }}</p>
      <p>High: {{ stockData.high }}</p>
      <p>Low: {{ stockData.low }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStockData } from '~/composables/useStockData';

// User input
const symbol = ref('AAPL'); // Default symbol

// Composable for stock data
const { stockData, loading, error, fetchStockData } = useStockData();

// Fetch stock data when the symbol changes
watch(symbol, (newSymbol) => {
  if (newSymbol) {
    fetchStockData(newSymbol);
  }
}, { immediate: true }); // Fetch data immediately on page load
</script>

<style scoped>
div {
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
}

input {
  padding: 5px;
  font-size: 16px;
}

h2 {
  margin-top: 20px;
}
</style>