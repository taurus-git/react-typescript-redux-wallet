import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { fetchCategories } from "../../../../store/features/catregories/categoriesSlice";
import { CategoryButton } from "./CategoryButton";
import { CategoryDropdown } from "./CategoryDropdown";
import { NormalizedCategory } from "../../../../utils/normilizeCategories";
import { CategoriesSearch } from "./CategoriesSearch";

interface FormFieldCategoriesProps {
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
}

export const FormFieldCategories: React.FC<FormFieldCategoriesProps> = ( { change } ) => {
    const dispatch = useDispatch<AppDispatch>();
    const [ categoriesOpen, setCategoriesOpen ] = useState( false );
    const [ selectedCategory, setSelectedCategory ] = useState<NormalizedCategory>();
    const [ searchTerm, setSearchTerm ] = useState( '' );
    const { expenses, loading, error } = useSelector( ( state: RootState ) => state.categories );

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

    const handleClear = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setSelectedCategory( undefined );
        setSearchTerm( '' );
        const changeEvent = getChangeEvent( "" );
        change( changeEvent  );
    }

    const filterCategories = ( categories: NormalizedCategory[] ) => {
        if ( !searchTerm ) return categories;
        return expenses.filter( ( category ) =>
            category.name.toLowerCase()
                .includes( searchTerm.toLowerCase() ) )
    }

    const categoriesToDisplay = () => {
        return filterCategories( expenses );
    }

    useEffect( () => {
        if ( !loading && !error && expenses.length === 0 ) {
            dispatch( fetchCategories() );
        }
    }, [ dispatch, expenses, loading, error ] );

    return (
        <>
            <CategoryButton
                onToggle={ toggleDropdown }
                selectedCategory={ selectedCategory }
                handleClear={ handleClear }/>

            { categoriesOpen &&
                <>
                    <CategoriesSearch searchTerm={ searchTerm } setSearchTerm={ setSearchTerm }/>
                    <CategoryDropdown categories={ categoriesToDisplay() } onSelect={ handleSelect }/>
                </>
            }

            <input type="hidden"
                   id="categoryId"
                   name="categoryId"
                   value={ selectedCategory?.name || "" }/>
        </>
    );
}

