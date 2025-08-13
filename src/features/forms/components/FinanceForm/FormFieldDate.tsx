import React from 'react';
import {formatDate} from "../../utils/formUtils";

interface FormFieldDateProps {
    change: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
}

export const FormFieldDate: React.FC<FormFieldDateProps> = ( { change } ) => {
    const date = new Date();
    const today = formatDate( date );

    return (
        <input
            type="datetime-local"
            min="1970-01-01T00:00"
            max="2050-01-01T00:00"
            defaultValue={ today }
            name="date"
            onChange={ change }
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
            required
        />
    );
}

