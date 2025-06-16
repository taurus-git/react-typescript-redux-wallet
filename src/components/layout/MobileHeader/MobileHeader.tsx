import React from 'react';
import { Menu } from "lucide-react";
import { LinkToHome } from "../../common/Navigation/LinkToHome/LinkToHome";
import { useModal } from "../../../hooks/useModal";
import { MODAL_NAME } from "../../../store/features/ui/types";

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
