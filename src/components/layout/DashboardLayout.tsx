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

    const { open, close, isOpen } = useModal();
    const menu1 = MODAL_NAME.MENU1;
    const menu2 = MODAL_NAME.MENU2;

    return (
        <main>
            <div className="main d-flex">
                <div>
                    <button onClick={ () => open( menu1 ) }> menu1</button>
                    <Modal isOpen={ isOpen( menu1 ) }
                           onClose={ () => close( menu1 ) }>
                        <h1>Hello</h1>
                    </Modal>
                </div>

                <div>
                    <button onClick={ () => open( menu2 ) }> menu2</button>
                    <Modal isOpen={ isOpen( menu2 ) }
                           onClose={ () => close( menu2 ) }>
                        <h1>World</h1>
                    </Modal>
                </div>


                { isDesktop &&
                    <aside className="sidebar">
                        <SidebarNavigation navigation={ finances }/>
                        <SidebarNavigation navigation={ settings }/>
                    </aside>
                }
                <div className="d-flex flex-col w-full">
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}
