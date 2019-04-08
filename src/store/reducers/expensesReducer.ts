import { Expense } from '../types';

const DefaultExpenses: Expense[] = []; 

export default (state: Expense[] = DefaultExpenses, action: any): Expense[] => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense]
        default: 
            return state;
    }
}