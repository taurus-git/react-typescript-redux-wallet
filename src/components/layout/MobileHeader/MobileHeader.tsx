import React from 'react';
import { Menu } from "lucide-react";
import { LinkToHome } from "../../../features/navigation/components/LinkToHome/LinkToHome";
import { useModal } from "../../../features/modal/hooks/useModal";
import { MODAL_NAME } from "../../../features/modal/types";

export const MobileHeader = () => {
    const { open } = useModal();
    const mobileMenu = MODAL_NAME.MOBILE_MENU;

    return (
        <>
            <button
                onClick={ () => open( mobileMenu ) }
                className={ "menuButton custom-button d-flex align-items-center justify-center mr-1" }>
                <Menu/>
            </button>

            <LinkToHome className="custom-button d-flex align-items-center justify-center mr-1"/>
        </>
    );
}
