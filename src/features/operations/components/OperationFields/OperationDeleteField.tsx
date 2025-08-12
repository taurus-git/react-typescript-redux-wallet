import React from 'react';
import styles from '../OperationList.module.scss';
import { AllOperations } from "../../types";
import { Trash2 } from 'lucide-react';
import { Modal } from "../../../modal/components/Modal";
import { useModal } from "../../../modal/hooks/useModal";
import { MODAL_NAME } from "../../../modal/types";

const getOperationModalId = ( id: string ) =>
    `${ MODAL_NAME.DELETE_OPERATION }_${ id }`;

interface OperationDeleteFieldProps<T extends AllOperations> {
    item: T,
    onRemove: ( item: T ) => void;
}

export const OperationDeleteField =
    <T extends AllOperations>(
        {
            item,
            onRemove
        }: OperationDeleteFieldProps<T>
    ) => {
        const { open, close, isOpen } = useModal();
        const modalId = getOperationModalId( item.id );

        return (
            <>
                <Trash2
                    className={ `${styles.OperationList__DeleteField}` }
                    onClick={ () => open( modalId ) }>
                    Удалить
                </Trash2>

                <Modal isOpen={ isOpen( modalId ) }
                       onClose={ () => close( modalId ) }>
                    <>
                        Удалить?
                        <button
                            onClick={ () => {
                                onRemove( item );
                                close( modalId )
                            } }>
                            Да
                        </button>
                        <button
                            onClick={ () => close( modalId ) }>
                            Нет
                        </button>
                    </>

                </Modal>
            </>
        );
    }


