import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Box, CircularProgress, LinearProgress } from '@mui/material';
import data from './data.json';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    setDashboardData(data);
  }, []);

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Project Health Monitoring Dashboard for Quality Management Plan</Typography>
      <Typography variant="subtitle1" gutterBottom>This slide illustrates quality management dashboard that can help organization to plan and identify the defects and fatal errors of project. Its key elements are total tasks, sample, quality score, defect analysis, quality score and sampling percentage.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
          <Paper style={{ padding: 16, textAlign: 'center' }}>
            <Typography variant="h6">Total Task</Typography>
            <Typography variant="h4">{dashboardData.totalTask.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper style={{ padding: 16, textAlign: 'center' }}>
            <Typography variant="h6">Sample</Typography>
            <Typography variant="h4">{dashboardData.sample.toLocaleString()}</Typography>
            <Typography variant="subtitle1">({dashboardData.samplePercentage}%)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper style={{ padding: 16, textAlign: 'center' }}>
            <Typography variant="h6">Defects</Typography>
            <Typography variant="h4">{dashboardData.defects.toLocaleString()}</Typography>
            <Typography variant="subtitle1">({dashboardData.defectsPercentage}%)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper style={{ padding: 16, textAlign: 'center' }}>
            <Typography variant="h6">Fatal Error</Typography>
            <Typography variant="h4">{dashboardData.fatalError.toLocaleString()}</Typography>
            <Typography variant="subtitle1">({dashboardData.fatalErrorPercentage}%)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper style={{ padding: 16, textAlign: 'center' }}>
            <Typography variant="h6">Quality Score</Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CircularProgress variant="determinate" value={dashboardData.qualityScore} />
              <Box position="absolute">
                <Typography variant="h6" color="textSecondary">
                  {`${Math.round(dashboardData.qualityScore)}%`}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Sample Vs Defects Analysis</Typography>
            <Box height={300} display="flex" alignItems="center" justifyContent="center">
              <Typography>Scatter Plot Placeholder</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Fatal Error by Month</Typography>
            <Box height={300} display="flex" alignItems="center" justifyContent="center">
              <Typography>Line Chart Placeholder</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Quality Score by Supervisor</Typography>
            <Box height={300} display="flex" alignItems="center" justifyContent="center">
              <Typography>Pie Chart Placeholder</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">Sampling % by Auditor Name</Typography>
            <Box height={300} display="flex" alignItems="center" justifyContent="center">
              <Typography>Bar Chart Placeholder</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
