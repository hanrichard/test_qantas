import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Header = () => {
  return (
    <Wrapper>
      <AppBar>
        <Toolbar>
          <Container maxWidth="sm"><Typography variant="h6">Airport datas</Typography></Container>
        </Toolbar>
      </AppBar>
    </Wrapper>
  )
};

export default Header;
