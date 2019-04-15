import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { deleteTransaction } from '../../store/TransactionActions';
import { Transaction } from '../../store/types';

interface IProps {
    dispatch: Dispatch,
    type: string,
    transaction: Transaction
}

const TransactionItem = (props: IProps) => {
    return (
        <div>
            <p>{props.transaction.description}</p>
            <p>£{props.transaction.amount}</p>
            <button onClick={() => {
                props.dispatch(deleteTransaction(props.type, props.transaction.id));
            }}>Delete</button>
        </div>
    )
}

export default connect()(TransactionItem);