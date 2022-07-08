import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { RegisteredDialog } from '../RegisteredDialog/index';
import { saveUser } from '../../../services/userService';
import { useStyles } from './styles';

export interface RegisteredFormDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const RegisteredFormDialog: React.FC<RegisteredFormDialogProps> = ({
  onClose,
  open,
  title,
  description,
}) => {
  const [username, setUsername] = useState({
    value: '',
    error: '',
    show: false,
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
    show: false,
  });

  const [message, setMessage] = useState('');

  const handleClose = (): void => {
    onClose();
  };

  const registerUser = async () => {
    try {
      await saveUser({
        nombre: username.value,
        clave: password.value,
      });
      setMessage('Usuario creado con éxito');
      window.setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } catch (error: any) {
      if (error.response?.data.message) {
        setUsername({
          value: '',
          error: error.response?.data.message,
          show: true,
        });
      }
    }
  };

  const handleRegister = (): void => {
    if (username.value.length <= 0 || username.value.includes(':')) {
      setUsername({
        value: '',
        error: 'Ingrese su nombre de usuario',
        show: true,
      });
      return;
    }

    if (password.value.length < 4) {
      setPassword({
        value: '',
        error: 'La clave debe tener mínimo 4 caracteres',
        show: true,
      });
      return;
    }
    registerUser();
  };

  const classes = useStyles();
  return (
    <RegisteredDialog
      open={open}
      onClose={handleClose}
      title={title}
      description={message !== '' ? message : description}
    >
      <Grid item md={6} xs={12}>
        <TextField
          title="username"
          className={classes.input}
          fullWidth
          error={username.show}
          value={username.value}
          helperText={username.show && username.error}
          onChange={(e) =>
            setUsername({ value: e.target.value, error: '', show: false })
          }
          label="Nombre de usuario"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          fullWidth
          title="password"
          error={password.show}
          value={password.value}
          helperText={password.show && password.error}
          onChange={(e) =>
            setPassword({ value: e.target.value, error: '', show: false })
          }
          type="password"
          label="Clave"
          variant="outlined"
        />
        <Button
          fullWidth
          variant="contained"
          className={classes.button}
          onClick={() => handleRegister()}
        >
          Registrarme
        </Button>
      </Grid>
    </RegisteredDialog>
  );
};
