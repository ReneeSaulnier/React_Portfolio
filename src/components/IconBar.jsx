import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { GrLinkedin } from 'react-icons/gr';
import { BiFile } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const IconBar = () => {
  const navItems = [
    { icon: <AiOutlineGithub />, label: 'GitHub', path:'https://github.com/ReneeSaulnier' },
    { icon: <GrLinkedin />, label: 'LinkedIn', path:'https://ca.linkedin.com/in/renee-saulnier-34304122b?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F'},
    { icon: <BiFile />, label: 'Resume', path:'https://renee-saulnier.vercel.app/'}
  ];

  return (
    <Box sx={{ position: 'fixed', left: 0, top: '40%', transform: 'translateY(-50%)' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#181818' }}>
        <Toolbar>
          <Box>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={item.path}
                target="_blank"
                key={item.label}
                sx={{
                  color: '#fff',
                  fontSize: '2.5rem',
                  padding: '2rem',
                  '&:hover': {
                    backgroundColor: '#ffcc00',
                    color: '#fff',
                    transition: 'all 0.8s ease'
                  }
                }}
              >
                {item.icon}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default IconBar;
