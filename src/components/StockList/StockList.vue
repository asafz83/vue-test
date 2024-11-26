<script setup lang="ts">
import { defineProps } from 'vue'
import {Stock} from '@models/Stock';
import StockListItem from '@components/StockListItem/StockListItem.vue';

const props = defineProps<{
  stocks: Stock[]
}>()

</script>

<template>

  <li v-for="stock in props.stocks" :key="stock.symbol">
    <StockListItem :stock="stock" />
  </li>
</template>

<style scoped>
@import './StockList.css';
 </style>
