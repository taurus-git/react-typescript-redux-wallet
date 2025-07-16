import React from 'react';

interface FormFieldSubmitProps {
    isSubmitting: boolean;
}

export const FormFieldSubmit: React.FC<FormFieldSubmitProps> = ( { isSubmitting } ) => {
    return (
        <input
            type="submit"
            disabled={ isSubmitting }
            value={ isSubmitting ? "Сохранение..." : "Сохранить" }/>
    );
}

