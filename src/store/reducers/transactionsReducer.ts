import { TransactionsState, TransactionActionTypes, AddTransactionAction, DeleteTransactionAction } from '../types';

const DefaultTransactions: TransactionsState = {
    income: [],
    outgoings: []
}; 

export default (state: TransactionsState = DefaultTransactions, action: TransactionActionTypes): TransactionsState => {
    console.log(action);
    switch (action.type) {
        case 'ADD_INCOME': 
            return {
                ...state,
                income: state.income.concat((<AddTransactionAction>action).transaction)
            }
        case 'ADD_OUTGOING':
            return {
                ...state,
                outgoings: state.outgoings.concat((<AddTransactionAction>action).transaction)
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