import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FlightIcon from '@mui/icons-material/Flight';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearch = () => {
    console.log(`Search Query: ${searchQuery}`);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" className='h-24'>
      <Toolbar sx={{ width: '100%', height: '100%',justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <FlightIcon sx={{ mr: 1, transform: 'rotate(-90deg)', color: '#FF385C' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FF385C' }}>
            airbnb
          </Typography>
        </Link>

        {!isMobile && (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            border: '1px solid #e0e0e0', 
            borderRadius: '24px', 
            padding: '2px 4px',
            boxShadow: 1,
            width: 'auto',
            maxWidth: '400px'
          }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Anywhere"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Box sx={{ mx: 1, height: 24, borderLeft: '1px solid #e0e0e0' }} />
            <InputBase
              sx={{ flex: 1 }}
              placeholder="Any week"
            />
            <Box sx={{ mx: 1, height: 24, borderLeft: '1px solid #e0e0e0' }} />
            <InputBase
              sx={{ flex: 1 }}
              placeholder="Add guests"
            />
            <IconButton type="button" sx={{ p: '10px', color: 'white', bgcolor: '#FF385C' }} onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <Button color="inherit">Become a host</Button>
          )}
          <IconButton
            size="large"
            edge="end"
            onClick={handleMenu}
            color="inherit"
            sx={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '24px', 
              padding: '5px 10px',
              ml: 2
            }}
          >
            <MenuIcon />
            <AccountCircleIcon sx={{ ml: 1 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Sign up</MenuItem>
            <MenuItem onClick={handleClose}>Log in</MenuItem>
            {isMobile && <MenuItem onClick={handleClose}>Become a host</MenuItem>}
            <MenuItem onClick={handleClose}>Help</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};