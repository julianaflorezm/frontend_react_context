/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import { AccountCreatedModel } from '../../../models/AccountCreatedModel';
import { useStyles } from './styles';

export interface AccountCardItemProps {
  selected: number;
  account: AccountCreatedModel;
  setSelected: (id: number) => void;
}

export const CardItemAccount: React.FC<AccountCardItemProps> = ({
  selected,
  account: { id, numeroCuenta, saldo, nombre },
  setSelected,
}) => {
  const classes = useStyles();
  const onClick = (): void => {
    setSelected(id);
  };
  return (
    <Card
      key={id}
      className={
        selected === id ? classes.containerSelected : classes.container
      }
    >
      <CardActionArea title="action" onClick={onClick}>
        <CardContent>
          <Typography gutterBottom>
            <span title="nombre">{nombre} con referencia:</span>
          </Typography>
          <Typography>
            <span title="numero">{numeroCuenta}</span>
          </Typography>
          <Typography variant="body2">
            <span title="saldo"> Saldo disponible: ${saldo}</span>{' '}
          </Typography>
        </CardContent>
        <CardActions className={classes.position}>
          <a
            className={selected === id ? classes.linkSelected : classes.link}
            href="#"
            onClick={onClick}
          >
            Ver movimientos
          </a>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
