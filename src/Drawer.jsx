import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const drawerWidth = 240; 


export default function ResponsiveDrawer({ open, onClose, children }) {
  const drawerContent = (
    <Box
      sx={{
        backgroundColor: '#002244', 
        color: 'white',
        padding: 2,
        paddingTop: 8, 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#073980',
          padding: 1,
          marginTop:1
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          Devias
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: 16,
          }}
        >
          Production
        </Typography>
      </Box>

      <Divider
        sx={{
          backgroundColor: 'rgb(176,196,222)',
          marginY: 1,
        }}
      />

      <List>
        {[
          { text: 'Overview', icon: <BarChartIcon /> },
          { text: 'Customers', icon: <PeopleIcon /> },
          { text: 'Companies', icon: <BusinessCenterIcon /> },
          { text: 'Account', icon: <AccountCircleIcon /> },
          { text: 'Settings', icon: <SettingsIcon /> },
          { text: 'Login', icon: <LoginIcon /> },
          { text: 'Register', icon: <HowToRegIcon /> },
          { text: 'Error', icon: <ErrorOutlineIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#073980',
                  '& .MuiListItemIcon-root': {
                    color: 'rgb(123,104,238)',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
        <Drawer
          variant="temporary"
          open ={open}
          onclose={onClose}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#002244', 
            },
          }}
        >
          {drawerContent}
        </Drawer>
        

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}