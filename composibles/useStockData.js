import { ref } from 'vue';

export const useStockData = () => {
  const stockData = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchStockData = async (symbol) => {
    loading.value = true;
    error.value = null;
    try {
      const API_KEY = '31cdb444131bcaf12146567fa2566eff'; // Your API key
      const response = await fetch(
        `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${symbol}`
      );
      const data = await response.json();
      stockData.value = data.data[0]; // Use the first result
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    stockData,
    loading,
    error,
    fetchStockData,
  };
};