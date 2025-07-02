import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchCategories } from "../../../../store/features/catregories/categoriesSlice";
import { CategoryButton } from "./CategoryButton";
import { CategoryDropdown } from "./CategoryDropdown";
import { NormalizedCategory } from "../../../../utils/normilizeCategories";

export const FormFieldCategories = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [ categoriesOpen, setCategoriesOpen ] = useState( false );
    const [ selectedCategory, setSelectedCategory ] = useState<NormalizedCategory>();
    const { expenses, loading, error } = useSelector( ( state: RootState ) => state.categories );

    const handleOpenCategories = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setCategoriesOpen( prev => !prev );
    }

    const toggleDropdown = () => {
        setCategoriesOpen( prev => !prev );
    }

    const handleSelect = ( category: NormalizedCategory ) => {
        setSelectedCategory( category );
        setCategoriesOpen(false);
        console.log(category);
    }

    useEffect( () => {
        if ( !loading && !error && expenses.length === 0 ) {
            dispatch( fetchCategories() );
        }
    }, [ dispatch, expenses, loading, error ] );

    return (
        <>

            {/*selectedCategory. If category chose display it */ }
            {/*Button to clear chosen category*/ }
            {/*If dropdown opened, display input for search.
            onChange setSearchTerm*/ }

            {/* <input type="hidden" name="category" value={selectedCategory || ""}/>*/ }
            <CategoryButton onToggle={ toggleDropdown } selectedCategory={selectedCategory}/>

            { categoriesOpen && expenses.length > 0 &&
                /*CategoriesSearch input*/
                <CategoryDropdown categories={ expenses } onSelect={handleSelect}/>
            }
        </>
    );
}

