import React from 'react';

export const FormFieldDate = () => {
    const today = new Date().toISOString().split( "T" )[0];

    return (
        <>
            <input type="date" min="1970-00-01" max="2050-00-01" defaultValue={ today } name="date" required/>
        </>
    );
}

