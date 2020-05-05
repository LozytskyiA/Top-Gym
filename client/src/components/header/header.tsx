import React, { FC } from "react"
import { HeaderWrapper, MenuWrapper } from './header.styles';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { observer } from "mobx-react";
import { logOutUser } from "../../services/top-gym/auth.api";

export const Header: FC<any> = observer(({ store }) =>  {
  const logOut = () => {
    try{
      logOutUser();
      store.auth.logOut();
    } catch(error) {
      console.log(error)
    }
  }

  const noLogindUser = (
    <MenuWrapper>
      <Link to='/login'>
        <Button variant="contained" color="secondary">login</Button>
      </Link>
      <Link to='/registrate'>
        <Button variant="contained" color="default">Sign in</Button>
      </Link>
    </MenuWrapper>
  )

  const loginUser = (
    <MenuWrapper>
      <Button onClick={logOut} variant="contained" color="secondary">Logout</Button>
    </MenuWrapper>
  )

  return (
    <HeaderWrapper>
      <Link to="/">
        <Button variant="contained" color="default">LOGO</Button>
      </Link>
      {
        store.auth.isLogin
          ? loginUser 
          : noLogindUser
      }
    </HeaderWrapper>
  );
})
