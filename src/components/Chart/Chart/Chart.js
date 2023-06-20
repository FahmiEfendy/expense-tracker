import React from "react";

import "./Chart.css";
import { ChartBar } from "../";

export const Chart = (props) => {
  const { charts } = props;

  const dataBarValues = charts.map((chart) => chart.value);

  const maxValue = Math.max(...dataBarValues);

  return (
    <div className="chart">
      {charts.map((chart) => (
        <ChartBar
          key={chart.label}
          value={chart.value}
          maxValue={maxValue}
          label={chart.label}
        />
      ))}
    </div>
  );
};
