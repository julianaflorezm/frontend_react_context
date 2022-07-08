import { cloneDeep } from 'lodash';
import { AccountCreatedModel } from '../../pages/BankMenu/models/AccountCreatedModel';
import * as userFixture from './user.fixture';

export const getSingle = (
  account?: Partial<AccountCreatedModel>,
): AccountCreatedModel =>
  cloneDeep({
    id: 15,
    numeroCuenta: 'string',
    nombre: 'Cuenta de ahorro',
    saldo: 600000,
    createdAt: 'string',
    updatedAt: 'string',
    usuario: userFixture.getSingle(),
  });

export const getSingle2 = (
  account?: Partial<AccountCreatedModel>,
): AccountCreatedModel =>
  cloneDeep({
    id: 16,
    numeroCuenta: 'string2',
    nombre: 'Cuenta de ahorro',
    saldo: 60000,
    createdAt: 'string',
    updatedAt: 'string',
    usuario: userFixture.getSingle(),
  });
