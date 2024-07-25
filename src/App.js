import React from 'react';
import { Container, Typography } from '@mui/material';
import TopSummaryCards from './TopSummaryCards';
import HorizontalBarChart from './HorizontalBarChart';

const App = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: 20 }}>
        Project Health Monitoring Dashboard for Quality Management Plan
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'center', marginBottom: 40 }}>
        This slide illustrates quality management dashboard that can help organization to plan and identify the defects and fatal errors of project. Its key elements are total tasks, sample, quality score, defect analysis, quality score and sampling percentage.
      </Typography>
      <TopSummaryCards />
      <HorizontalBarChart />
    </Container>
  );
};

export default App;
