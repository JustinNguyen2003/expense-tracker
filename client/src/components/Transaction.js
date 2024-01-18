import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    let sign;
    if (transaction.amount > 0){
        sign = '+';
    }
    else{
        sign='-';
    }
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
