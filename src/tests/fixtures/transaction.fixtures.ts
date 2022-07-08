import { cloneDeep } from 'lodash';
import { TransactionCreatedModel } from '../../pages/BankMenu/models/TransactionCreatedModel';
import * as accountFixture from './account.fixture';

export const getSingle = (
  account?: Partial<TransactionCreatedModel>,
): TransactionCreatedModel =>
  cloneDeep({
    id: 1,
    valor: 4000,
    costo: 1000,
    esCuentaOrigen: true,
    createdAt: new Date('2022/0303'),
    origen: accountFixture.getSingle(),
    destino: accountFixture.getSingle(),
  });
