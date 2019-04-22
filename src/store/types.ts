export interface Transaction {
    id: string,
    description: string,
    amount: number,
    createdAt: number 
}

export type TransactionType = 'inc' | 'out';

export interface TransactionsState {
    income: Transaction[],
    outgoings: Transaction[]
}

export interface AddTransactionAction {
    type: string,
    transaction: Transaction
}

export interface DeleteTransactionAction {
    type: string,
    id: string
}

export type TransactionActionTypes = AddTransactionAction | DeleteTransactionAction;