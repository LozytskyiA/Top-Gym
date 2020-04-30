import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

interface IInputProps {
  inputChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string,
  inputName: string,
  value: string,
  errorHandler? : boolean
}

export const Input: FC<IInputProps> = (props) => {
  const { 
    inputChangeHandler,
    label,
    inputName,
    value,
    errorHandler,
   } = props

  return (
    <TextField 
      onChange={inputChangeHandler}
      id="outlined-basic"
      error={errorHandler}
      label={
        inputName === 'password_salt' 
        ? 'password' 
        : inputName
      }
      name={inputName}
      variant="outlined"
      value={value}
      required
      type={
        label === 'password' || label === 'password_salt' 
        ? 'password' 
        : 'text'
    }
    />
  );
}
