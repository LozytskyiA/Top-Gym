import React, { FC, useState } from 'react';
import { LoginWrapper, FormWrapper } from './login.styles';
import { Input } from '../../../shared/Input';
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import { logInUser } from '../../../../services/top-gym/auth.api';
import { SnackBar } from '../../../shared/Snackbar';
import { inputValidation } from '../../../../untils/inputValidation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }),
);

export const Login: FC = () => {
  const classes = useStyles();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password_salt: ''
  })
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setUserLogin((prevState => ({
      ...prevState,
      ...{
        [event.target.name]: event.target.value,
      }
    })))
  }

  const login = () => {
    if(inputValidation(userLogin)) {
      logInUser(userLogin);
    } else {
      setOpen(true)
    }
  }

  return (
    <LoginWrapper>
      <h1>Login</h1>
      <FormWrapper className={classes.form} onSubmit={login}>
        <Input inputChangeHandler={changeHandler} label={'email'} inputName={'email'} value={userLogin.email} />
        <Input inputChangeHandler={changeHandler} label={'password'} inputName={'password_salt'} value={userLogin.password_salt} />
        <Button onClick={login} variant="contained" color="secondary">Login</Button>
        <SnackBar open={open} message='All fields must be filled.' handleClose={handleClose} severity='error'/>
      </FormWrapper>
    </LoginWrapper>
  );
}

