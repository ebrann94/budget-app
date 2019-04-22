import { TransactionsState, TransactionActionTypes, AddTransactionAction, DeleteTransactionAction } from '../types';

const DefaultTransactions: TransactionsState = {
    income: [],
    outgoings: []
}; 

export default (state: TransactionsState = DefaultTransactions, action: TransactionActionTypes): TransactionsState => {
    switch (action.type) {
        case 'ADD_INCOME': 
            const newIncome = (<AddTransactionAction>action).transaction
            return {
                ...state,
                income: state.income.concat(newIncome)
            }
        case 'ADD_OUTGOING':
            const newOutgoing = (<AddTransactionAction>action).transaction
            return {
                ...state,
                outgoings: state.outgoings.concat(newOutgoing)
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