import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, Pie, Cell } from 'recharts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SyncIcon from '@mui/icons-material/Sync';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import useMediaQuery from '@mui/material/useMediaQuery';

// BarChart data and settings
const chartSetting = {
  width: 460,
  height: 300,
  sx: {
    transform: 'translate(-20px, 0)',
  },
};

const dataset = [
  { sale1: 18, sale2: 9, month: 'Jan' },
  { sale1: 15, sale2: 10, month: 'Feb' },
  { sale1: 5, sale2: 3, month: 'Mar' },
  { sale1: 9, sale2: 6, month: 'Apr' },
  { sale1: 3, sale2: 2, month: 'May' },
  { sale1: 13, sale2: 9, month: 'June' },
  { sale1: 13, sale2: 9, month: 'July' },
  { sale1: 15, sale2: 10, month: 'Aug' },
  { sale1: 17, sale2: 12, month: 'Sep' },
  { sale1: 18, sale2: 13, month: 'Oct' },
  { sale1: 17, sale2: 14, month: 'Nov' },
  { sale1: 19, sale2: 15, month: 'Dec' },
];

// PieChart data and settings
const data1 = [
  { label: 'Group A', value: 60 },
  { label: 'Group B', value: 15 },
  { label: 'Group C', value: 25 },
];

const pieColors = ['#4169E1', 'green', 'orange'];

export default function IntegratedGraph() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Phone screen check

  return (
    <Box sx={{ padding: '10px 0', marginTop: '20px',marginLeft:'-30px' }}>
      <Grid
        container
        spacing={isSmallScreen ? 1 : 3} // Reduced spacing on small screens
        direction={isSmallScreen ? 'column' : 'row'} // Column layout for small screens
        justifyContent={isSmallScreen ? 'center' : 'space-around'}
        alignItems={isSmallScreen ? 'stretch' : 'center'}
      >
        {/* Sales Section with BarChart */}
        <Grid item xs={isSmallScreen ? 12 : 6}>
          <Box
            sx={{
              padding: '10px',
        
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: 3,
              height: '400px', // Fixed height
              width: isSmallScreen ? '100%' : '420px', // Full width on small screens
              margin: isSmallScreen ? '0 auto' : 'auto',
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Sales
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '4px 10px',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <SyncIcon />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Sync
                </Typography>
              </Box>
            </Box>

            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
              series={[
                {
                  dataKey: 'sale1',
                  valueFormatter: (value) => `${value}k`,
                  sx: { color: '#4169E1' },
                },
                {
                  dataKey: 'sale2',
                  valueFormatter: (value) => `${value}k`,
                  sx: { color: '#E6E6FA' },
                },
              ]}
              {...chartSetting}
            />
          </Box>
        </Grid>

        {/* Traffic Source Section with PieChart and Icons */}
        <Grid item xs={isSmallScreen ? 12 : 4}>
          <Box
            sx={{
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: 3,
              height: '400px', // Fixed height
              width: isSmallScreen ? '100%' : '270px', // Full width on small screens
              margin: isSmallScreen ? '0 auto' : '-10px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textAlign: isSmallScreen ? 'left' : 'left', // Centered text for small screens
              }}
            >
              Traffic Source
            </Typography>

            <PieChart
              width={isSmallScreen ? 180 : 250} // Smaller width on small screens
              height={isSmallScreen ? 180 : 250} // Smaller height on small screens
            >
              <Pie
                data={data1}
                outerRadius={isSmallScreen ? 60 : 80} // Adjusted outer radius for small screens
                innerRadius={isSmallScreen ? 30 : 40}
                startAngle={180}
                endAngle={-180}
                dataKey="value"
              >
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>

            <Box
              sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'row' : 'row', // Vertical layout for small screens
                justifyContent: isSmallScreen ? 'center' : 'space-between',
                alignItems: isSmallScreen ? 'center' : 'stretch',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <DesktopWindowsIcon sx={{ color: 'black' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Desktop
                </Typography>
                <Typography variant="body2">63%</Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <TabletAndroidIcon sx={{ color: 'black' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Tablet
                </Typography>
                <Typography variant="body2">15%</Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <PhoneIphoneIcon sx={{ color: 'black' }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Phone
                </Typography>
                <Typography variant="body2">22%</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
