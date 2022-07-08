/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { BankMenuContext } from 'pages/BankMenu/context/BankMenuContext';
import { BankTypeEnum } from 'pages/BankMenu/models/BankTypeEnum';
import { TransactionContext } from 'pages/BankMenu/context/TransactionContext';
import { CardListTransaction } from 'pages/BankMenu/components/Cards/CardListTransaction';
import { useStyles } from './styles';
import { CardListAccount } from '../../components/Cards/CardListAccount';

export const HomeContainer: React.FC = () => {
  const classes = useStyles();
  const {
    data: { accounts, transactions, selected },
    mutations: { setSelected, getTransactions },
  } = useContext(TransactionContext);

  const {
    mutations: { setBankType },
  } = useContext(BankMenuContext);

  useEffect(() => {
    if (selected !== 0) {
      getTransactions();
    }
  }, [getTransactions, selected]);

  const handleCrateAccount = (): void => {
    setBankType(BankTypeEnum.CREATE_ACCOUNT);
  };

  if (accounts.length === 0) {
    return (
      <Grid className={classes.containerText} item xs={12} md={12}>
        <Typography variant="body2" align="center" color="textSecondary">
          A&uacute;n no tienes cuentas registradas, haz click{' '}
          <a href="#" onClick={handleCrateAccount}>
            aqu&iacute;
          </a>{' '}
          para crear una.
        </Typography>
      </Grid>
    );
  }
  return (
    <>
      <Col className={classes.container} xs={12} md={12}>
        <Row>
          <Col xs={6} sm={6} md={6} xl={6}>
            <Grid item>
              <Typography
                className={classes.title}
                variant="body2"
                align="center"
                color="textSecondary"
              >
                Mis cuentas
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <CardListAccount
                accounts={accounts}
                setSelected={setSelected}
                selected={selected}
              />
            </Grid>
          </Col>
          <Col xs={6} sm={6} md={6} xl={6}>
            <Grid item>
              <Typography
                className={classes.title}
                variant="body2"
                align="center"
                color="textSecondary"
              >
                Movimientos y saldos
              </Typography>
            </Grid>
            {selected !== 0 ? (
              <Grid>
                {transactions.length > 0 ? (
                  <CardListTransaction transactions={transactions} />
                ) : (
                  <Typography
                    variant="body2"
                    align="center"
                    color="textSecondary"
                  >
                    A&uacute;n no tienes transacciones disponibles
                  </Typography>
                )}
              </Grid>
            ) : (
              <Typography variant="body2" align="center" color="textSecondary">
                Selecciona una cuenta para visualizar tus transacciones
              </Typography>
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
};
