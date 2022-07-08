import React from 'react';
import { TransactionCreatedModel } from '../../../models/TransactionCreatedModel';
import { CardItemTransaction } from '../CardItemTransaction';

export interface TransactionCardListProps {
  transactions: TransactionCreatedModel[];
}

export const CardListTransaction: React.FC<TransactionCardListProps> = ({
  transactions,
}) => {
  return (
    <>
      {transactions.map((transaction) => (
        <CardItemTransaction key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};
