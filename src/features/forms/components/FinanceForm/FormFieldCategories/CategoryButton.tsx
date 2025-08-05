import React from 'react';
import styles from "../FinanceForm.module.scss";
import { X } from "lucide-react";
import { NormalizedCategory } from "../../../../categories/utils/normalizeCategories";

interface CategoriesDropdownProps {
    onToggle: () => void,
    selectedCategory: NormalizedCategory | undefined,
    handleClear: ( e: React.MouseEvent ) => void,
}

export const CategoryButton: React.FC<CategoriesDropdownProps> = ( { onToggle, selectedCategory, handleClear } ) => {


    return (
        <button type="button" className={`${styles.categoryButton} d-flex justify-between align-center flex-1`}onClick={ onToggle }>

            { selectedCategory ?
                <>
                    <span style={ { color: selectedCategory.iconColor } }>{ selectedCategory.name }</span>
                    <span onClick={ handleClear } title="Очистить">
                        <X/>
                    </span>
                </>
                :
                <>Выберете категорию</>
            }

        </button>
    );
}

