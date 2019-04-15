import { TransactionsState, TransactionActionTypes, AddTransactionAction, DeleteTransactionAction } from '../types';

const DefaultTransactions: TransactionsState = {
    income: [],
    outgoings: [],
    totalIncome: 0,
    totalOutgoings: 0
}; 

export default (state: TransactionsState = DefaultTransactions, action: TransactionActionTypes): TransactionsState => {
    console.log(action);
    switch (action.type) {
        case 'ADD_INCOME': 
            const newIncome = (<AddTransactionAction>action).transaction
            return {
                ...state,
                income: state.income.concat(newIncome),
                totalIncome: state.totalIncome + newIncome.amount
            }
        case 'ADD_OUTGOING':
            const newOutgoing = (<AddTransactionAction>action).transaction
            return {
                ...state,
                outgoings: state.outgoings.concat(newOutgoing),
                totalOutgoings: state.totalOutgoings - newOutgoing.amount
            }
        case 'DELETE_INCOME':
            return {
                ...state,
                income: state.income.filter(inc => inc.id !== (<DeleteTransactionAction>action).id)
            }
        case 'DELETE_OUTGOING':
        return {
            ...state,
            outgoings: state.outgoings.filter(out => out.id !== (<DeleteTransactionAction>action).id)
        }
        default: 
            return state;
    }
}