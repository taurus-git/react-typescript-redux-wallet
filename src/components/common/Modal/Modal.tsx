import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

type ModalVariant = 'default' | 'fullHeight' | 'fullScreen';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: ModalVariant;
}

const getModalClassName = ( variant: ModalVariant ): string => {
    const baseClass = styles.overlay__container;

    const modifiers: Record<ModalVariant, string | undefined> = {
        default: '',
        fullHeight: styles[ 'overlay__container--fullHeight' ],
        fullScreen: styles[ 'overlay__container--fullScreen' ],
    }

    return [ baseClass, modifiers[ variant ] ].filter( Boolean ).join( ' ' );
}

export const Modal: React.FC<ModalProps> = ( { isOpen, onClose, children, className, variant = 'default' } ) => {
    if ( !isOpen ) return null;

    const rootElement = document.getElementById( "root" );
    if ( !rootElement ) return null;

    const handleClick = ( e: React.MouseEvent ) => {
        e.stopPropagation();
    }

    const containerClass = getModalClassName( variant );

    return ReactDOM.createPortal(
        <div className={ `overlay ${ className }` }>
            <div className={ styles.overlay__background } onClick={ onClose }>
                <div className={ containerClass } onClick={ handleClick }>
                    { children }
                </div>
            </div>
        </div>,
        rootElement
    );
};
