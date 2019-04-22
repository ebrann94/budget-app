import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { deleteTransaction } from '../store/TransactionActions';
import { Transaction } from '../store/types';

interface IProps {
    dispatch: Dispatch,
    type: string,
    transaction: Transaction
}

const TransactionItem = ({ type, transaction, dispatch}: IProps) => {
    const date = new Date(transaction.createdAt);
    const formattedDate = date.toLocaleString('en-gb', { day: '2-digit', month: '2-digit' });

    return (
        <div>
            <p>{transaction.description}</p>
            <p>£{transaction.amount}</p>
            <p>{formattedDate}</p>
            <button onClick={() => {
                dispatch(deleteTransaction(type, transaction.id));
            }}>Delete</button>
        </div>
    )
}

export default connect()(TransactionItem);