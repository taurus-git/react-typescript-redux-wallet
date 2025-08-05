import React from 'react';
import styles from '../FinanceForm.module.scss';
import { CategoryDropdownItem } from "./CategoryDropdownItem";
import { NormalizedCategory } from "../../../../categories/utils/normalizeCategories";

interface CategoryDropdownProps {
    categories: NormalizedCategory[],
    onSelect: ( category: NormalizedCategory ) => void,
}

export const CategoryDropdown: React.FC<CategoryDropdownProps> = ( { categories, onSelect } ) => {
    return (
        <div className={ styles.categoriesList }>
            <ul className="d-flex flex-wrap list-none">
                { categories.map( ( category, index ) => (
                    <CategoryDropdownItem key={ index } category={ category } index={ index } onSelect={ onSelect }/>
                ) ) }
            </ul>
        </div>
    );
}

