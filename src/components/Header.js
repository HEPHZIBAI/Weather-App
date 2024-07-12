import React from 'react'
import { AppBar, Avatar, Badge, Box, styled, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
          <Typography variant='h5'>Weather Today</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <FavoriteIcon/>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
          </Box>
        </StyledToolBar>
      </AppBar>
  )
}

export default Header

