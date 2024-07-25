import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Grid } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const mostFrequentData = {
  labels: ['Very Long Application Name A', 'App B', 'App C', 'App D', 'App E'],
  datasets: [
    {
      label: 'Number of Incidents',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(45, 92, 92, 0.8)',
      borderColor: 'rgba(45, 92, 92, 1)',
      borderWidth: 1,
    },
  ],
};

const leastFrequentData = {
  labels: ['App F', 'App G', 'App H', 'Very Long Application Name I', 'App J'],
  datasets: [
    {
      label: 'Number of Incidents',
      data: [1, 1, 2, 3, 1],
      backgroundColor: 'rgba(102, 51, 204, 0.8)',
      borderColor: 'rgba(102, 51, 204, 1)',
      borderWidth: 1,
    },
  ],
};

const highestIncidentsData = {
  labels: ['App K', 'App L', 'Very Long Application Name M', 'App N', 'App O'],
  datasets: [
    {
      label: 'Number of Incidents',
      data: [22, 25, 28, 30, 35],
      backgroundColor: 'rgba(153, 0, 51, 0.8)',
      borderColor: 'rgba(153, 0, 51, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      font: {
        size: 18, // Increased font size for the chart titles
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function(value) {
          const fullLabel = this.getLabelForValue(value);
          if (fullLabel.length > 15) {
            return fullLabel.substring(0, 15) + '...';
          }
          return fullLabel;
        },
        font: {
          size: 12, // Adjust font size if needed
        },
      },
    },
  },
};

function HorizontalBarCharts() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ height: '500px' }}>
            <Bar
              data={mostFrequentData}
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { display: true, text: 'Most Frequent Incidents', font: { size: 20 } }, // Title with increased font size
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ height: '500px' }}>
            <Bar
              data={leastFrequentData}
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { display: true, text: 'Least Frequent Incidents', font: { size: 20 } }, // Title with increased font size
                },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ height: '500px' }}>
            <Bar
              data={highestIncidentsData}
              options={{
                ...options,
                plugins: {
                  ...options.plugins,
                  title: { display: true, text: 'Highest Incidents', font: { size: 20 } }, // Title with increased font size
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HorizontalBarCharts;
