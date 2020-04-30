import React, { FC } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ISnackbarProps {
  open: any;
  handleClose: () => void;
  message: string,
  severity?: "success" | "info" | "warning" | "error"
}

export const SnackBar: FC<ISnackbarProps> = (props) => {
  const { 
    open,
    handleClose,
    severity,
    message,
   } = props

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
    </Snackbar>
  );
}