export interface TransactionsState {
    income: Transaction[],
    outgoings: Transaction[]
}

export interface Transaction {
    id: string,
    description: string,
    amount: number,
    createdAt: number 
}

export interface TransactionAction {
    type: string,
    transaction: Transaction
}