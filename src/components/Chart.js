import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Box } from '@mui/material';

const Chart = ({ forecast }) => {
  if (!forecast) {
    return null; // Return nothing or a placeholder if forecast is null or undefined
  }

  const labels = forecast.slice(0, 7).map((item, index) => `Day ${index + 1}`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.slice(0, 7).map(item => item.main.temp),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <Box flex={1}>
      <Line data={data} />
    </Box>
  );
};

export default Chart;
