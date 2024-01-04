import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let amount = 0;
  transactions.map(transaction => (amount += transaction.amount));

  console.log(amount.toFixed(2));

  return (
    <>
        <h4>Your Balance</h4>
        <h1>${amount.toFixed(2)}</h1>
    </>
  )
}
