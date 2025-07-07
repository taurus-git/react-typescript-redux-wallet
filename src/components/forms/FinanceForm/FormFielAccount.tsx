import React from 'react';

interface FormFieldAccountProps {
    change: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void,
}

export const FormFieldAccount: React.FC<FormFieldAccountProps> = ( { change } ) => {
    return (
        <>
            <label htmlFor="account">Счет</label>
            <select id="account" name='account' onChange={ change }> {/*Todo: add accounts list*/ }
                <option value="option1">Значение 1</option>
                <option value="option2">Значение 2</option>
                <option value="option3">Значение 3</option>
            </select>
        </>
    );
}

