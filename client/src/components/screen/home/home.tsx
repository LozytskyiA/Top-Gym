import React, { FC } from 'react';
import { HomeWrapper } from './home.styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const Home: FC = () => {
  return (
    <HomeWrapper>
      <h1>HOME PAGE</h1>
      <Link to='/registrate'>
          <Button variant="contained" color="default">Sign in</Button>
      </Link>
    </HomeWrapper>
  );
}
