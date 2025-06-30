import React from 'react';

interface FormFieldAmountProps {
    reference: React.RefObject<HTMLInputElement | null>,
}

export const FormFieldAmount: React.FC<FormFieldAmountProps> = ( { reference } ) => {
    return (
        <>
            <label htmlFor="summ">Сумма</label>
            <input type="number" id="summ" name='summ' ref={ reference } placeholder="Сумма"/>
        </>
    );
}
