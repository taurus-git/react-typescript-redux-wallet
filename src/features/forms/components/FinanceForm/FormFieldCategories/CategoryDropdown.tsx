import React from 'react';
import { CategoryDropdownItem } from "./CategoryDropdownItem";
import { NormalizedCategory } from "../../../../utils/normalizeCategories";

interface CategoryDropdownProps {
    categories: NormalizedCategory[],
    onSelect: (category: NormalizedCategory) => void,
}

export const CategoryDropdown: React.FC<CategoryDropdownProps> = ( { categories, onSelect } ) => {
    return (
        <div className="categories__list">
            <ul className="d-flex flex-wrap list-none">
                { categories.map( ( category, index ) => (
                    <CategoryDropdownItem key={ index } category={ category } index={ index } onSelect={ onSelect }/>
                ) ) }
            </ul>
        </div>
    );
}

