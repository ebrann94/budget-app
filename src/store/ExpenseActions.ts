import { TransactionAction } from './types';
import uuid from 'uuid';

export const addIncome = (description: string, amount: number): TransactionAction => {
    return {
        type: 'ADD_INCOME',
        transaction: {
            id: uuid(),
            description,
            amount,
            createdAt: Date.now()
        }
    }
}

export const addOutgoing = (description: string, amount: number): TransactionAction => {
    return {
        type: 'ADD_OUTGOING',
        transaction: {
            id: uuid(),
            description,
            amount,
            createdAt: Date.now()
        }
    }
}

export const addTransaction = (type: string, description: string, amount: number): TransactionAction => {
    const transaction = {
        id: uuid(),
        description,
        amount,
        createdAt: Date.now()
    }

    if (type == 'inc') {
        return {
            type: 'ADD_INCOME',
            transaction
        }
    } else {
        return {
            type: 'ADD_OUTGOING',
            transaction
        }
    } 
}

export const removeTransaction = (id: string) => ({
    type: 'REMOVE_TRANSACTION',
    id
});