import React from 'react';
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { PageHeader } from "../components/common/PageHeader";
import { fetchCategories } from "../store/features/catregories/categoriesSlice";

const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const expenses = useSelector( ( state: RootState ) => state.expenses.items );
    const {incomes, loading, error} = useSelector((state: RootState) => state.categories);

    const handleClick = () => {

    }

    const handleRemove = (id: string) => {

    }

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    if(loading) return <div>Загрузка...</div>
    if(error) return <div>Ошибка: {error}</div>

    return (
        <>
            <PageHeader/>
            <div>
                <button onClick={ handleClick }>Добавить транзакцию</button>
                <ul>
                    { expenses.map( item => (
                        <li key={ item.id }>
                            { item.categoryId } - { item.amount } - { item.date }
                            <button onClick={ () => handleRemove( item.id ) }>Удалить</button>
                        </li>
                    ) ) }
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
