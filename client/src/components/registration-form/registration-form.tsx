import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import { registerUser } from "../../services/top-gym/top-gym.api";
import { Input } from '../shared/Input';
import { Select } from '../shared/Select';
import { FormWrapper } from './registration-form.styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { inputValidation } from '../../untils/inputValidation';
import { SnackBar } from '../shared/Snackbar';

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

interface User {
  name: string;
  last_name: string;
  email: string;
  password_salt: string;
  role: string;
}

export const RegistrationForm: FC = () => {
  const classes = useStyles();
  const emptyUserData: User = {
    name: '',
    last_name: '',
    email: '',
    password_salt: '',
    role: '',
  }

  const [user, setUser] = useState<User>(emptyUserData)
  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setUser((prevState => ({
      ...prevState,
      ...{
        [event.target.name]: event.target.value.trim(),
      }
    })))
  }

  const createUser = async () => {
    if(inputValidation(user)) {
      try {
        await registerUser(user);
        setUser(emptyUserData)
      } catch(error) {
        console.log(error);
      }
    } else {
      setOpen(true)
    }
  }

  const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];
  
  return (
    <FormWrapper className={classes.form} noValidate autoComplete="off" onSubmit={createUser}>
      {Object.keys(user).map((label) => (
        label !== 'role'
        ? <Input inputChangeHandler={changeHandler} value={getKeyValue(label)(user)} label={label} key={label} inputName={label} />
        : <Select inputChangeHandler={changeHandler} value={user.role} label={label} key={label} selectName={label} />
      ))}
      <Button onClick={createUser} variant="contained" color="secondary">
        Submit
      </Button>
      <SnackBar open={open} message='All fields must be filled.' handleClose={handleClose} severity='error'/>
    </FormWrapper>
  );
}
