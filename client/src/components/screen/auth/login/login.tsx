import React, { FC, useState } from 'react';
import { LoginWrapper, FormWrapper } from './login.styles';
import { Input } from '../../../shared/Input';
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import { logInUser } from '../../../../services/top-gym/auth.api';
import { SnackBar } from '../../../shared/Snackbar';
import { inputValidation } from '../../../../untils/inputValidation';
import { observer } from "mobx-react";
import { useHistory } from 'react-router-dom';

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

export const Login: FC<any> = observer(({ store }) => {
  const classes = useStyles();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password_salt: ''
  })
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  let history = useHistory();

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

  const login = async () => {
    if(inputValidation(userLogin)) {
      try{
        await logInUser(userLogin);
        store.auth.login();
        history.push("/");
      } catch (error) {
        setErrorMessage('Incorrect Password or Email.');
        setOpen(true)
        console.log(error);
      }
    } else {
      setErrorMessage('All fields must be filled.');
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
        <SnackBar open={open} message={errorMessage} handleClose={handleClose} severity='error'/>
      </FormWrapper>
    </LoginWrapper>
  );
})

