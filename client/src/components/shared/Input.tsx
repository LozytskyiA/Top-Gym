import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

interface IInputProps {
  inputChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string,
  inputName: string,
  value: string
}

export const Input: FC<IInputProps> = (props) => {
  const { 
    inputChangeHandler,
    label,
    inputName,
    value,
   } = props

  return (
    <TextField 
      onChange={inputChangeHandler}
      id="outlined-basic"
      label={label}
      name={inputName}
      variant="outlined"
      value={value}
    />
  );
}
