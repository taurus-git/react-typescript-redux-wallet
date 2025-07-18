import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BankCard, WalletType } from "../types";

const initialState: BankCard = {
    balance: 1000,
};

const bankCardSlice = createSlice( {
    name: WalletType.BANK_CARD,
    initialState,
    reducers: {
        createCardExpense: ( state, action: PayloadAction<number> ) => {
            state.balance -= action.payload;
        },
        createCardIncome: ( state, action: PayloadAction<number> ) => {
            state.balance += action.payload;
        },
        updateCardBalance: ( state, action: PayloadAction<number> ) => {
            state.balance = action.payload;
        },

    }
} );

export const { createCardExpense, createCardIncome, updateCardBalance } = bankCardSlice.actions;
export default bankCardSlice.reducer;
