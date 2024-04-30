import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'; 
import Popover from '@mui/material/Popover'; 
import SnackbarContent from '@mui/material/SnackbarContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from '@mui/material/Slider';
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DollarSignIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import BitcoinIcon from '@mui/icons-material/Token';
import Graph from './Graph';

const Dashboard = () => {
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };
  const handleAvatarClick = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarAnchorEl(null);
  };

  const notificationOpen = Boolean(notificationAnchorEl);
  const avatarOpen = Boolean(avatarAnchorEl);

  const notificationPopoverId = notificationOpen ? 'notification-popover' : undefined;
  const avatarPopoverId = avatarOpen ? 'avatar-popover' : undefined;



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
            md: '87.2%',
          },
          marginTop: 8,
        })}
      >
        <Toolbar>
          <IconButton size="large" color="inherit">
            <SearchIcon sx={{ color: 'rgb(192, 192, 192)' }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" color="inherit">
            <ContactsIcon sx={{ color: 'grey' }} />
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            onClick={handleNotificationClick} 
          >
            <Badge color="error" variant="dot">
              <NotificationsIcon sx={{ color: 'grey' }} />
            </Badge>
          </IconButton>

          <Popover
            id={notificationPopoverId}
            open={notificationOpen}
            anchorEl={notificationAnchorEl}
            onClose={handleNotificationClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Stack spacing={2} sx={{ padding: 2, maxWidth: 600 }}>
              <Typography>New Budget Has Been Added.</Typography>
              <Typography>Sales is Increasing Rapidly.</Typography>
              <Typography>Production Rate Has Risen by 40%.</Typography>
              <Typography>Task Completion is on the Rise.</Typography>
            </Stack>
          </Popover>

          <IconButton
            size="large"
            color="inherit"
            onClick={handleAvatarClick}
          >
            <Avatar
              alt="User Avatar"
              src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg"
              sx={{ marginLeft: 2 }}
            />
          </IconButton>

          <Popover
            id={avatarPopoverId}
            open={avatarOpen}
            anchorEl={avatarAnchorEl}
            onClose={handleAvatarClose} 
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Stack spacing={2} sx={{ padding: 2 }}>
              <Typography variant="h6">Your Profile</Typography>
              <Typography sx={{ color: 'brown'}}>username_03</Typography>
              <Typography sx={{ color: 'brown' }}>user@gmail.com</Typography>
              <Typography variant="h6">Your Status</Typography>
              <Typography sx={{ color: 'red' }}>Online</Typography>
              <Typography variant="h6">Production</Typography>
              <Typography sx={{ color: 'green' }}>75% Increment</Typography>
            </Stack>
          </Popover>
        </Toolbar>
      </AppBar>
    

      <Box sx={{ paddingLeft: '210px', marginTop: '-10px' }}>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={3}>
            <Card sx={{ minHeight: '50px' }}>
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
          <Grid item xs={12}>
            <Graph />
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
