import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { MenuContainer } from 'pages/BankMenu/containers/MenuContainer';
import {
  BankMenuContext,
  BankMenuProvider,
} from 'pages/BankMenu/context/BankMenuContext';
import { AccountProvider } from 'pages/BankMenu/context/AccountContext';
import { TransactionProvider } from 'pages/BankMenu/context/TransactionContext';
import { AccountContainer } from 'pages/BankMenu/containers/AccountContainer';
import { TransactionContainer } from 'pages/BankMenu/containers/TransactionContainer';
import { HomeContainer } from 'pages/BankMenu/containers/HomeContainer';

import { BankTypeEnum } from './models/BankTypeEnum';

export const MenuActions: React.FC = () => {
  const {
    data: { bankType },
  } = useContext(BankMenuContext);
  let Content;
  switch (bankType) {
    case BankTypeEnum.CREATE_ACCOUNT: {
      Content = <AccountContainer />;
      break;
    }
    case BankTypeEnum.MINE: {
      Content = <HomeContainer />;
      break;
    }
    case BankTypeEnum.PASS_MONEY: {
      Content = <TransactionContainer />;
      break;
    }
    default: {
      Content = null;
      break;
    }
  }
  return <>{Content}</>;
};

export const BankMenuPage: React.FC<RouteComponentProps> = () => {
  return (
    <Container maxWidth="sm" disableGutters>
      <BankMenuProvider>
        <AccountProvider>
          <TransactionProvider>
            <MenuContainer />
            <MenuActions />
          </TransactionProvider>
        </AccountProvider>
      </BankMenuProvider>
    </Container>
  );
};
