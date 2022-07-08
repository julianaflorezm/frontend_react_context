import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { Card, CardContent, Typography } from '@material-ui/core';
import { TransactionCreatedModel } from '../../../models/TransactionCreatedModel';
import { useStyles } from './styles';

export interface TransactionCardItemProps {
  transaction: TransactionCreatedModel;
}

export const CardItemTransaction: React.FC<TransactionCardItemProps> = ({
  transaction: {
    id,
    valor,
    fechaCreacion,
    esCuentaOrigen,
    origen: { nombre },
  },
}) => {
  const classes = useStyles();
  return (
    <Card key={id}>
      <CardContent>
        <Typography gutterBottom>
          {moment(fechaCreacion).locale('es').format('LL')}
        </Typography>
        {!esCuentaOrigen ? (
          <Typography>Transferencia desde {nombre} </Typography>
        ) : (
          <Typography>Transferencia a {nombre} </Typography>
        )}
        <Typography
          variant="body2"
          className={!esCuentaOrigen ? classes.destino : classes.origen}
        >
          $ {valor}
        </Typography>
      </CardContent>
    </Card>
  );
};
