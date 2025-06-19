import React, { useEffect, useRef, useState } from 'react';
import styles from './FinanceForm.module.scss';

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm: React.FC<FinanceFormProps> = ( { onClose } ) => {
    const inputElement = useRef<HTMLInputElement>( null );
    const [ categoriesOpen, setCategoriesOpen ] = useState( false );

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
    }

    const handleOpenCategories = ( e: React.MouseEvent ) => {
        e.stopPropagation();
        setCategoriesOpen( prev => !prev );
    }

    useEffect( () => {
        if ( inputElement ) {
            inputElement.current?.focus();
        }
    }, [] );

    return (
        <form onSubmit={ handleSubmit } className={styles.financeForm}>
            <fieldset>
                <legend>Новая запись</legend>
                <div className={ styles.financeForm__field }>
                    <label htmlFor="summ">Сумма</label>
                    <input type="number" id="summ" name='summ' ref={ inputElement } placeholder="Сумма"/>
                </div>

                <div className={ styles.financeForm__field }>
                    <label htmlFor="account">Счет</label>
                    <select id="account" name='account' required> //Todo: add accounts list
                        <option value="option1">Значение 1</option>
                        <option value="option2">Значение 2</option>
                        <option value="option3">Значение 3</option>
                    </select>
                </div>
                <div className={ styles.financeForm__field }>
                    <button type="button" onClick={ handleOpenCategories }>Выбрать категорию</button>

                    { categoriesOpen &&
                        <div className="categories__list"> //Todo: add component / components (wrapper + category)
                            <button type="button">
                                <span>SVG</span>
                                <span>Category Name</span>
                            </button>
                        </div>

                    }
                </div>
                <div className={ styles.financeForm__field }>
                    //Todo: add date field
                </div>
                <div className={ styles.financeForm__field }>
                    {/*<button onClick={ onClose }>Сохранить</button>*/ }
                </div>
            </fieldset>

        </form>
    );
}

