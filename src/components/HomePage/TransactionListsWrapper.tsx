import React from 'react';
import { connect } from 'react-redux';

import TransactionList from './TransactionList';
import { TransactionsState, Transaction } from '../../store/types';

interface IProps {
    income: Transaction[],
    outgoings: Transaction[]
}

const TransactionListsWrapper = ({income, outgoings}: IProps) => {
    const totalIncome = income.reduce((acc, current) => Number(acc) + current.amount, 0);
    const totalOutgoings = outgoings.reduce((acc, current) => acc + current.amount, 0);
    return (
        <div>
            <h3>Balance: {}</h3>
            <div>
                <p>Total Income: £{totalIncome}</p>
                <TransactionList type="inc"transactions={income}/>
            </div>
            <div>
                <p>Total Outgoings: £{totalOutgoings}</p>
                <TransactionList type="out" transactions={outgoings}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: TransactionsState) => ({...state});

export default connect(mapStateToProps)(TransactionListsWrapper);