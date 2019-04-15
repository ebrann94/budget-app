import React from 'react';
import { connect } from 'react-redux';

import TransactionList from './TransactionList';
import { TransactionsState, Transaction } from '../../store/types';

interface IProps {
    income: Transaction[],
    outgoings: Transaction[],
    totalIncome: number,
    totalOutgoings: number,
}

const TransactionListsWrapper = ({income, outgoings, totalIncome, totalOutgoings}: IProps) => {
    return (
        <div>
            <h3>Balance: {totalIncome + totalOutgoings}</h3>
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