import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import DollarSignIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import BitcoinIcon from '@mui/icons-material/Token';
import Slider from '@mui/material/Slider';
import Graph from './Graph'; // Importing the Graph component

export default function Dashboard() {
  return (
    <div>
     <AppBar
      position="fixed"
      sx={(theme) => ({
        backgroundColor: 'white',
        color: 'black',
        zIndex: theme.zIndex.drawer,
        paddingLeft: '40px',
        width: {
          xs: '74%',
          sm: '60%',
          md: '77.2%',
        },
        marginTop: 8,
      })}
    >
      <Toolbar>
        {/* Search Icon */}
        <IconButton size="large" color="inherit">
          <SearchIcon sx={{ color: 'rgb(192, 192, 192)' }} /> {/* Set SearchIcon color */}
        </IconButton>

        {/* Search InputBase */}
        <InputBase
          placeholder="Search..."
          sx={{
            ml: 1,
            flex: 1,
            color: 'rgb(192, 192, 192)', // Set search input color
          }}
          inputProps={{ 'aria-label': 'search' }}
        />

        <Box sx={{ flexGrow: 1 }} />

        {/* Contact Icon */}
        <IconButton size="large" color="inherit">
          <ContactsIcon sx={{ color: 'grey' }} /> {/* Set ContactsIcon color */}
        </IconButton>

        {/* Notification Icon */}
        <IconButton size="large" color="inherit">
          <NotificationsIcon sx={{ color: 'grey' }} /> {/* Set NotificationsIcon color */}
        </IconButton>

        {/* User Avatar */}
        <Avatar
          alt="Remy Sharp"
          src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg"
          sx={{ marginLeft: 2 }}
        />
      </Toolbar>
    </AppBar>

      <Box sx={{  paddingLeft: '210px', marginTop: '-10px'
         }}>
        <Grid container spacing={2}>
          {/* First Card */}
          <Grid item xs={12} sm={3}>
            <Card sx={{ minHeight: '50px'}}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="body2">BUDGET</Typography>
                  <Box
                    sx={{
                      backgroundColor: '#E34234', 
                      color: 'white',
                      borderRadius: '50%',
                      padding: '4px',
                      
                    }}
                  >
                    <DollarSignIcon />
                  </Box>
                </Box>
                <Typography variant="h5">$24k</Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ color: 'green' }}>+12%</Typography>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item xs={12} sm={3}>
            <Card sx={{ minHeight: '50px' }}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="body2">TOTAL CALCULATION</Typography>
                  <Box
                    sx={{
                      backgroundColor: 'green', 
                      color: 'white',
                      borderRadius: '50%',
                      padding: '4px',
                    }}
                  >
                    <GroupIcon />
                  </Box>
                </Box>
                <Typography variant="h5">1.6K</Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="h5" sx={{ color: '#E34234' }}>-16%</Typography>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Third Card */}
          <Grid item xs={12} sm={3}>
            <Card sx={{ minHeight: '50px' }}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="body2">TASK PROGRESS</Typography>
                  <Box
                    sx={{
                      backgroundColor: 'orange', 
                      color: 'white',
                      borderRadius: '50%',
                      padding: '4px',
                    }}
                  >
                    <SettingsIcon />
                  </Box>
                </Box>
                <Typography variant="h5">75.5%</Typography>
                <Slider
                  value={70}
                  aria-label="Task Progress"
                  sx={{ color: '#4169E1' }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Fourth Card */}
          <Grid item xs={12} sm={3}>
            <Card sx={{ minHeight: '50px'}}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="body2">TOTAL PROFIT</Typography>
                  <Box
                    sx={{
                      backgroundColor: ' #4169E1', 
                      color: 'white',
                      borderRadius: '50%',
                      padding: '4px',
                    }}
                  >
                    <BitcoinIcon />
                  </Box>
                </Box>
                <Typography variant="h5">$15k</Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" sx={{ color: 'green' }}>+12%</Typography>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    since last month
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Include the Graph component */}
          <Grid item xs={12}>
            <Graph />
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}