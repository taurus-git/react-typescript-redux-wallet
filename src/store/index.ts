import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './features/expenses/expensesSlice';
import uiReducer from './features/ui/uiSlice';

export const store = configureStore( {
    reducer: {
        expenses: expensesReducer,
        ui: uiReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
} );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
