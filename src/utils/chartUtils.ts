interface DrawLineParams {
  svg: any;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width: number;
  dashArray?: number;
}

export function drawLine(lineParams: DrawLineParams) {
  const {svg, x1, y1, x2, y2, color, width, dashArray} = lineParams;
  svg.append('path')
    .attr('fill', 'none')
    .attr('stroke', color)
    .attr('stroke-width', width)
    .attr('stroke-dasharray', dashArray)
    .attr('d', `M ${x1} ${y1} L ${x2} ${y2}`);
}

interface CreateSvgParams {
  width: number;
  height: number;
  selector: string;
  d3: any;
}

export function createSVG(params: CreateSvgParams): any {
  const {width, height, selector, d3} = params;
  return d3.select(selector)
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');
}
