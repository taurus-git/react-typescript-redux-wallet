import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Expense } from "./types";
import { v4 as uuidv4 } from 'uuid';

interface ExpensesState {
    items: Expense[];
}

const initialState: ExpensesState = {
    items: []
}

const expensesSlice = createSlice( {
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: ( state, action: PayloadAction<Omit<Expense, 'id'>> ) => {
            const newExpense = { id: uuidv4(), ...action.payload };
            state.items.push( newExpense );
        },
        removeExpense: ( state, action: PayloadAction<string> ) => {
            state.items = state.items.filter( e => e.id !== action.payload );
        }
    }
} )

export const { addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
