/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { BankMenuContext } from 'pages/BankMenu/context/BankMenuContext';
import { TransactionContext } from 'pages/BankMenu/context/TransactionContext';
import { BankTypeEnum } from 'pages/BankMenu/models/BankTypeEnum';
import React, { useContext } from 'react';
import { useStyles } from './styles';

export const TransactionContainer: React.FC = () => {
  const {
    data: { accounts, trnasaction, message },
    mutations: { setTransaction, create },
  } = useContext(TransactionContext);

  const {
    mutations: { setBankType },
  } = useContext(BankMenuContext);

  const classes = useStyles();

  const handleCrateAccount = (): void => {
    setBankType(BankTypeEnum.CREATE_ACCOUNT);
  };

  if (accounts.length === 0) {
    return (
      <Grid className={classes.containerText} item xs={12} md={12}>
        <Typography variant="body2" align="center" color="textSecondary">
          A&uacute;n no tienes cuentas registradas para realizar transacciones,
          haz click{' '}
          <a href="#" onClick={handleCrateAccount}>
            aqu&iacute;
          </a>{' '}
          para crear una.
        </Typography>
      </Grid>
    );
  }
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
            Realiza una transacci&oacute;n y pasa dinero entre cuentas
          </Typography>
          <Typography
            className={
              message === 'Transacción realizada correctamente.'
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
            select
            //   error={clave.show}
            value={trnasaction.cuentaOrigen}
            //   helperText={clave.show && clave.error}
            onChange={(e) =>
              setTransaction((value) => {
                return { ...value, cuentaOrigen: e.target.value };
              })
            }
            label="Cuenta origen"
            variant="outlined"
          >
            {accounts.map(({ id, numeroCuenta, nombre }) => (
              <MenuItem key={id} value={numeroCuenta}>
                {nombre} con referencia: {numeroCuenta}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.input}
            fullWidth
            //   error={nombre.show}
            value={trnasaction.cuentaDestino}
            //   helperText={nombre.show && nombre.error}
            onChange={(e) =>
              setTransaction((value) => {
                return { ...value, cuentaDestino: e.target.value };
              })
            }
            label="Número de cuenta destino"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            fullWidth
            //   error={nombre.show}
            value={trnasaction.valor}
            //   helperText={nombre.show && nombre.error}
            onChange={(e) =>
              setTransaction((value) => {
                return { ...value, valor: parseFloat(e.target.value) };
              })
            }
            type="number"
            label="Valor a trasferir"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            className={classes.button}
            onClick={create}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
