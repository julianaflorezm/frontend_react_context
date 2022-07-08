import axios from 'axios';
import { TransactionCreatedModel } from '../models/TransactionCreatedModel';
import { TransactionModel } from '../models/TransactionModel';

export const TRANSACTION_IDENTIFIER = 'ACCOUNT';
const baseUrl = 'http://localhost:3000/api/transacciones';

export interface QueryAccountId {
  id: number;
}

export const createTransaction = async (
  transaction?: TransactionModel,
): Promise<TransactionCreatedModel> => {
  const created = await axios
    .post<TransactionCreatedModel>(baseUrl, transaction)
    .then((res) => res.data);
  return created;
};

export const persistTransaction = async (
  transaction: TransactionModel,
): Promise<void> => {
  localStorage.setItem(TRANSACTION_IDENTIFIER, JSON.stringify(transaction));
};

export const restoreTransaccion = (): TransactionModel => {
  const foundAccount = localStorage.getItem(TRANSACTION_IDENTIFIER)!;
  if (!foundAccount) {
    return {
      valor: 0,
      cuentaOrigen: '',
      cuentaDestino: '',
      fechaCreacion: undefined,
    };
  }
  return JSON.parse(foundAccount);
};

export const listTransactionsByAccount = async (
  id: QueryAccountId,
): Promise<TransactionCreatedModel[]> => {
  const list = await axios
    .get<TransactionCreatedModel[]>(`${baseUrl}/por-cuenta`, { params: id })
    .then((res) => res.data);
  return list;
};
