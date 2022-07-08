import {
    renderHook,
    act,
    RenderHookResult,
  } from '@testing-library/react-hooks';
import { BankTypeEnum } from '../models/BankTypeEnum';
  import { useStateContainer } from './BankMenuContext';
  
  
  describe('Bank menu Context test', () => {
    let hookWrapper: RenderHookResult<
      unknown,
      ReturnType<typeof useStateContainer>
    >;
    beforeEach(() => {
      hookWrapper = renderHook(() => useStateContainer());
    });
  
    it('should set bank menu type', () => {
      const type = BankTypeEnum.CREATE_ACCOUNT;
  
      act(() => {
        hookWrapper.result.current.mutations.setBankType(type);
      });
  
      expect(hookWrapper.result.current.data.bankType).toEqual(type);
    });
  });
