import React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';
import { TransactionsState, Transaction } from '../../store/types';
import { deleteTransaction } from '../../store/ExpenseActions';

interface Props {
    type: string,
    income: Transaction[],
    outgoings: Transaction[],
    dispatch: Redux.Dispatch
}

const TransactionList = (props: Props) => {
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
                            <p>£{transaction.amount}</p>
                            <button onClick={() => {
                                props.dispatch(deleteTransaction(props.type, transaction.id));
                            }}>Delete</button>
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