import React from 'react';

interface FinanceFormProps {
    onClose?: () => void;
}

export const FinanceForm:React.FC<FinanceFormProps> = ({onClose}) => {
    return (
        <form>
            Form
            <button onClick={onClose}>Close form</button>
        </form>
    );
}

