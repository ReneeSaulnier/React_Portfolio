import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaCode } from 'react-icons/fa';

const NavBar = () => {
  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];
  const logo = <FaCode />;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#121212' }}>
        <Toolbar>
          <Button component={Link} to='/' sx={{ padding: 1.5, color: "white", '&:hover': {color: '#ffcc00', backgroundColor: '#121212'}, }}>
            <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '3rem' }}>
              {logo}
            </Typography>
          </Button>
          <Box sx={{ ml: 'auto', display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: '#fff',
                  fontSize: '1.7rem',
                  '&:hover': {
                    backgroundColor: '#ffcc00',
                    color: '#fff',
                  },
                  marginLeft: '1rem',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
