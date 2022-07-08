import React from 'react';
import { AccountCreatedModel } from '../../../models/AccountCreatedModel';
import { CardItemAccount } from '../CardItemAccount';

export interface AccountCardListProps {
  selected: number;
  accounts: AccountCreatedModel[];
  setSelected: (id: number) => void;
}

export const CardListAccount: React.FC<AccountCardListProps> = ({
  selected,
  accounts,
  setSelected,
}) => {
  return (
    <>
      {accounts.map((account) => (
        <CardItemAccount
          key={account.id}
          account={account}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
    </>
  );
};
