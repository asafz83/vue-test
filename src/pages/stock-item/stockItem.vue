<script lang="ts">
import {defineComponent} from 'vue';
import {useRoute} from 'vue-router';
import {useStocksState} from '@stores';
import {storeToRefs} from 'pinia';
import StockDetails from '@components/StockDetails/StockDetails.vue';
import {Stock} from '@models/Stock';

export default defineComponent({
  name: 'StockItem',
});


</script>

<script setup lang="ts">
const stocksState = useStocksState();
const {getStockById} = storeToRefs(stocksState);

const route = useRoute();
const stock: Stock | null = getStockById.value(route.params.id);

</script>

<template>
  <RouterLink to="/">
    &lt;- Back to List
  </RouterLink>
  <StockDetails :stock="stock" />

</template>

<style scoped>
@import "stockItem.css";
</style>

