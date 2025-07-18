import { useState } from "react";
import { FormErrors } from "../types";
import { getFormFields } from "../utils/formUtils";

export const useFormValidation = () => {
    const [ errors, setErrors ] = useState<FormErrors>();

    const isFormValid = ( formData: FormData ) => {
        const { amount, categoryId, date } = getFormFields( formData );
        const errorMessages: typeof errors = {};

        if ( !amount || amount <= 0 ) {
            errorMessages.amount = "Введите корректную сумму";
        }

        if ( !categoryId ) {
            errorMessages.categoryId = "Укажите категорию";
        }

        if ( !date ) {
            errorMessages.date = "Установите дату";
        }

        setErrors( errorMessages );
        return Object.keys( errorMessages ).length === 0;
    }

    return {
        errors,
        setErrors,
        isFormValid,
    }
}
