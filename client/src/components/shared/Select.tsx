import React, { FC } from 'react';
import { TextField, MenuItem } from '@material-ui/core';

interface ISelectProps {
  value?: string;
  inputChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string,
  selectName: string,
  errorHandler?: boolean
}

export const Select: FC<ISelectProps> = (props) => {

  const { 
    inputChangeHandler,
    value,
    label,
    selectName,
    errorHandler,
   } = props

  return (
    <TextField onChange={inputChangeHandler} 
      value={value} 
      id="select"
      error={errorHandler}
      label={label} 
      name={selectName} 
      select 
      variant="outlined">
        <MenuItem value="Coach">Coach</MenuItem>
        <MenuItem value="Athlete">Athlete</MenuItem>
    </TextField>
  );
}
