import React from 'react';

interface FormFieldDateProps {
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export const FormFieldDate: React.FC<FormFieldDateProps> = ( { change } ) => {
    const today = new Date().toISOString().split( "T" )[ 0 ];

    return (
        <>
            <input
                type="date"
                min="1970-00-01"
                max="2050-00-01"
                defaultValue={ today }
                name="date"
                onChange={ change }
            />
        </>
    );
}

