import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { openModal, closeModal, closeAllModals } from "../redux/uiSlice";
import { ModalName } from "../types";

export function useModal() {
    const dispatch = useDispatch<AppDispatch>();
    const modals = useSelector( ( state: RootState ) => state.ui.modals );

    const open = useCallback( ( name: ModalName ) => (
        dispatch( openModal( { name: name } ) )
    ), [ dispatch ] );

    const close = useCallback( ( name: ModalName ) => (
        dispatch( closeModal( { name: name } ) )
    ), [ dispatch ] );

    const closeAll = useCallback( () => (
        dispatch( closeAllModals() )
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
                closeAll();
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
        closeAll,
        isOpen,
        toggle,
        modals,
    };
}
