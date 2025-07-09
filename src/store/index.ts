import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './features/expenses/expensesSlice';
import incomesReducer from './features/incomes/incomesSlice';
import uiReducer from './features/ui/uiSlice';
import authReducer from './features/auth/authSlice';
import categoriesReducer from './features/catregories/categoriesSlice';

export const store = configureStore( {
    reducer: {
        expenses: expensesReducer,
        incomes: incomesReducer,
        ui: uiReducer,
        auth: authReducer,
        categories: categoriesReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
} );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
