import React from 'react';
import { getDateFormat } from "../../utils/formUtils";

interface FormFieldDateProps {
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export const FormFieldDate: React.FC<FormFieldDateProps> = ( { change } ) => {
    const now = new Date();
    const today = getDateFormat( now, 'iso' );
    const timestamp = now.getTime();

    return (
        <>
            <input
                type="date"
                min="1970-01-01"
                max="2050-01-01"
                defaultValue={ today }
                name="today"
                onChange={ change }
                required
            />
            <input
                type="hidden"
                name="date"
                value={ timestamp }
            />
        </>
    );
}

