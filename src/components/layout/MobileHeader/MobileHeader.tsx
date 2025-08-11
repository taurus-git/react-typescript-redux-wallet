import React from 'react';
import { Menu } from "lucide-react";
import { LinkToHome } from "../../../features/navigation/components/LinkToHome/LinkToHome";
import { useModal } from "../../../features/modal/hooks/useModal";
import { MODAL_NAME } from "../../../features/modal/types";
import { Header } from "../Header";

export const MobileHeader = () => {
    const { open } = useModal();
    const mobileMenu = MODAL_NAME.MOBILE_MENU;

    return (
        <>
            <Header>
                <div className="flex-1">
                    <button
                        onClick={ () => open( mobileMenu ) }
                        className={ "menuButton custom-button d-flex align-items-center justify-center mr-1" }>
                        <Menu/>
                    </button>
                </div>
                <div className="flex-1">
                    <LinkToHome className="custom-button d-flex align-items-center justify-center mr-1"/>
                </div>
                <div className="flex-1"></div>
            </Header>
        </>
    );
}
