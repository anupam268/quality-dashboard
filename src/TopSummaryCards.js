import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, CircularProgress, Divider } from '@mui/material';
import data from './data.json';

// Import local icons
import TaskIcon from './icons/total.png';
import SampleIcon from './icons/sample.png';
import DefectsIcon from './icons/defect.png';
import FatalErrorIcon from './icons/error.png';
import QualityScoreIcon from './icons/medal.png';

const TopSummaryCards = () => {
  const [summaryData, setSummaryData] = useState(null);

  useEffect(() => {
    setSummaryData(data);
  }, []);

  if (!summaryData) return <div>Loading...</div>;

  const iconStyle = {
    width: '70%', // Ensure icon maintains aspect ratio
    height: '70%', // Ensure icon maintains aspect ratio
    objectFit: 'contain', // Ensures the image fits within the circle
  };

  const circleStyle = (color) => ({
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16, // Added margin for better spacing
  });

  const subtitleStyle = {
    color: '#AAAAAA',
  };

  const percentageStyle = {
    position: 'absolute',
    bottom: 8,
    right: 8,
    color: '#FFFFFF',
  };

  const qualityScoreStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  const circularProgressStyle = {
    color: '#FFFFFF',
  };

  const cardGridStyle = {
    flex: '1 1 0',
    maxWidth: 'calc(20% - 16px)',
  };

  const cardStyle = (color) => ({
    padding: '20px',
    backgroundColor: color,
    color: '#FFFFFF',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    height: '150px', // Set a fixed height for all cards
    width: '100%',
    position: 'relative',
  });

  const Card = ({ title, value, icon, cardColor, circleColor, percentage }) => (
    <Paper style={cardStyle(cardColor)}>
      <Box style={circleStyle(circleColor)}>
        <img src={icon} alt={title} style={iconStyle} />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" width="100%">
        <Box>
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Divider style={{ width: '100%', backgroundColor: '#FFFFFF', margin: '8px 0' }} />
        <Box>
          <Typography variant="h4">{value}</Typography>
        </Box>
      </Box>
      {percentage && (
        <Typography variant="subtitle2" style={percentageStyle}>
          {percentage}
        </Typography>
      )}
    </Paper>
  );

  return (
    <Grid container spacing={4} justifyContent="space-between">
      <Grid item style={cardGridStyle}>
        <Card
          title="Total Task"
          value={summaryData.totalTask.toLocaleString()}
          icon={TaskIcon}
          cardColor="rgb(198, 40, 40)" // Darker shade of red
          circleColor="rgba(255, 255, 255, 0.5)"
        />
      </Grid>
      <Grid item style={cardGridStyle}>
        <Card
          title="Sample"
          value={summaryData.sample.toLocaleString()}
          icon={SampleIcon}
          cardColor="rgb(229, 115, 115)" // Darker shade of light red
          circleColor="rgba(255, 255, 255, 0.5)"
          percentage={`${summaryData.samplePercentage}%`}
        />
      </Grid>
      <Grid item style={cardGridStyle}>
        <Card
          title="Defects"
          value={summaryData.defects.toLocaleString()}
          icon={DefectsIcon}
          cardColor="rgb(25, 118, 210)" // Darker shade of blue
          circleColor="rgba(255, 255, 255, 0.5)"
          percentage={`${summaryData.defectsPercentage}%`}
        />
      </Grid>
      <Grid item style={cardGridStyle}>
        <Card
          title="Fatal Error"
          value={summaryData.fatalError.toLocaleString()}
          icon={FatalErrorIcon}
          cardColor="rgb(41, 121, 255)" // Darker shade of light blue
          circleColor="rgba(255, 255, 255, 0.5)"
          percentage={`${summaryData.fatalErrorPercentage}%`}
        />
      </Grid>
      <Grid item style={cardGridStyle}>
        <Paper style={cardStyle('rgb(56, 142, 60)')}>
          <Box style={circleStyle('rgba(255, 255, 255, 0.5)')}>
            <img src={QualityScoreIcon} alt="Quality Score" style={iconStyle} />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" width="100%">
            <Box>
              <Typography variant="h6">Quality Score</Typography>
            </Box>
            <Divider style={{ width: '100%', backgroundColor: '#FFFFFF', margin: '8px 0' }} />
            <Box style={qualityScoreStyle}>
              <CircularProgress
                variant="determinate"
                value={summaryData.qualityScore}
                size={60}
                thickness={5}
                style={circularProgressStyle}
              />
              <Box
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
              >
                <Typography variant="h6" style={{ color: '#FFFFFF' }}>
                  {`${Math.round(summaryData.qualityScore)}%`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TopSummaryCards;
