import axios from 'axios';
import { AccountCreatedModel } from '../models/AccountCreatedModel';
import { AccountModel } from '../models/AccountModel';

export const ACCOUNT_IDENTIFIER = 'ACCOUNT';
const baseUrl = 'http://localhost:3000/api/cuentas';

export const createAccount = async (
  cuenta?: AccountModel,
): Promise<AccountCreatedModel> => {
  const created = await axios
    .post<AccountCreatedModel>(baseUrl, cuenta)
    .then((res) => res.data);
  return created;
};

export interface QueryUserId {
  idUsuario?: number;
}

export const listAccountsByUser = async (
  idUsuario: QueryUserId,
): Promise<AccountCreatedModel[]> => {
  const list = await axios
    .get<AccountCreatedModel[]>(`${baseUrl}/por-usuario`, { params: idUsuario })
    .then((res) => res.data);
  return list;
};

export const persistAccount = async (account: AccountModel): Promise<void> => {
  localStorage.setItem(ACCOUNT_IDENTIFIER, JSON.stringify(account));
};

export const restoreAccount = (): AccountModel => {
  const foundAccount = localStorage.getItem(ACCOUNT_IDENTIFIER)!;
  if (!foundAccount) {
    return {
      saldo: 50000,
      fechaCreacion: new Date(),
      nombre: 'Cuenta de ahorro',
      idUsuario: undefined,
    };
  }
  return JSON.parse(foundAccount);
};
