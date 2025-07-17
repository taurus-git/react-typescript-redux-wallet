import expensesReducer from './features/expenses/expensesSlice';
import incomesReducer from './features/incomes/incomesSlice';
import uiReducer from './features/ui/uiSlice';
import authReducer from './features/auth/authSlice';
import categoriesReducer from './features/catregories/categoriesSlice';
import bankCardSlice from './features/bankCardSlice/bankCardSlice';
import cashSlice from './features/cashSlice/cashSlice';

export const reducers = {
    expenses: expensesReducer,
    incomes: incomesReducer,
    ui: uiReducer,
    auth: authReducer,
    categories: categoriesReducer,
    bank_card: bankCardSlice,
    cash: cashSlice,
};
