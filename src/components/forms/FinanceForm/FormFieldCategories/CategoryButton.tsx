import React from 'react';
import { NormalizedCategory } from "../../../../utils/normilizeCategories";
import * as Icons from "lucide-react";
import { capitalizedString } from "../../../../utils/formatters";
import { LucideIcon } from "lucide-react";

interface CategoriesDropdownProps {
    onToggle: () => void,
    selectedCategory: NormalizedCategory | undefined,
}

export const CategoryButton: React.FC<CategoriesDropdownProps> = ( { onToggle, selectedCategory } ) => {

    const IconComponent = selectedCategory
        ? (Icons[ capitalizedString( selectedCategory.iconName ) as keyof typeof Icons ] || Icons.HelpCircle) as LucideIcon
        : null;


    return (
        <button type="button" onClick={ onToggle }>

            { selectedCategory && IconComponent ?
                <div>
                    <IconComponent size={ 20 } color={ selectedCategory.iconColor || "#000" }/>
                    { selectedCategory.name }
                </div>
                :
                <span>Выберете категорию</span>
            }

        </button>
    );
}

