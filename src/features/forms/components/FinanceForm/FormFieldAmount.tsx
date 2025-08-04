import React from 'react';

interface FormFieldAmountProps {
    reference: React.RefObject<HTMLInputElement | null>,
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export const FormFieldAmount: React.FC<FormFieldAmountProps> = ( { reference, change } ) => {
    return (
        <>
            <label htmlFor="amount">Сумма</label>
            <input
                type="number"
                id="amount"
                name='amount'
                min="1"
                onChange={ change }
                ref={ reference }
                className="px-1 mx-1 flex-1"
            />
        </>
    );
}
