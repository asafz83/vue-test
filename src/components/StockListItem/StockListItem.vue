<script setup lang="ts">
  import {Stock} from '@models/Stock';
  import PercentageChange from '@components/PercentageChange/PercentageChange.vue';
  import MarketStatus from '@components/MarketStatus/MarketStatus.vue';

  defineProps<{
    stock: Stock
  }>()
</script>

<template>

  <RouterLink :to="stock.symbol">
    <div class="flex">
      <div>
        {{ stock.symbol }} - {{ stock.currentPrice }}
        <PercentageChange :percentageChange="stock.percentageChange" />
      </div>
      <div class="flex-end">
        <MarketStatus :marketStatus="stock.marketStatus"></MarketStatus>
      </div>
    </div></RouterLink>
</template>

<style scoped>
@import './StockListItem.css';
</style>
