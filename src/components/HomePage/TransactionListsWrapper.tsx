import React from 'react';
import { connect } from 'react-redux';

import TransactionList from './TransactionList';
import { TransactionsState, Transaction } from '../../store/types';

interface IProps {
    income: Transaction[],
    outgoings: Transaction[]
}

const TransactionListsWrapper = (props: IProps) => {
    return (
        <div>
            <TransactionList type={'inc'} transactions={props.income}/>
            <TransactionList type={'out'} transactions={props.outgoings}/>
        </div>
    )
}

const mapStateToProps = (state: TransactionsState) => {
    return {
        income: state.income,
        outgoings: state.outgoings
    }
}

export default connect(mapStateToProps)(TransactionListsWrapper);