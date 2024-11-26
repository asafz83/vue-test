<template>
  <svg></svg>
</template>
<script setup lang="ts">
import * as d3 from 'd3';
import {Stock} from '@models/Stock';
import {onMounted} from 'vue';


const props = defineProps<{
  stock: Stock
}>();

const width = 928;
const height = 500;
const marginTop = 20;
const marginRight = 30;
const marginBottom = 30;
const marginLeft = 40;
let data = JSON.parse(JSON.stringify(props.stock.historicalData));
data = data.map(data2 => {
  return {
    price: data2.price,
    date: new Date(data2.date),
  };
});


onMounted(() => {
  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc(d3.extent(data, d => d.date), [marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
  const y = d3.scaleLinear([d3.min(data, d => d.price) - 1, d3.max(data, d => d.price) + 1], [height - marginBottom, marginTop]);

// Declare the line generator.
  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.price));

// Create the SVG container.
  const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

// Add the x-axis.
  svg.append('g')
    .attr('transform', `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).ticks(data.length).tickSizeOuter(0));

// Add the y-axis, remove the domain line, add grid lines and a label.
  svg.append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call(g => g.select('.domain').remove())
    .call(g => g.selectAll('.tick line').clone()
      .attr('x2', width - marginLeft - marginRight)
      .attr('stroke-opacity', 0.1))
    .call(g => g.append('text')
      .attr('x', -marginLeft)
      .attr('y', 10)
      .attr('fill', 'currentColor')
      .attr('text-anchor', 'start')
      .text('↑ Daily close ($)'));

// Append a path for the line.
  svg.append('path')
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr('d', line(data));


  svg.append( "path" )
    .attr('fill', 'none')
    .attr('stroke', 'green')
    .attr('stroke-width', 1.5)
    .attr('stroke-dasharray', 10)
    .attr('d', `M ${x(x.domain()[0])} ${y(props.stock.high)} L ${x(x.domain()[1])} ${y(props.stock.high)}`);
  svg.append( "path" )
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', 1.5)
    .attr('stroke-dasharray', 10)
    .attr('d', `M ${x(x.domain()[0])} ${y(props.stock.low)} L ${x(x.domain()[1])} ${y(props.stock.low)}`);
});



</script>

<style scoped>

</style>
