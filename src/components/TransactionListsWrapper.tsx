import React from 'react';
import { connect } from 'react-redux';

import TransactionList from './TransactionList';
import { TransactionsState, Transaction } from '../store/types';
import '../styles/TransactionListWrapper.css';

interface IProps {
    income: Transaction[],
    outgoings: Transaction[]
}

const TransactionListsWrapper = ({income, outgoings}: IProps) => {
    const totalIncome = income.reduce((acc, current) => acc + current.amount, 0);
    const totalOutgoings = outgoings.reduce((acc, current) => acc + current.amount, 0);
    return (
        <div >
            <h3>Balance: £{totalIncome - totalOutgoings}</h3>
            <div className="transaction-list-container">
                <TransactionList 
                    type="inc" 
                    transactions={income} 
                    total={totalIncome}
                />
                <TransactionList 
                    type="out" 
                    transactions={outgoings} 
                    total={totalOutgoings}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state: TransactionsState) => ({...state});

export default connect(mapStateToProps)(TransactionListsWrapper);