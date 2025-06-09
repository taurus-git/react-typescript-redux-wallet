import React from 'react';
import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "../common/Navigation/SidebarNavigation";
import { privateRoutes } from "../../routes/routes";
import { filterRoutes } from "../../features/navigation/utils/navigationUtils";
import { MenuCategory, RouteItemField } from "../../types/navigation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { WidthMediaQueries } from "../../constants/breakpoints";
import { Modal } from "../common/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { MODAL_NAME } from "../../store/features/ui/types";
import { X } from "lucide-react";
import { Container } from "./Container";

export const DashboardLayout = () => {
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );
    const isDesktop = useMediaQuery( WidthMediaQueries.md );

    const { close, isOpen, closeAll } = useModal();
    const mobileMenu = MODAL_NAME.MOBILE_MENU;

    return (
        <div className="main d-flex">
            <Container>
                { isDesktop &&
                    <aside className="sidebar">
                        <SidebarNavigation navigation={ finances }/>
                        <SidebarNavigation navigation={ settings }/>
                    </aside>
                }
                { !isDesktop &&
                    <Modal isOpen={ isOpen( mobileMenu ) }
                           onClose={ () => close( mobileMenu ) }
                           className={ 'modal-menu' }
                           variant={ 'fullHeight' }>
                        <div className="modal-menu__close cursor-pointer d-flex align-center justify-end">
                            <X onClick={ () => close( mobileMenu ) }></X>
                        </div>
                        <SidebarNavigation navigation={ settings }
                                           options={ {
                                               onItemClick: () => closeAll(),
                                               className: 'white-space truncate list-none'
                                           } }/>
                    </Modal>
                }
                <div className="d-flex flex-col w-full">
                    <Outlet/>
                </div>
            </Container>
        </div>
    );
}
