import React from 'react';

interface FormFieldSubmitProps {
    isSubmitting: boolean;
}

export const FormFieldSubmit: React.FC<FormFieldSubmitProps> = ( { isSubmitting } ) => {
    return (
        <input
            type="submit"
            disabled={ isSubmitting }
            className="border-none py-04 px-1"
            value={ isSubmitting ? "Сохранение..." : "Сохранить" }/>
    );
}

