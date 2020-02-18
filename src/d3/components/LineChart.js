import React, { useState, useEffect } from "react";

import * as d3 from "d3";
import XYAxis from './xy-axis';
import Line from './Line';

const LineChart = props => {
  
  const [data, setData] = useState(
    [
      { name: 'Jan', value: 30 },
      { name: 'Feb', value: 10 },
      { name: 'Mar', value: 50 },
      { name: 'Apr', value: 20 },
      { name: 'May', value: 80 },
      { name: 'Jun', value: 30 },
      { name: 'July', value: 0 },
      { name: 'Aug', value: 20 },
      { name: 'Sep', value: 100 },
      { name: 'Oct', value: 55 },
      { name: 'Nov', value: 60 },
      { name: 'Dec', value: 80 },
    ]
  );

  const randomData = e => {
    e.preventDefault();
    setData(prevData => {
      prevData.map(d => ({
        name: d.name,
        value: Math.floor((Math.random() * 100) + 1)
      }))
    })
  }

  const parentWidth = 500;

  const margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const width = parentWidth - margins.left - margins.right;
  const height = 200 - margins.top - margins.bottom;

  const ticks = 5;
  const t = d3.transition().duration(1000);

  const xScale = d3.scaleBand()
    .domain(data.map(d => d.name))
    .rangeRound([0, width]).padding(0.1);

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.value))
    .range([height, 0])
    .nice();

  const lineGenerator = d3.line()
    .x(d => xScale(d.name))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX);

  return(
    <div>
      <button onClick={randomData}>Randomize data</button>
      <svg
        className="lineChartSvg"
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}
      >
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks, t }} />
          <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
        </g>
      </svg>
    </div>
  );
  
}

export default LineChart;