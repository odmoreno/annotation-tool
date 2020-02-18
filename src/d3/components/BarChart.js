import React, { useEffect, useRef } from 'react';


import * as d3 from "d3";


const margin = { top: 80, right: 60, bottom: 80, left: 60 }
const width = 600 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

const color = ['#f05440', '#d5433d', '#b33535', '#283250']


const BarChart = props => {
  const d3svg = useRef(null)

  useEffect(() => {
    if (props.data && d3svg.current) {
      //let svg = d3.select(d3svg.current)
      let svg = d3.select(d3svg.current)
      
      // scales
      const xMax = d3.max(props.data, d => d.revenue)
      console.log(xMax)

      const xScale = d3.scaleLinear()
        .domain([0, xMax])
        .range([0, width])

      console.log('xScale', xScale)

      const yScale = d3.scaleBand()
        .domain(props.data.map(d => d.genre))
        .rangeRound([0, height])
        .paddingInner(0.25)

        console.log('yscale', yScale)
        
      // append group translated to chart area
      svg = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

      // draw header
      svg
        .append('g')
        .attr('class', 'bar-header')
        .attr('transform', `translate(0, ${-margin.top / 2})`)
        .append('text')
        .append('tspan')
        .text('Horizontal bar chart')

      // draw bars
      svg
        .selectAll('.bar')
        .data(props.data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('y', d => yScale(d.genre))
        .attr('width', d => xScale(d.revenue))
        .attr('height', yScale.bandwidth())
        .style('fill', function(d, i) {
          return color[i % 4] // use colors in sequence
        })

      // draw axes
      const xAxis = d3.axisBottom(xScale)
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${height + margin.bottom / 3})`)
        .call(xAxis)

      const yAxis = d3.axisLeft(yScale).tickSize(0)
      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', `translate(${-margin.left / 3},0)`)
        .call(yAxis)
    }
  }, [props.data])

  return (
    <svg
      className="bar-chart-container"
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      role="img"
      ref={d3svg}
    ></svg>
  )

};

export default BarChart;