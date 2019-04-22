import React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { Transaction, TransactionType } from '../store/types';
import { deleteTransaction } from '../store/TransactionActions';
import TransactionItem from './TransactionItem';
import AddTransactionFrom from './AddTransactionForm'

interface IProps {
    type: TransactionType,
    transactions: Transaction[],
    total: number
}

const TransactionList = ({ type, transactions, total }: IProps) => {
    const typeFull = type == 'inc' ? 'Income' : 'Outgoings';

    return (
        <div>
            <div className="list-header">
                <h3>{typeFull}</h3>
                <h3>£{total}</h3>
            </div>
            <AddTransactionFrom type={type} />
            
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