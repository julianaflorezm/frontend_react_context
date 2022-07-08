/* eslint-disable no-restricted-globals */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { SessionContext } from 'context/SessionContext';
import {
  createAccount,
  persistAccount,
  restoreAccount,
} from '../services/accountService';
import { AccountModel } from '../models/AccountModel';

export const useStateContainer = (
  initialState: { account: AccountModel },
  sessionContext: typeof SessionContext,
) => {
  const {
    data: { userId },
  } = useContext(sessionContext);
  const [account, setAccount] = useState<AccountModel>(initialState.account);
  const [message, setMessage] = useState<string>('');

  const tiposCuentas = ['Cuenta de ahorro'];

  useEffect(() => {
    persistAccount(account);
  }, [account]);

  const create = async (): Promise<void> => {
    if (isNaN(account.saldo)) {
      setMessage('El saldo inicial es requerido');
    } else if (!account.nombre) {
      setMessage('El tipo de cuenta es requerido');
    } else {
      try {
        await createAccount({
          ...account,
          fechaCreacion: new Date('2022-01-10 11:00:00'),
          idUsuario: userId,
        });
        setMessage('Cuenta de ahorro creada exitosamente');
      } catch (error: any) {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        }
      }
    }
  };

  return {
    data: { account, tiposCuentas, message },
    mutations: { setAccount, create, setMessage },
  };
};

export const AccountContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as any);

export const AccountProvider: React.FC = ({ children }) => {
  const initialState = {
    account: restoreAccount(),
  };
  const contextValue = useStateContainer(initialState, SessionContext);
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};
