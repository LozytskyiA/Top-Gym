import React, { FC, useEffect } from 'react';
import { HomeWrapper } from './home.styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { observer } from "mobx-react";
import { getLoggedUser } from '../../../services/top-gym/auth.api';

export const Home: FC<any> = observer(({ store }) => {  

  const isAuth = async() => {
    try {
      const { data: user } = await getLoggedUser();
      store.user.loginUser(user);
      store.auth.login();
    } catch(error) {
      store.user.loginUser({
        name: '',
        last_name: '',
        email: '',
        role: '',
      })
    }
  }

  useEffect(() => {
    isAuth();
  }, [store.auth.isLogin])


  if (store.user.role === 'Coach') {
    return (
      <HomeWrapper>
      <h1>Coach</h1>
      <Link to='/create/program'>
          <Button variant="contained" color="default">Create program</Button>
          <Button variant="contained" color="default">Assign program</Button>
      </Link>
    </HomeWrapper>
    )
  } else if (store.user.role === 'Athlete') {
    return (
      <HomeWrapper>
        <h1>Athlete</h1>
        <Link to='/program'>
            <Button variant="contained" color="default">My program</Button>
        </Link>
      </HomeWrapper>
    );
  } else {
    return (
      <HomeWrapper>
        <h1>HELLO PAGE</h1>
        <Link to='/registrate'>
            <Button variant="contained" color="default">Sign in</Button>
        </Link>
      </HomeWrapper>
    );
  }
})
