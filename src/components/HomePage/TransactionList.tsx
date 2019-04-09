import React from 'react';
import { connect } from 'react-redux';
import { TransactionsState, Transaction } from '../../store/types';

interface props {
    type: string,
    income: Transaction[],
    outgoings: Transaction[]
}

const TransactionList = (props: props) => {
    let transactions;
    if (props.type == 'inc') {
        transactions = props.income;
    } else {
        transactions = props.outgoings;
    }

    return (
        <div>
            <h3>{props.type == 'inc' ? 'Income' : 'Outgoings'}</h3>
            {
                transactions.map(transaction => {
                    return (
                        <div key={transaction.id}>
                            <p>{transaction.description}</p>
                            <p>{transaction.amount}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToTprops = (state: TransactionsState) => {
    return {
        income: state.income,
        outgoings: state.outgoings
    }
}

export default connect(mapStateToTprops)(TransactionList);