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

export const DashboardLayout = () => {
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );
    const isDesktop = useMediaQuery( WidthMediaQueries.md );

    const { open, close, isOpen, closeAll } = useModal();
    const mobileMenu = MODAL_NAME.MOBILE_MENU;

    return (
        <div className="main d-flex">
            { isDesktop &&
                <aside className="sidebar">
                    <SidebarNavigation navigation={ finances }/>
                    <SidebarNavigation navigation={ settings }/>
                </aside>
            }
            { !isDesktop &&
                <div>
                    <button onClick={ () => open( mobileMenu ) }>Menu</button>
                    <Modal isOpen={ isOpen( mobileMenu ) }
                           onClose={ () => close( mobileMenu ) }>
                        <SidebarNavigation navigation={ settings }
                                           options={ { onItemClick: () => closeAll() } }/>
                    </Modal>
                </div>
            }
            <div className="d-flex flex-col w-full">
                <Outlet/>
            </div>
        </div>
    );
}
