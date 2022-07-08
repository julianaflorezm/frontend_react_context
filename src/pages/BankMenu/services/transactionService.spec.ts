import nock from 'nock';
import matches from 'lodash/matches';
import * as transactionService from './transactionService';
import * as transactionFixture from '../../../tests/fixtures/transaction.fixtures';
import { TRANSACTION_IDENTIFIER } from './transactionService';
import { TransactionModel } from '../models/TransactionModel';
import { TransactionCreatedModel } from '../models/TransactionCreatedModel';

describe('Transaction service test', () => {
  let transaction: TransactionModel;

  beforeEach(() => {
    transaction = {
      cuentaOrigen: '5cff6aff9b',
      cuentaDestino: '25161b0d18',
      valor: 40000,
      fechaCreacion: new Date('2022/03/03'),
    };
  });
  it('should persist transaction', () => {
    jest.spyOn(localStorage, 'setItem');
    transactionService.persistTransaction(transaction);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      TRANSACTION_IDENTIFIER,
      JSON.stringify(transaction),
    );
  });

  it('should restore transaction', () => {
    jest.spyOn(localStorage, 'getItem');
    transactionService.restoreTransaccion();
    expect(localStorage.getItem).toHaveBeenCalledWith(TRANSACTION_IDENTIFIER);
  });

  it('should fetch listTransactionsByAccount', async () => {
    const transacctionListExp: TransactionCreatedModel[] = [];
    const params = {
      id: 20,
    } as const;
    nock('http://localhost/api/transacciones')
      .get('/por-cuenta')
      .query(params)
      .reply(200, []);
    // const data = await transactionService.listTransactionsByAccount(params);
    // expect(data).toEqual(transacctionListExp);
  });

  it('should create transaction', async () => {
    const trnsactionExp: TransactionCreatedModel = transactionFixture.getSingle();
    nock('http://localhost/api/transacciones')
      .post('/', matches(transaction))
      .reply(201, trnsactionExp);
    // const accountCreated = await transactionService.createTransaction(
    //   transaction,
    // );
    // expect(accountCreated.valor).toBe(trnsactionExp.valor);
  });
});
