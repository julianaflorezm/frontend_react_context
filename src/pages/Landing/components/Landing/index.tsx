import React, { useState } from 'react';
import { Typography, TextField, Grid, Button } from '@material-ui/core';
import Logo from 'assets/image/bank.png';
import { RegisterUserModel } from 'pages/Landing/models/RegisterUserModel';
import { getUser, validatePassword } from '../../services/userService';
import { RegisteredFormDialog } from '../Dialogs/RegisteredFormDialog/index';
import { useStyles } from './styles';

export interface LandingProps {
  onUsername: (name: string) => void;
  onId: (id: number) => void;
}

export const Landing: React.FC<LandingProps> = ({ onUsername, onId }) => {
  const classes = useStyles();
  const [nombre, setNombre] = useState({ value: '', error: '', show: false });
  const [clave, setClave] = useState({ value: '', error: '', show: false });
  const [open, setOpen] = useState(false);

  const validarClave = async () => {
    try {
      const data = await validatePassword({
        nombre: nombre.value,
        clave: clave.value,
      });
      if (data) {
        try {
          const [user] = await getUser(nombre.value);
          if (user.id) {
            onId(user.id);
            onUsername(nombre.value);
          }
        } catch (error: any) {
          if (error.response?.data.message) {
            setNombre({
              value: '',
              error: error.response?.data.message,
              show: true,
            });
          }
        }
      }
    } catch (error: any) {
      if (
        error.response?.data.message === 'La contraseña no es correcta' ||
        error.response?.data.message ===
          'El tamaño mínimo de la clave debe ser 4'
      ) {
        setClave({
          value: '',
          error: error.response?.data.message,
          show: true,
        });
      }
      if (
        error.response?.data.message ===
        `El nombre de usuario ${nombre.value.toLowerCase()} no existe, regístrese primero.`
      ) {
        setNombre({
          value: '',
          error: error.response?.data.message,
          show: true,
        });
      }
    }
  };

  const handleInput = () => {
    if (nombre.value.length <= 0 || nombre.value.includes(':')) {
      setNombre({
        value: '',
        error: 'Ingrese su nombre de usuario',
        show: true,
      });
      return;
    }

    if (clave.value.length < 4) {
      setClave({
        value: '',
        error: 'La clave debe tener mínimo 4 caracteres',
        show: true,
      });
      return;
    }
    validarClave();
  };

  const handleRegister = () => setOpen(true);

  return (
    <>
      <RegisteredFormDialog
        title="Regístrate con nosotros"
        description="¡haz parte de nuestra gran compañía!"
        open={open}
        onClose={() => setOpen(false)}
      />
      <Grid className={classes.position} container item xs={4} md={2}>
        <Button
          fullWidth
          variant="contained"
          className={classes.buttonReg}
          onClick={() => handleRegister()}
        >
          Registrarse
        </Button>
      </Grid>
      <Grid container className={classes.container}>
        <Grid justify="center" container item xs={10} md={6}>
          <Grid item>
            <div className={classes.containerImg}>
              <img className={classes.img} src={Logo} alt="Logo" />
            </div>
            <Typography
              className={classes.title}
              variant="body2"
              align="center"
              color="textSecondary"
            >
              Bienvenido a su banco
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              Ingrese con su usuario y contraseña
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              className={classes.input}
              fullWidth
              error={nombre.show}
              value={nombre.value}
              helperText={nombre.show && nombre.error}
              onChange={(e) =>
                setNombre({ value: e.target.value, error: '', show: false })
              }
              label="Nombre de usuario"
              variant="outlined"
            />
            <TextField
              className={classes.input}
              fullWidth
              error={clave.show}
              value={clave.value}
              helperText={clave.show && clave.error}
              onChange={(e) =>
                setClave({ value: e.target.value, error: '', show: false })
              }
              type="password"
              label="Clave"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              className={classes.button}
              onClick={() => handleInput()}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
