import React from 'react';
import { CategoryButton } from "./CategoryButton";
import { CategoryDropdown } from "./CategoryDropdown";
import { CategoriesSearch } from "./CategoriesSearch";
import { TransactionType } from "../../../../transactions/types";
import { useCategoriesForm } from "../../../hooks/useCategoriesForm";

interface FormFieldCategoriesProps {
    transactionType: TransactionType;
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
}

export const FormFieldCategories: React.FC<FormFieldCategoriesProps> = ( { transactionType, change } ) => {
    const {
        toggleDropdown,
        handleSelect,
        handleClear,
        categoriesToDisplay,
        categoriesOpen,
        selectedCategory,
        searchTerm,
        setSearchTerm
    } = useCategoriesForm( transactionType, change );

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

