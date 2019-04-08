import { AddExpenseAction } from './types';
import uuid from 'uuid';

export const addExpense = (description: string, amount: number): AddExpenseAction => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            amount,
            createdAt: Date.now()
        }
    }
}

export const removeExpense = (id: string) => ({
    type: 'REMOVE_EXPENSE',
    id
});