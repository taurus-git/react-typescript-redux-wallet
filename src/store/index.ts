import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { TransactionType } from "../types/transactions";
import { WalletType } from "../types/wallets";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        TransactionType.EXPENSE,
        TransactionType.INCOME,
        WalletType.BANK_CARD,
        WalletType.CASH,
        'categories',
        'ui'
    ],
}

const persistedReducer = persistReducer( persistConfig, rootReducer );

export const store = configureStore( {
    reducer: persistedReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
            },
        } ),
    devTools: process.env.NODE_ENV !== 'production',
} );

export const persistor = persistStore( store );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
