import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ProminentAppBar({ onMenuClick, onCloseClick, onLeftArrowClick, onRightArrowClick }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <Toolbar>
    
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          MUI
        </Typography>

   
        <IconButton
          size="large"
          color="inherit"
          aria-label="back"
          onClick={onLeftArrowClick}
          sx={{ mr: 2, color: 'rgb(192, 192, 192)' }}
        >
          <ChevronLeftIcon />
        </IconButton>

        
        <IconButton
          size="large"
          color="inherit"
          aria-label="forward"
          onClick={onRightArrowClick}
          sx={{ mr: 2, color: 'rgb(192, 192, 192)' }} 
        >
          <ChevronRightIcon />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="more options"
          sx={{ color: 'grey' }} 
        >
          <MoreIcon />
        </IconButton>

        
        <IconButton
          size="large"
          color="inherit"
          aria-label="close"
          onClick={onCloseClick}
          sx={{ color: 'grey' }} 
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}