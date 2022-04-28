import "./DisplayChart.scss"
import { Chart } from "react-google-charts"
import React from "react"


const DisplayChart = ({Searching}) => {
  const options = {
    title: "A Geo Map",
    hAxis: {title: "Horizontal", viewWindow: { min: 0, max: 15}},
    vAxis: {title: "Vertical", viewWindow: { min: 0, max: 15}},
    legend: "none"
  }

  const data = [
    ["Horizontal", "Vertical"],
    [8, 12],
    [4, 5.5]
  ]

  return (
    <div> 
      
      {console.log("Chart component")}
      <Chart
        chartType="ScatterChart"
        data={data}
        options={options}
        width="80%"
        height="400px"
        legendToggle
      /> 
      
    </div>
  )
}

export default DisplayChart