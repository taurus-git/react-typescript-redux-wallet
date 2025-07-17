import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { PageHeader } from "../components/common/PageHeader";

const Dashboard = () => {
    const expenses = useSelector( ( state: RootState ) => state.expenses.items );
    const incomes = useSelector( ( state: RootState ) => state.incomes.items );

    const handleClick = () => {

    }

    const handleRemove = ( id: string ) => {

    }

    console.log( expenses );
    console.log( incomes );


    return (
        <>
            <PageHeader/>
            <div>
                <ul>
                    { expenses.map( item => (
                        <li key={ item.id }>
                            <>
                                {/*{ console.log( item ) }*/}
                                { item.categoryId } - { item.amount } - { item.date }
                                <button onClick={ () => handleRemove( item.id ) }>Удалить</button>
                            </>
                        </li>
                    ) ) }
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
