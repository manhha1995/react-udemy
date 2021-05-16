/* eslint-disable react/prop-types */
import React from "react";

const ChartBar = props => {

    let barFillHeight = "0%"
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "0%"
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar-inner" >
            <div className="chart-bar-fill" style={{height:barFillHeight}}>{props.maxValue}</div>
            <div className="chart-bar-label">{props.label}</div>
            </div>
        </div>
    )
}

export default ChartBar