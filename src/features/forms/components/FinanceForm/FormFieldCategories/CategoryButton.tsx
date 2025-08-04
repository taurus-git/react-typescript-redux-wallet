import React from 'react';
import { NormalizedCategory } from "../../../../categories/utils/normalizeCategories";
import { X } from "lucide-react";

interface CategoriesDropdownProps {
    onToggle: () => void,
    selectedCategory: NormalizedCategory | undefined,
    handleClear: ( e: React.MouseEvent ) => void,
}

export const CategoryButton: React.FC<CategoriesDropdownProps> = ( { onToggle, selectedCategory, handleClear } ) => {


    return (
        <button type="button" className="flex-1" onClick={ onToggle }>

            { selectedCategory ?
                <div>
                    <span style={ { color: selectedCategory.iconColor } }>{ selectedCategory.name }</span>
                    <span onClick={ handleClear } title="Очистить">
                        <X/>
                    </span>
                </div>
                :
                <>Выберете категорию</>
            }

        </button>
    );
}

