import React from 'react';
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, removeExpense } from "../store/features/expenses/expensesSlice";


const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const expenses = useSelector( ( state: RootState ) => state.expenses.items );

    const handleAdd = () => {
        dispatch( addExpense( { accountId: '1', categoryId: 'Продукты', amount: 150, date: 'сегодня' } ) );
    }

    const handleRemove = ( id: string ) => {
        dispatch( removeExpense( id ) );
    }

    return (
        <>
            <h1>Журнал</h1>
            <div>
                <button onClick={ handleAdd }>Добавить транзакцию</button>
                <ul>
                    { expenses.map( item => (
                        <li key={ item.id }>
                            { item.categoryId } - { item.amount } - { item.date }
                            <button onClick={() => handleRemove( item.id ) }>Удалить</button>
                        </li>
                    ) ) }
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
