import React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Transaction } from '../../store/types';
import { deleteTransaction } from '../../store/TransactionActions';
import TransactionItem from './TransactionItem';

interface Props {
    type: string,
    transactions: Transaction[],
    dispatch: Redux.Dispatch
}

const TransactionList = (props: Props) => {

    return (
        <div>
            <h3>{props.type == 'inc' ? 'Income' : 'Outgoings'}</h3>
            {
                props.transactions.map(transaction => {
                    return (
                        <TransactionItem 
                            type={props.type}
                            transaction={transaction}
                        />
                    )
                })
            }
        </div>
    )
}

export default connect()(TransactionList);