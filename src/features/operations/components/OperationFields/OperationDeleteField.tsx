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
                    className={`${ styles.OperationDeleteField__trigger }` }
                    onClick={ () => open( modalId ) }>
                    Удалить
                </Trash2>

                <Modal isOpen={ isOpen( modalId ) }
                       onClose={ () => close( modalId ) }
                       containerClassName={ `${ styles.OperationDeleteField__modal }` }>
                    <>
                        <div className={ `px-2 py-2 d-flex flex-col justify-center align-center ${ styles.OperationDeleteField__content }`}>
                            <h3 className={  `mb-1 ${ styles.OperationDeleteField__question }`}>Удалить?</h3>
                            <div className={  `d-flex justify-center align-center ${ styles.OperationDeleteField__actions }` }>
                                <button
                                    onClick={ () => {
                                        onRemove( item );
                                        close( modalId )
                                    } }
                                    className={`cursor-pointer ${ styles.OperationDeleteField__button } ${ styles['OperationDeleteField__button--confirm'] }`}>
                                    Да
                                </button>
                                <button
                                    onClick={ () => close( modalId ) }
                                    className={`cursor-pointer ${ styles.OperationDeleteField__button } ${ styles['OperationDeleteField__button--cancel'] }`}>
                                    Нет
                                </button>
                            </div>
                        </div>
                    </>

                </Modal>
            </>
        );
    }


