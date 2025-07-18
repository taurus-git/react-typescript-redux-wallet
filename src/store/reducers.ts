import authReducer from '../features/auth/redux/authSlice';
import expensesReducer from '../features/transactions/redux/expensesSlice';
import incomesReducer from '../features/transactions/redux/incomesSlice';
import transferSlice from "../features/transfer/redux/transferSlice";
import uiReducer from '../features/modal/redux/uiSlice';
import categoriesReducer from '../features/categories/redux/categoriesSlice';
import bankCardSlice from '../features/wallets/redux/bankCardSlice';
import cashSlice from '../features/wallets/redux/cashSlice';

export const reducers = {
    auth: authReducer,
    expenses: expensesReducer,
    incomes: incomesReducer,
    transfer: transferSlice,
    ui: uiReducer,
    categories: categoriesReducer,
    bank_card: bankCardSlice,
    cash: cashSlice,
};
