import React from 'react';
import { Plus } from "lucide-react";
import styles from "./CtaButton.module.scss";

interface CtaButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
}

export const CtaButton: React.FC<CtaButtonProps> = ( { onClick, children } ) => {
    return (
        <button onClick={ onClick } className={ styles.ctaButton }>
            <span className={ styles.ctaButton__icon }>
                <Plus/>
            </span>
            { children }
        </button>
    );
}
