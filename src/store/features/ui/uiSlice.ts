import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalItem } from "./types";

interface UIState {
    modals: ModalItem[];
}

const initialState: UIState = {
    modals: [],
}

const uiSlice = createSlice( {
    name: 'ui',
    initialState,
    reducers: {
        openModal: ( state, action: PayloadAction<ModalItem> ) => {
            state.modals.push( { name: action.payload.name });
        },
        closeModal: ( state, action: PayloadAction<ModalItem> ) => {
            state.modals = state.modals.filter((modal) => (
                modal.name !== action.payload.name
            ));
        },
        closeAllModals: ( state ) => {
            state.modals = [];
        }
    }
} );

export const { openModal, closeModal, closeAllModals } = uiSlice.actions;
export default uiSlice.reducer;
