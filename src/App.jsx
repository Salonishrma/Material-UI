import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ProminentAppBar from './navbar';
import ResponsiveDrawer from './Drawer';
import Dashboard from './dashboard';
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ProminentAppBar onMenuClick={toggleDrawer} />
      <ResponsiveDrawer
        open={drawerOpen} // Pass the drawer open state
        onClose={toggleDrawer} // Pass the toggle function to handle closing
      >
        <Box sx={{ flexGrow: 1, paddingTop: '84px' }}>
          <Dashboard />
        </Box>
      </ResponsiveDrawer>

    </Box>
  );
}

export default App;
