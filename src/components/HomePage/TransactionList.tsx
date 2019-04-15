import React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Transaction } from '../../store/types';
import { deleteTransaction } from '../../store/TransactionActions';
import TransactionItem from './TransactionItem';

interface Props {
    type: string,
    transactions: Transaction[]
}

const TransactionList = ({ type, transactions }: Props) => {

    return (
        <div>
            <h3>{type == 'inc' ? 'Income' : 'Outgoings'}</h3>
            {
                transactions.map(transaction => {
                    return (
                        <TransactionItem 
                            key={transaction.id}
                            type={type}
                            transaction={transaction}
                        />
                    )
                })
            }
        </div>
    )
}

export default connect()(TransactionList);