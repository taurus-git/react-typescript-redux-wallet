import React from 'react';

interface FormFieldAmountProps {
    reference: React.RefObject<HTMLInputElement | null>,
}

export const FormFieldAmount: React.FC<FormFieldAmountProps> = ( { reference } ) => {
    return (
        <>
            <label htmlFor="amount">Сумма</label>
            <input type="number" id="amount" name='amount' ref={ reference } placeholder="Сумма" required/>
        </>
    );
}
