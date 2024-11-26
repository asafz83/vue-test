<script lang="ts">
import {defineComponent} from 'vue';
import {useRoute} from 'vue-router';
import {useStocksState} from '@stores';
import {storeToRefs} from 'pinia';
import StockChart from '@components/StockChart.vue';
import PercentageChange from '@components/PercentageChange.vue';
import MarketStatus from '@components/MarketStatus.vue';

export default defineComponent({
  name: 'StockItem',
});


</script>

<script setup lang="ts">




const stocksState = useStocksState();
const {getStockById} = storeToRefs(stocksState);

const route = useRoute();
const stock = getStockById.value(route.params.id);


</script>

<template>
  <RouterLink to="/">
    &lt;- Back to List
  </RouterLink>
  <section :class="stock.marketStatus">
    <h1>
      {{ stock.companyName }} ({{ stock.symbol }})
    </h1>

    <h3>
      Current Price: {{ stock.currentPrice }}
      <PercentageChange :percentageChange="stock.percentageChange" />
    </h3>
    <h3>
      Volume: {{ stock.volume }}
    </h3>
    <h4>
      <MarketStatus :marketStatus="stock.marketStatus"></MarketStatus>
    </h4>

    <StockChart :stock="stock" />
  </section>



</template>

<style scoped>


.closed {
  opacity: 0.6;
}

section {
  margin: 20px;
}
h1,h2,h3 {
  margin-top: 10px;
}
h4 {
  margin: 15px 0;
}

a {
  display: inline-block;
  padding: 10px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid black

}
</style>

