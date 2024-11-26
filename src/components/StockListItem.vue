<script setup lang="ts">
  import {Stock} from '@models/Stock';
  import PercentageChange from '@components/PercentageChange.vue';
  import MarketStatus from '@components/MarketStatus.vue';

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
  a {
    padding: 10px;
    width: 100%;
    height: 100%;
    display: block;
  }
  a:hover {
    background-color: aliceblue;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }
  .flex div {
    flex: 1;
  }

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
</style>
