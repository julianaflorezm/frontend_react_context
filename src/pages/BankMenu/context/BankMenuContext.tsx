import React, { createContext, useState } from 'react';
import { BankTypeEnum } from '../models/BankTypeEnum';
import { BankMenuState } from './models/BankMenuState';

export const useStateContainer = (initialState: BankMenuState = {}) => {
  const [bankType, setBankType] = useState(
    initialState.bankType || BankTypeEnum.MINE,
  );

  return {
    data: { bankType },
    mutations: { setBankType },
  };
};

export const BankMenuContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export interface BankProviderProps {
  initialState?: BankMenuState;
}

export const BankMenuProvider: React.FC<BankProviderProps> = ({
  children,
  initialState = {},
}) => {
  const contextValue = useStateContainer(initialState);
  return (
    <BankMenuContext.Provider value={contextValue}>
      {children}
    </BankMenuContext.Provider>
  );
};
