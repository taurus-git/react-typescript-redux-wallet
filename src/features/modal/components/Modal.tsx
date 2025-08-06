import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { getModalClassName } from "../utils/modalUtils";
import { ModalVariant } from "../types";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    variant?: ModalVariant;
}

export const Modal: React.FC<ModalProps> = (
    {
        isOpen,
        onClose,
        children,
        className,
        containerClassName,
        variant = 'default'
    } ) => {
    if ( !isOpen ) return null;

    const rootElement = document.getElementById( "root" );
    if ( !rootElement ) return null;

    const handleClick = ( e: React.MouseEvent ) => {
        e.stopPropagation();
    }

    const containerClass = getModalClassName( variant );

    return ReactDOM.createPortal(
        <div className={ `overlay ${ className }` }>
            <div className={ `${ styles.overlay__background }` } onClick={ onClose }>
                <div className={ `${ containerClass } ${ containerClassName ?? '' }` } onClick={ handleClick }>
                    { children }
                </div>
            </div>
        </div>,
        rootElement
    );
};
