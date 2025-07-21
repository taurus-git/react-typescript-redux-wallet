import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TransactionType } from "../../transactions/types";
import { v4 as uuidv4 } from 'uuid';
import { Transfer } from "../types";

interface TransferState {
    items: Transfer[];
}

const initialState: TransferState = {
    items: []
}

const transferSlice = createSlice( {
    name: TransactionType.TRANSFER,
    initialState,
    reducers: {
        createTransfer: ( state, action: PayloadAction<Omit<Transfer, 'id'>> ) => {
            const newTransfer = { id: uuidv4(), ...action.payload };
            state.items.push( newTransfer );
        },
        deleteTransfer: ( state, action: PayloadAction<string>) => {
            state.items = state.items.filter( e => e.id !== action.payload );
        }
    }
} );

export const { createTransfer, deleteTransfer } = transferSlice.actions;
export default transferSlice.reducer;
