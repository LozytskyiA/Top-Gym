import React, { FC } from "react"
import { HeaderWrapper, MenuWrapper } from './header.styles';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";


export const Header: FC = () =>  {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Button variant="contained" color="default">LOGO</Button>
      </Link>
      <MenuWrapper>
        <Link to='/login'>
          <Button variant="contained" color="secondary">login</Button>
        </Link>
        <Link to='/registrate'>
          <Button variant="contained" color="default">Sign in</Button>
        </Link>
      </MenuWrapper>
    </HeaderWrapper>
  );
}
