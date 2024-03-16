/* eslint-disable @typescript-eslint/no-unused-vars */
import PropTypes from "prop-types";
import React from "react";

import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";


Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: true },
    y: { display: true }
  },
  plugins: { legend: { display: false } }
};

function ChartLineSample({ data }): JSX.Element {
  return <Line options={ options } data={ data } className="h-96" />;
}

export default ChartLineSample;

ChartLineSample.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  })
};
