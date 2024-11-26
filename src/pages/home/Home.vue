<script setup lang="ts">
import {useStocksState} from '@stores';
import {storeToRefs} from 'pinia';
import StockList from '@components/StockList/StockList.vue';

defineOptions({
  name: 'HomeComponent',
});

const stocksState = useStocksState();
const {stocks} = storeToRefs(stocksState);


</script>

<template>
  <main>
    <h1>Stock Trader</h1>
    <StockList :stocks="stocks" />
  </main>
</template>

<style scoped>
@import 'Home.css';
</style>
