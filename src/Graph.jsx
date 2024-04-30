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

const chartSetting = {
  width: 300,
  height: 200,
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

const pieColors = ['#4169E1', 'green', 'orange'];

const data1 = [
  { label: 'Group A', value: 60 },
  { label: 'Group B', value: 15 },
  { label: 'Group C', value: 25 },
];

export default function IntegratedGraph() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); 
  const isLaptopScreen = useMediaQuery('(min-width:1024px)'); 

  const salesCardWidth = isSmallScreen ? '90%' : isLaptopScreen ? '50%' : '70%'; 
  const pieChartWidth = isSmallScreen ? '90%' : isLaptopScreen ? '50%' : '70%'; 

  return (
    <Box sx={{ padding: '10px', marginTop: '20px' }}>
      <Grid
        container
        spacing={isSmallScreen ? 1 : 3}
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent="center"
        alignItems={isSmallScreen ? 'stretch' : 'center'}
      >
        
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: 3,
              height: '400px', 
              width: salesCardWidth,
              margin: 'auto',
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

       
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '10px',
              boxShadow: 3,
              height: '400px', 
              width: pieChartWidth,
              margin: 'auto',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Traffic Source
            </Typography>

            <PieChart
              width={isSmallScreen ? 180 : 250} 
              height={isSmallScreen ? 180 : 250} 
            >
              <Pie
                data={data1}
                outerRadius={isSmallScreen ? 60 : 80} 
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
                justifyContent: 'center', 
                gap: 4,
                paddingTop: 16, 
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
