<template>
  <svg></svg>
</template>
<script setup lang="ts">
import * as d3 from 'd3';
import {Stock} from '@models/Stock';
import {onMounted} from 'vue';
import {createSVG, drawLine} from '@utils/chartUtils';


const props = defineProps<{
  stock: Stock
}>();
// TODO: This section needs much more refactor...
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
  const svg = createSVG({d3, width, height, selector: 'svg'});

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

  drawLine({
    svg,
    width: 1.5,
    color: 'green',
    dashArray: 10,
    x1: x(x.domain()[0]),
    y1: y(props.stock.high),
    x2: x(x.domain()[1]),
    y2: y(props.stock.high)
  });

  drawLine({
    svg,
    width: 1.5,
    color: 'red',
    dashArray: 10,
    x1: x(x.domain()[0]),
    y1: y(props.stock.low),
    x2: x(x.domain()[1]),
    y2: y(props.stock.low)
  });
});


</script>

<style scoped>

</style>
