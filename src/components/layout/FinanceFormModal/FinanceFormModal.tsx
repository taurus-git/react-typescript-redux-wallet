import React from 'react';
import { X } from "lucide-react";
import { FinanceForm } from "../../common/FinanceForm/FinanceForm";
import { Modal } from "../../common/Modal/Modal";
import { useModal } from "../../../hooks/useModal";
import { MODAL_NAME } from "../../../store/features/ui/types";
import { CtaButton } from "../../common/CtaButton/CtaButton";

export const FinanceFormModal = () => {
    const { open, close, isOpen } = useModal();
    const financeForm = MODAL_NAME.FINANCE_FORM;

    return (
        <>
            <CtaButton onClick={ () => open( financeForm ) }/>
            <Modal isOpen={ isOpen( financeForm ) }
                   onClose={ () => close( financeForm ) }
                   className={ 'financeForm' }
                   variant={ 'fullScreen' }>
                <div className="modal-menu__close d-flex align-center justify-end">
                    <X className="close cursor-pointer" onClick={ () => close( financeForm ) }></X>
                </div>
                <FinanceForm onClose={ () => close( financeForm ) }/>
            </Modal>
        </>

    );
}
