import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import TopSummaryCards from './TopSummaryCards';
import HorizontalBarCharts from './HorizontalBarCharts';
import data from './data.json';

const MainComponent = () => {
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    setSummaryData(data);
  }, []);

  if (!summaryData) return <div>Loading...</div>;

  return (
    <Box>
      {/* Top Summary Cards */}
      <Box mb={12}>
        <TopSummaryCards />
      </Box>

      {/* Horizontal Bar Charts */}
      <Box mt={12}> {/* Increase the space between rows */}
        <HorizontalBarCharts />
      </Box>
    </Box>
  );
};

export default MainComponent;
