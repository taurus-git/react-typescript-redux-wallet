import React from 'react';
import { X } from "lucide-react";
import { SidebarNavigation } from "../../../features/navigation/components/SidebarNavigation/SidebarNavigation";
import { Modal } from "../../../features/modal/components/Modal";
import { useModal } from "../../../features/modal/hooks/useModal";
import { MODAL_NAME } from "../../../features/modal/types";
import { filterRoutes } from "../../../features/navigation/utils/navigationUtils";
import { privateRoutes } from "../../../routes/routes";
import { MenuCategory, RouteItemField } from "../../../features/navigation/types";

export const MobileMenuModal = () => {
    const { close, isOpen, closeAll } = useModal();
    const mobileMenu = MODAL_NAME.MOBILE_MENU;
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );

    return (
        <Modal isOpen={ isOpen( mobileMenu ) }
               onClose={ () => close( mobileMenu ) }
               className={ 'modal-menu' }
               variant={ 'fullHeight' }>
            <div className="modal-menu__close d-flex align-center justify-end">
                <X className="close cursor-pointer" onClick={ () => close( mobileMenu ) }></X>
            </div>
            <SidebarNavigation navigation={ settings }
                               options={ {
                                   onItemClick: () => closeAll(),
                               } }/>
        </Modal>
    );
}
