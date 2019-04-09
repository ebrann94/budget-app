import { Transaction, TransactionsState, TransactionAction } from '../types';

const DefaultTransactions: TransactionsState = {
    income: [],
    outgoings: []
}; 

export default (state: TransactionsState = DefaultTransactions, action: TransactionAction): TransactionsState => {
    switch (action.type) {
        case 'ADD_INCOME': 
            return {
                ...state,
                income: state.income.concat(action.transaction)
            }
        case 'ADD_OUTGOING':
            return {
                ...state,
                outgoings: state.outgoings.concat(action.transaction)
            }
        default: 
            return state;
    }
}