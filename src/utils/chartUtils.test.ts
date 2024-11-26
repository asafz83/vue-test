import {describe} from 'vitest';
import {createSVG, drawLine} from './chartUtils';

const d3mock = {
  select: vi.fn(),
};
vi.spyOn(d3mock, 'select').mockReturnValue({
  attr: vi.fn().mockReturnThis(),
});

const svgMock = {
  append: vi.fn().mockReturnThis(),
};
vi.spyOn(svgMock, 'append').mockReturnValue({
  attr: vi.fn().mockReturnThis(),
});

describe('chartUtils', () => {
  it('should create an SVG', () => {
    const svg = createSVG({
      width: 100,
      height: 100,
      selector: 'svg',
      d3: d3mock,
    });
    expect(svg).toBeDefined();
    expect(d3mock.select).toHaveBeenCalledWith('svg');
    expect(svg.attr).toHaveBeenCalledWith('width', 100);
    expect(svg.attr).toHaveBeenCalledWith('height', 100);
  });

  it('should draw a line with respect to the given parameters', () => {
    drawLine({
      svg: svgMock,
      x1: 0,
      y1: 0,
      x2: 100,
      y2: 100,
      color: 'red',
      width: 2,
      dashArray: 5,
    });
    expect(svgMock.append).toHaveBeenCalledWith('path');
    expect(svgMock.append().attr).toHaveBeenCalledWith('fill', 'none');
    expect(svgMock.append().attr).toHaveBeenCalledWith('stroke', 'red');
    expect(svgMock.append().attr).toHaveBeenCalledWith('stroke-width', 2);
    expect(svgMock.append().attr).toHaveBeenCalledWith('stroke-dasharray', 5);
    expect(svgMock.append().attr).toHaveBeenCalledWith('d', 'M 0 0 L 100 100');
  });
});
