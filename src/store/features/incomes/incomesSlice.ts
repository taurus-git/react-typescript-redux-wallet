import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Income, TransactionType } from "../../../types/transactions";
import { v4 as uuidv4 } from 'uuid';

interface IncomesState {
    items: Income[];
}

const initialState: IncomesState = {
    items: []
}

const incomesSlice = createSlice( {
    name: TransactionType.INCOME,
    initialState,
    reducers: {
        createIncome: ( state, action: PayloadAction<Omit<Income, 'id'>> ) => {
            const newIncome = { id: uuidv4(), ...action.payload };
            state.items.push( newIncome );
        },
        deleteIncome: ( state, action: PayloadAction<string> ) => {
            state.items = state.items.filter( e => e.id !== action.payload );
        }
    }
} )

export const { createIncome, deleteIncome } = incomesSlice.actions;
export default incomesSlice.reducer;
