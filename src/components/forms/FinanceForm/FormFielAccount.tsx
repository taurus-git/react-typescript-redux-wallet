import React from 'react';

export const FormFieldAccount = () => {
    return (
        <>
            <label htmlFor="account">Счет</label>
            <select id="account" name='account' required> //Todo: add accounts list
                <option value="option1">Значение 1</option>
                <option value="option2">Значение 2</option>
                <option value="option3">Значение 3</option>
            </select>
        </>
    );
}

