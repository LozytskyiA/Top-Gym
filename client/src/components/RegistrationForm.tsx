import React, {FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import { registerUser } from "../services/top-gym/top-gym.api";
import { Input } from './shared/Input';
import { Select } from './shared/Select';

interface User {
  name: string;
  last_name: string;
  email: string;
  password_salt: string;
  role: string;
}

const RegistrationForm: FC = () => {
  const emptyUserData: User = {
    name: '',
    last_name: '',
    email: '',
    password_salt: '',
    role: '',
  }

  const [user, setUser] = useState<User>(emptyUserData)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setUser((prevState => ({
      ...prevState,
      ...{
        [event.target.name]: event.target.value,
      }
    })))
  }

  const createUser = async () => {
    try {
      await registerUser(user);
      setUser(emptyUserData)
      console.log('sadfsa');
    } catch(error) {
      console.log(error);
    }
  }

  const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];
  
  return (
    <form noValidate autoComplete="off" onSubmit={createUser}>
      {Object.keys(user).map((label) => (
        label !== 'role'
        ? <Input inputChangeHandler={changeHandler} value={getKeyValue(label)(user)} label={label} key={label} inputName={label} />
        : <Select inputChangeHandler={changeHandler} value={user.role} label={label} key={label} selectName={label} />
      ))}
      <Button onClick={createUser} variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}

export default RegistrationForm;
