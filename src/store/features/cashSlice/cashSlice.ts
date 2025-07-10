import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cash, WalletType } from "../../../types/wallets";

const initialState: Cash = {
    balance: 500,
};

const cashSlice = createSlice( {
    name: WalletType.CASH,
    initialState,
    reducers: {
        createCashExpense: ( state, action: PayloadAction<number> ) => {
            state.balance -= action.payload;
        },
        createCashIncome: ( state, action: PayloadAction<number> ) => {
            state.balance += action.payload;
        },
        updateCashBalance: ( state, action: PayloadAction<number> ) => {
            state.balance = action.payload;
        },
    }
} );

export const { createCashExpense, createCashIncome, updateCashBalance } = cashSlice.actions;
export default cashSlice.reducer;
