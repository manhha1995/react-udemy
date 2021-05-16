/* eslint-disable react/prop-types */
import React from "react";

import ChartBar from "./ChartBar";
const Chart = (props) => {
	const dataPointsValue = props.dataPoints.map((dataPoint)=> dataPoint.value)
	const maximumValue = Math.max(...dataPointsValue)
	
	return (
	<div className="chart">
			{props.dataPoints.map(dataPoint => <ChartBar
					key={dataPoint.id}
					value={dataPoint.value}
					maxValue={maximumValue}
					label={dataPoint.label} />
			)}
	</div>
)}

export default Chart