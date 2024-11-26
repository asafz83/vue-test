<script setup lang="ts">
import {Stock} from '@models/Stock';

const props = defineProps<{
  percentageChange: number
}>();
</script>

<template>
  (<span :class="props.percentageChange > 0 ? 'green' : 'red'"><span
  v-if="props.percentageChange > 0">+</span>{{ props.percentageChange
  }}</span>)
</template>

<style scoped>
.green {
  color: green;
}

.red {
  color: red;
}

</style>
