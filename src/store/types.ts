export interface Expense {
    id: string,
    description: string,
    amount: number,
    createdAt: number 
}

export interface AddExpenseAction {
    type: string,
    expense: Expense
}