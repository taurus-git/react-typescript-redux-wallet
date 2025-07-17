import expensesReducer from './features/expenses/expensesSlice';
import incomesReducer from './features/incomes/incomesSlice';
import transferSlice from "./features/transfer/transferSlice";
import uiReducer from './features/ui/uiSlice';
import authReducer from './features/auth/authSlice';
import categoriesReducer from './features/catregories/categoriesSlice';
import bankCardSlice from './features/bankCard/bankCardSlice';
import cashSlice from './features/cash/cashSlice';

export const reducers = {
    expenses: expensesReducer,
    incomes: incomesReducer,
    transfer: transferSlice,
    ui: uiReducer,
    auth: authReducer,
    categories: categoriesReducer,
    bank_card: bankCardSlice,
    cash: cashSlice,
};
