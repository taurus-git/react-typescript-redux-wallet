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
import { X, Menu } from "lucide-react";
import { Container } from "./Container";
import { LinkToHome } from "../common/Navigation/LinkToHome/LinkToHome";
import { Header } from "./Header";

export const DashboardLayout = () => {
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );
    const isDesktop = useMediaQuery( WidthMediaQueries.md );

    const { open, close, isOpen, closeAll } = useModal();
    const mobileMenu = MODAL_NAME.MOBILE_MENU;

    return (
        <div className="main d-flex flex-1">

            { isDesktop &&
                <aside className="sidebar">
                    <div className="mb-1 py-2 px-2">
                        <LinkToHome className="custom-button d-flex w-fit"/>
                    </div>
                    <SidebarNavigation navigation={ finances } options={ {
                        className: 'white-space truncate list-none nav-list cursor-pointer mx-1'
                    } }/>
                    <SidebarNavigation navigation={ settings } options={ {
                        className: 'white-space truncate list-none nav-list cursor-pointer mx-1'
                    } }/>
                </aside>
            }

            <div className="d-flex flex-col w-full">
                <Header>
                    { !isDesktop &&
                        <>
                            <button
                                onClick={ () => open( mobileMenu ) }
                                className={ "menuButton custom-button d-flex align-items-center justify-center mr-1" }>
                                <Menu/>
                            </button>

                            <LinkToHome className="custom-button d-flex align-items-center justify-center mr-1"/>
                        </>
                    }
                </Header>

                <Container>
                    <Outlet/>
                </Container>
            </div>

            { !isDesktop &&
                <Modal isOpen={ isOpen( mobileMenu ) }
                       onClose={ () => close( mobileMenu ) }
                       className={ 'modal-menu' }
                       variant={ 'fullHeight' }>
                    <div className="modal-menu__close d-flex align-center justify-end">
                        <X className="cursor-pointer" onClick={ () => close( mobileMenu ) }></X>
                    </div>
                    <SidebarNavigation navigation={ settings }
                                       options={ {
                                           onItemClick: () => closeAll(),
                                           className: 'white-space truncate list-none nav-list'
                                       } }/>
                </Modal>
            }
        </div>
    );
}
