import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ProminentAppBar from './navbar';
import ResponsiveDrawer from './Drawer';
import Dashboard from './dashboard';

function App() {
  const [drawerExpanded, setDrawerExpanded] = useState(false);

  const toggleDrawer = () => {
    setDrawerExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ProminentAppBar onMenuClick={toggleDrawer} />
      <ResponsiveDrawer expanded={drawerExpanded}>
        <Box sx={{ flexGrow: 1 }}>
          <Dashboard />
        </Box>
      </ResponsiveDrawer>
    </Box>
  );
}

export default App;
