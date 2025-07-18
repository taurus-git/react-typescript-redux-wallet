import React from 'react';
import { X } from "lucide-react";
import { FinanceForm } from "../FinanceForm";
import { Modal } from "../../../modal/components/Modal";
import { useModal } from "../../../modal/hooks/useModal";
import { MODAL_NAME } from "../../../modal/types";
import { CtaButton } from "../../../../components/common/CtaButton/CtaButton";

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
