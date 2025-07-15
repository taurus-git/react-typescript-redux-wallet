import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchCategories } from "../../../../store/features/catregories/categoriesSlice";
import { CategoryButton } from "./CategoryButton";
import { CategoryDropdown } from "./CategoryDropdown";
import { NormalizedCategory } from "../../../../utils/normilizeCategories";
import { CategoriesSearch } from "./CategoriesSearch";
import { TransactionType } from "../../../../types/transactions";

interface FormFieldCategoriesProps {
    transactionType: TransactionType;
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
}

export const FormFieldCategories: React.FC<FormFieldCategoriesProps> = ( { transactionType, change } ) => {
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
        };

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

    console.log("transactionType " + transactionType);
    console.log(categoriesToDisplay( transactionType ));

    return (
        <>
            <CategoryButton
                onToggle={ toggleDropdown }
                selectedCategory={ selectedCategory }
                handleClear={ handleClear }/>

            { categoriesOpen &&
                <>
                    <CategoriesSearch searchTerm={ searchTerm } setSearchTerm={ setSearchTerm }/>
                    <CategoryDropdown categories={ categoriesToDisplay( transactionType ) } onSelect={ handleSelect }/>
                </>
            }

            <input type="hidden"
                   id="categoryId"
                   name="categoryId"
                   value={ selectedCategory?.name || "" }/>
        </>
    );
}

