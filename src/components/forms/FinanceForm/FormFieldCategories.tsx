import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchCategories } from "../../../store/features/catregories/categoriesSlice";
import { FormFieldCategory } from "./FormFieldCategory";

export const FormFieldCategories = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [ categoriesOpen, setCategoriesOpen ] = useState( false );
    const { expenses, loading, error } = useSelector( ( state: RootState ) => state.categories );

    const handleOpenCategories = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setCategoriesOpen( prev => !prev );
    }

    useEffect( () => {
        if ( !loading && !error && expenses.length === 0 ) {
            dispatch( fetchCategories() );
        }
    }, [ dispatch, expenses, loading, error ] );

    return (
        <>
            <button type="button" onClick={ handleOpenCategories }>Выбрать категорию</button>
            { categoriesOpen && expenses.length > 0 &&
                <div className="categories__list">
                    <ul>
                        { expenses.map( ( category, index ) => (
                            <FormFieldCategory key={ index } category={ category } index={ index }/>
                        ) ) }
                    </ul>
                </div>
            }
        </>
    );
}

