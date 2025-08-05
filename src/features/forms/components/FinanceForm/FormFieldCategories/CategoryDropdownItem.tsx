import React from 'react';
import { NormalizedCategory } from "../../../../categories/utils/normalizeCategories";
import { capitalizedString } from "../../../../../utils/formatters";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
// Note: I understand that importing all icons (import * as Icons from "lucide-react") can be expensive for bundle size.
// However, for simplicity and flexibility during development — especially while prototyping dynamic icon mapping from JSON —
// this approach keeps the logic concise without manually mapping each iconName.


interface CategoryDropdownItemProps {
    category: NormalizedCategory,
    index: number,
    onSelect: ( category: NormalizedCategory ) => void,
}

export const CategoryDropdownItem: React.FC<CategoryDropdownItemProps> = ( { category, index, onSelect } ) => {
    const handleSelect = ( category: NormalizedCategory ) => {
        onSelect( category );
    };

    const Icon = (Icons[ capitalizedString( category.iconName ) as keyof typeof Icons ] || Icons.HelpCircle) as LucideIcon;

    return (
        <li
            key={ category.type + index }
            style={ { color: category.iconColor || undefined } }
            className="w-1-4"
        >
            <button
                onClick={ () => handleSelect( category ) }
                className="d-flex flex-col align-center"
            >
                <Icon size={ 20 } color={ category.iconColor || "#000" }/>
                <span>{ category.name }</span>
            </button>
        </li>
    );
}

