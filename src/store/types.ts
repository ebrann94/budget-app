export interface Transaction {
    id: string,
    description: string,
    amount: number,
    createdAt: number 
}

export interface TransactionsState {
    income: Transaction[],
    outgoings: Transaction[],
    totalIncome: number,
    totalOutgoings: number
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