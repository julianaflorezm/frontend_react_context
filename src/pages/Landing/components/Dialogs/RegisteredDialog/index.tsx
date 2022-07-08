import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

export interface RegisteredDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const RegisteredDialog: React.FC<RegisteredDialogProps> = ({
  open,
  onClose,
  description,
  title,
  children,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      keepMounted
      fullScreen={false}
      open={open}
      onClose={onClose}
      title="registered-dialog"
      aria-labelledby="User singup"
      aria-describedby="Register user into bank"
    >
      <DialogTitle className={classes.container}>
        <span title="titulo" className={classes.title}>
          {title}
        </span>
      </DialogTitle>
      <DialogContent className={classes.container}>
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.description}
          >
            <span title="descripcion">{description}</span>
          </Typography>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
};
