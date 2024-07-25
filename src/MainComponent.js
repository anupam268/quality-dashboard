import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TopSummaryCards from './TopSummaryCards';
import HorizontalBarChart from './HorizontalBarChart';
import data from './data.json';

const MainComponent = () => {
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    setSummaryData(data);
  }, []);

  if (!summaryData) return <div>Loading...</div>;

  return (
    <Grid container spacing={4}>
      {/* Top Summary Cards */}
      <TopSummaryCards />

      {/* Horizontal Bar Charts */}
      <Grid container item spacing={4} style={{ marginTop: '20px' }}>
        <Grid item xs={4}>
          <HorizontalBarChart data={summaryData.barChartData} title="Chart 1" />
        </Grid>
        <Grid item xs={4}>
          <HorizontalBarChart data={summaryData.barChartData} title="Chart 2" />
        </Grid>
        <Grid item xs={4}>
          <HorizontalBarChart data={summaryData.barChartData} title="Chart 3" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainComponent;
