import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from  '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
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
const miniDrawerWidth = 60; 

export default function ResponsiveDrawer({ open, onClose, children, expanded }) {
  const drawerContent = (
    <Box
      sx={{
        backgroundColor: '#002244',
        color: 'white',
        padding: expanded ? 2 : 1,
        paddingTop: expanded ? 8 : 3,  
      }}
    >
      {expanded && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#073980',
            padding: 1,
            marginBottom: 2,  
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Devias
          </Typography>

          <Typography variant="body1" sx={{ fontSize: 16 }}>
            Production
          </Typography>
        </Box>
      )}

      <Divider sx={{ backgroundColor: 'rgb(176,196,222)', marginY: 1 }} />

      <List sx={{ marginTop: expanded ? 1 : 4 }}> 
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
              {expanded && <ListItemText primary={item.text} />}
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
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            width: expanded ? drawerWidth : miniDrawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#002244',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
