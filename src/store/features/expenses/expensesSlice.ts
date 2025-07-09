import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Expense, TransactionType } from "../../../types/transactions";
import { v4 as uuidv4 } from 'uuid';

interface ExpensesState {
    items: Expense[];
}

const initialState: ExpensesState = {
    items: []
}

const expensesSlice = createSlice( {
    name: TransactionType.EXPENSE,
    initialState,
    reducers: {
        createExpense: ( state, action: PayloadAction<Omit<Expense, 'id'>> ) => {
            const newExpense = { id: uuidv4(), ...action.payload };
            state.items.push( newExpense );
        },
        deleteExpense: ( state, action: PayloadAction<string> ) => {
            state.items = state.items.filter( e => e.id !== action.payload );
        }
    }
} )

export const { createExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
