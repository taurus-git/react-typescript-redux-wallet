import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ( { isOpen, onClose, children } ) => {
    if ( !isOpen ) return null;

    const rootElement = document.getElementById( "root" );
    if ( !rootElement ) return null;

    const handleClick = ( e: React.MouseEvent ) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal(
        <div className="overlay">
            <div className={ styles.overlay__background } onClick={ onClose }>
                <div className={ styles.overlay__container } onClick={  handleClick }>
                    { children }
                </div>
            </div>
        </div>,
        rootElement
    );
};
