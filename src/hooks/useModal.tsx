import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addModal, closeModal, closeAllModals } from "../store/features/ui/uiSlice";
import { ModalName } from "../store/features/ui/types";

export function useModal() {
    const dispatch = useDispatch<AppDispatch>();
    const modals = useSelector( ( state: RootState ) => state.ui.modals );

    const open = useCallback( ( name: ModalName ) => (
        dispatch( addModal( { name: name } ) )
    ), [ dispatch ] );

    const close = useCallback( ( name: ModalName ) => (
        dispatch( closeModal( { name: name } ) )
    ), [ dispatch ] );

    const isOpen = useCallback( ( name: ModalName ) => (
        modals.some( ( modal ) =>
            modal.name === name
        )
    ), [ modals ] );

    const toggle = useCallback( ( name: ModalName ) => {
        const exist = isOpen( name );

        if ( exist ) {
            close( name );
        } else {
            open( name )
        }
    }, [ open, close, isOpen ] );

    useEffect( () => {
        if ( !modals.length ) return;

        document.body.style.overflow = "hidden";
        const handleEscape = ( e: KeyboardEvent ) => {
            if ( e.key === "Escape" ) {
                dispatch( closeAllModals() );
            }
        }

        document.addEventListener( "keydown", handleEscape );
        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener( "keydown", handleEscape )
        }
    }, [ dispatch, modals ] );

    return {
        open,
        close,
        toggle,
        isOpen,
        closeAllModals,
        modals,
    };
}
