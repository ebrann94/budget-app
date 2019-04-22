import { TransactionActionTypes, TransactionType } from './types';
import uuid from 'uuid';

export const addTransaction = (type: TransactionType, description: string, amount: number): TransactionActionTypes => {
    const transaction = {
        id: uuid(),
        description,
        amount,
        createdAt: Date.now()
    }

    if (type == 'inc') {
        return {
            type: 'ADD_INCOME',
            transaction,
            id: undefined
        }
    } else {
        return {
            type: 'ADD_OUTGOING',
            transaction,
            id: undefined
        }
    } 
}

export const deleteTransaction = (type: string, id: string): TransactionActionTypes => {
    if (type == 'inc') {
        return {
            type: 'DELETE_INCOME',
            id
        }
    } else {
        return {
            type: 'DELETE_OUTGOING',
            id
        }
    }
};