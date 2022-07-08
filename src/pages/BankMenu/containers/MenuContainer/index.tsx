import React, { useContext } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Fab,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import FolderSharedRoundedIcon from '@material-ui/icons/FolderSharedRounded';
import { BankMenuContext } from 'pages/BankMenu/context/BankMenuContext';
import { BankTypeEnum } from '../../models/BankTypeEnum';
import { useStyles } from './styles';

export const MenuContainer: React.FC = () => {
  const {
    data: { bankType },
    mutations: { setBankType },
  } = useContext(BankMenuContext);
  const classes = useStyles();
  return (
    <BottomNavigation
      value={bankType}
      onChange={(event, newValue) => setBankType(newValue)}
      showLabels
      className={classes.stick}
    >
      <BottomNavigationAction
        value={BankTypeEnum.MINE}
        label="Inicio"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Crear una cuenta"
        value={BankTypeEnum.CREATE_ACCOUNT}
        icon={<FolderSharedRoundedIcon />}
      />
      <BottomNavigationAction
        label="Realizar transaccion"
        value={BankTypeEnum.PASS_MONEY}
        icon={<SendRoundedIcon />}
      />
      <BottomNavigationAction
        label="Salir"
        value={BankTypeEnum.LOGOUT}
        icon={<LogoutIcon />}
        onClick={() => {
          localStorage.removeItem('SESSION_ID');
          window.location.href = '/';
        }}
      />
    </BottomNavigation>
  );
};
