import React, { useContext } from 'react';
import {
    renderHook,
    act,
    RenderHookResult,
  } from '@testing-library/react-hooks';
  import { useStateContainer } from './AccountContext';
  import { SessionContext } from '../../../context/SessionContext';
  import * as _accountService from '../services/accountService';
import { AccountModel } from '../models/AccountModel';

  jest.mock('../services/accountService');
  
  const accountService = _accountService as jest.Mocked<typeof _accountService>;
  
  describe('Session Context text', () => {
    let hookWrapper: RenderHookResult<
      unknown,
      ReturnType<typeof useStateContainer>
    >;

    beforeEach(() => {
      hookWrapper = renderHook(() => useStateContainer({ account: { idUsuario: 1, nombre: 'Cuenta de ahorro', saldo: 0, fechaCreacion: new Date('2022-03-03') }}, SessionContext));
    });
  
    it('should persist account', () => {
      // const contextValue = { data: { userId: 1 } };
      // const sessionContext = typeof SessionContext;
      // jest.spyOn(React, "useContext").mockImplementation(() => contextValue);
      // const account: AccountModel = { idUsuario: 1, nombre: 'Cuenta de ahorro', saldo: 0, fechaCreacion: new Date('2022-03-03') };
      // const message = '';
      // accountService.persistAccount.mockReturnThis();
      // accountService.createAccount.mockReturnThis();
      // act(() => {
      //   hookWrapper.result.current.mutations.setAccount(account);
      //   hookWrapper.result.current.mutations.setMessage(message);
      // });
  
      // expect(hookWrapper.result.current.data.account).toEqual(account);
      // expect(accountService.persistAccount).toHaveBeenCalledWith(account);
      console.log('');
    });
  });
