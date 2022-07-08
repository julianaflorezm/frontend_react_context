import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { AccountContext } from '../../context/AccountContext';
import { useStyles } from './styles';

export const AccountContainer: React.FC = () => {
  const {
    data: { account, tiposCuentas, message },
    mutations: { create, setAccount },
  } = useContext(AccountContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid justify="center" container item xs={10} md={6}>
        <Grid item>
          <Typography
            className={classes.title}
            variant="body2"
            align="center"
            color="textSecondary"
          >
            Crea una cuenta con nosotros
          </Typography>
          <Typography
            className={
              message === 'Cuenta de ahorro creada exitosamente'
                ? classes.success
                : classes.error
            }
            variant="body2"
            align="center"
            color="textSecondary"
          >
            {message}
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <TextField
            className={classes.input}
            fullWidth
            // error={nombre.show}
            value={account.saldo}
            // helperText={nombre.show && nombre.error}
            onChange={(e) =>
              setAccount((value) => {
                return { ...value, saldo: parseFloat(e.target.value) };
              })
            }
            type="number"
            label="Saldo inicial"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            fullWidth
            select
            // error={clave.show}
            value={account.nombre}
            // helperText={clave.show && clave.error}
            onChange={(e) =>
              setAccount((value) => {
                return { ...value, nombre: e.target.value };
              })
            }
            label="Tipo de cuenta"
            variant="outlined"
          >
            {tiposCuentas.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button
            fullWidth
            variant="contained"
            className={classes.button}
            onClick={create}
          >
            Crear cuenta
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
