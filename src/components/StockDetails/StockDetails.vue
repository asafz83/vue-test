<script setup lang="ts">

import PercentageChange from '@components/PercentageChange/PercentageChange.vue';
import MarketStatus from '@components/MarketStatus/MarketStatus.vue';
import StockChart from '@components/StockChart/StockChart.vue';
import {Stock} from '@models/Stock';

const props = defineProps<{
  stock: Stock
}>();
</script>

<template>
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
@import "./StockDetails.css";
</style>
