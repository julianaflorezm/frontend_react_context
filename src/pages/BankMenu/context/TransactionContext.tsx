import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TransactionModel } from '../models/TransactionModel';
import { SessionContext } from '../../../context/SessionContext';
import {
  persistTransaction,
  createTransaction,
  restoreTransaccion,
  listTransactionsByAccount,
} from '../services/transactionService';
import { listAccountsByUser } from '../services/accountService';
import { AccountCreatedModel } from '../models/AccountCreatedModel';
import { TransactionCreatedModel } from '../models/TransactionCreatedModel';

export const useStateContainer = (
  initialState: {
    transaction: TransactionModel;
  },
  sessionContext: typeof SessionContext,
) => {
  const {
    data: { userId },
  } = useContext(sessionContext);
  const [trnasaction, setTransaction] = useState<TransactionModel>(
    initialState.transaction,
  );
  const [accounts, setAccounts] = useState<AccountCreatedModel[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const [transactions, setTransactions] = useState<TransactionCreatedModel[]>(
    [],
  );
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    persistTransaction(trnasaction);
  }, [trnasaction]);

  const getTransactions = async (): Promise<void> => {
    try {
      const list = await listTransactionsByAccount({ id: selected });
      setTransactions(list);
    } catch (error: any) {
      if (error.response.data.message) {
        setMessage(error.response.data.message);
      }
    }
  };

  const getAccounts = useCallback(async () => {
    try {
      const list = await listAccountsByUser({ idUsuario: userId });
      setAccounts(list);
    } catch (error: any) {
      if (error.response.data.message) {
        setMessage(error.response.data.message);
      }
    }
  }, [userId]);

  useEffect(() => {
    getAccounts();
  }, [getAccounts]);

  const create = async (): Promise<void> => {
    if (trnasaction.cuentaOrigen === '') {
      setMessage('Selecciona la cuenta origen');
    } else if (trnasaction.cuentaDestino === '') {
      setMessage('La cuenta destino es requerida');
    } else if (trnasaction.valor <= 0) {
      setMessage('El valor a transferir debe ser mayor a cero');
    } else {
      try {
        await createTransaction({
          ...trnasaction,
          fechaCreacion: new Date(),
        });

        setMessage('Transacción realizada correctamente.');
      } catch (error: any) {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
        }
      }
    }
  };

  return {
    data: { trnasaction, accounts, message, transactions, selected },
    mutations: {
      setTransaction,
      create,
      setMessage,
      setSelected,
      getTransactions,
    },
  };
};

export const TransactionContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as any);

export const TransactionProvider: React.FC = ({ children }) => {
  const initialState = {
    transaction: restoreTransaccion(),
  };
  const contextValue = useStateContainer(initialState, SessionContext);
  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
