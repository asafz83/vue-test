<script lang="ts">
import {defineComponent} from 'vue';
import {useRoute, useRouter} from 'vue-router';
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
if (!stock) {
  const router = useRouter();
  router.push('/error');
}

</script>

<template>
  <RouterLink to="/">
    &lt;- Back to List
  </RouterLink>
  <StockDetails v-if="!!stock" :stock="stock" />

</template>

<style scoped>
@import "stockItem.css";
</style>

