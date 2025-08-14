import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import React, { useEffect, useState } from "react";
import { NormalizedCategory } from "../../categories/utils/normalizeCategories";
import { TransactionType } from "../../transactions/types";
import { fetchCategories } from "../../categories/redux/categoriesSlice";

export const useCategoriesForm = ( transactionType: TransactionType, change: ( e: React.ChangeEvent<HTMLInputElement> ) => void ) => {
    const dispatch = useDispatch<AppDispatch>();
    const { expenses, incomes, loading, error } = useSelector( ( state: RootState ) => state.categories );
    const [ categoriesOpen, setCategoriesOpen ] = useState( false );
    const [ selectedCategory, setSelectedCategory ] = useState<NormalizedCategory>();
    const [ searchTerm, setSearchTerm ] = useState( '' );

    const getChangeEvent = ( value: string ): React.ChangeEvent<HTMLInputElement> => {
        return {
            target: {
                name: 'categoryId',
                value: value,
            }
        } as React.ChangeEvent<HTMLInputElement>
    }

    const toggleDropdown = () => {
        setCategoriesOpen( prev => !prev );
    }

    const handleSelect = ( category: NormalizedCategory ) => {
        setSelectedCategory( category );
        setCategoriesOpen( false );
        const changeEvent = getChangeEvent( category.name );
        change( changeEvent );
    }

    const clearSelectedCategory = () => {
        setSelectedCategory( undefined );
        setSearchTerm( '' );
        const changeEvent = getChangeEvent( "" );
        change( changeEvent );
    }

    const handleClear = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        clearSelectedCategory();
    }

    const filterCategories = ( categories: NormalizedCategory[] ) => {
        if ( !searchTerm ) return categories;
        return categories.filter( ( category ) =>
            category.name.toLowerCase()
                .includes( searchTerm.toLowerCase() ) )
    }

    const categoriesToDisplay = ( transactionType: TransactionType ) => {
        if ( transactionType === TransactionType.INCOME ) {
            return filterCategories( incomes );
        }

        return filterCategories( expenses );
    }

    const shouldDispatchCategories = () => {
        if ( loading && error ) return false;
        if ( expenses.length === 0 || incomes.length === 0 ) {
            return true;
        }

        return false;
    }

    useEffect( () => {
        clearSelectedCategory();
    }, [ transactionType ] );

    useEffect( () => {
        if ( shouldDispatchCategories() ) {
            dispatch( fetchCategories() );
        }
    }, [ dispatch, expenses, incomes, loading, error ] );

    return {
        toggleDropdown,
        handleSelect,
        handleClear,
        categoriesToDisplay,
        categoriesOpen,
        selectedCategory,
        searchTerm,
        setSearchTerm
    }
}
