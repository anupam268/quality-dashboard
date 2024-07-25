import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { BarChart, BarSeries } from '@mui/x-charts';

const HorizontalBarChart = ({ data, title }) => {
  if (!data || !data.labels || !data.datasets || !data.datasets[0] || !data.datasets[0].data) {
    return null;
  }

  const chartData = data.datasets[0].data.map((value, index) => ({
    label: data.labels[index],
    value,
  }));

  return (
    <Paper style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#2C2F33', color: '#FFFFFF' }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <BarChart
          xAxis={[{ scaleType: 'band', data: data.labels }]}
          yAxis={[{ data: chartData.map((d) => d.value) }]}
          series={[
            {
              dataKey: 'value',
              data: chartData,
              color: data.datasets[0].backgroundColor,
            },
          ]}
          height={300}
          width={500}
        />
      </Box>
    </Paper>
  );
};

export default HorizontalBarChart;
