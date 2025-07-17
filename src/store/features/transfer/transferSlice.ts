import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TransactionType } from "../../../types/transactions";
import { v4 as uuidv4 } from 'uuid';
import { Transfer } from "../../../types/transfer";

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
        }
    }
} );

export const { createTransfer } = transferSlice.actions;
export default transferSlice.reducer;
