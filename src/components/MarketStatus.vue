<script setup lang="ts">
  import {MarketStatus} from '@models/MarketStatus';

  const props = defineProps<{
    marketStatus: MarketStatus
  }>();
</script>

<template>
  Market is {{ props.marketStatus }}
</template>

<style scoped>

</style>
