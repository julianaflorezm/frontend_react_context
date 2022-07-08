import nock from 'nock';
import matches from 'lodash/matches';
import * as accountService from './accountService';
import { ACCOUNT_IDENTIFIER } from './accountService';
import { AccountModel } from '../models/AccountModel';
import { AccountCreatedModel } from '../models/AccountCreatedModel';
import * as accountFixture from '../../../tests/fixtures/account.fixture';

describe('Account service test', () => {
  let account: AccountModel;

  beforeEach(() => {
    account = {
      saldo: 60000,
      fechaCreacion: new Date('2022/03/03'),
      nombre: 'Cuenta de ahorro',
      idUsuario: 62,
    };
  });

  it('should persist account', () => {
    jest.spyOn(localStorage, 'setItem');
    accountService.persistAccount(account);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      ACCOUNT_IDENTIFIER,
      JSON.stringify(account),
    );
  });

  it('should restore account', () => {
    jest.spyOn(localStorage, 'getItem');
    accountService.restoreAccount();
    expect(localStorage.getItem).toHaveBeenCalledWith(ACCOUNT_IDENTIFIER);
  });

  // it('should fetch listAccountsByUser', async () => {
  //   const accountListExp: AccountCreatedModel[] = [];
  //   const params = {
  //     idUsuario: 100,
  //   } as const;
  //   const res = nock('http://localhost:3000/api/cuentas')
  //     .get('/por-usuario')
  //     .query({ idUsuario: 100 })
  //     .reply(200, []);
  //   const data = await accountService.listAccountsByUser(params);
  //   expect(data).toEqual(accountListExp);
  // });

  // it('should create account', async () => {
  //   const accountExp: AccountCreatedModel = accountFixture.getSingle();
  //   nock('http://localhost/api/cuentas')
  //     .post('/', matches(account))
  //     .reply(201, accountExp);
  //   // const accountCreated = await accountService.createAccount(account);
  //   // expect(accountCreated.nombre).toBe(accountExp.nombre);
  //   // expect(accountCreated.usuario?.nombre).toBe(accountExp.usuario?.nombre);
  // });
});
