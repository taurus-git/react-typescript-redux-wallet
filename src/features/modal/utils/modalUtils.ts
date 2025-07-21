import styles from "../components/Modal.module.scss";
import { ModalVariant } from "../types";

export const getModalClassName = ( variant: ModalVariant ): string => {
    const baseClass = styles.overlay__container;

    const modifiers: Record<ModalVariant, string | undefined> = {
        default: '',
        fullHeight: styles[ 'overlay__container--fullHeight' ],
        fullScreen: styles[ 'overlay__container--fullScreen' ],
    }

    return [ baseClass, modifiers[ variant ] ].filter( Boolean ).join( ' ' );
}
