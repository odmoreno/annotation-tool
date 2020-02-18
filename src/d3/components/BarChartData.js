import React, { useState, useEffect } from 'react';

import * as d3 from "d3";

import BarChart from './BarChart'

const parseNA = string => (string === 'NA' ? undefined : string)

function type(d) {
    return {
      genre: parseNA(d.genre),
      revenue: +d.revenue,
    }
  }
  
  function filterData(data) {
    return data.filter(d => {
      return d.revenue > 0
    })
  }
  
  function prepareBarChartData(data) {
    // usually more wrangling is required but the example data is simple
    return data
  }
  
const BarChartData = () => {
    const [barChartData, setBarChartData] = useState(null)

    useEffect(() => {
        d3.csv('/data/barchart.csv', type).then(data => {
          const dataClean = filterData(data)
          setBarChartData(
              prepareBarChartData(dataClean).sort((a, b) => {
              return d3.ascending(a.genre, b.genre)
              }),
          )
        })
        //console.log(barChartData)
    }, [])

    if (barChartData === null) {
        return <p>Loading...</p>
    }

    return <BarChart data={barChartData} />
}

export default BarChartData;