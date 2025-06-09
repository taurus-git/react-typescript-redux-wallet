import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

type ModalVariant = 'default' | 'fullHeight';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: ModalVariant;
}

const variantClasses: Record<ModalVariant, string> = {
    default: styles.overlay__container,
    fullHeight: `${ styles.overlay__container } ${ styles['overlay__container--fullHeight'] } `,
}

export const Modal: React.FC<ModalProps> = ( { isOpen, onClose, children, className, variant = 'default' } ) => {
    if ( !isOpen ) return null;

    const rootElement = document.getElementById( "root" );
    if ( !rootElement ) return null;

    const handleClick = ( e: React.MouseEvent ) => {
        e.stopPropagation();
    }

    const containerClass = variantClasses[ variant ];

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
