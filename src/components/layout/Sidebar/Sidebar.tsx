import React from 'react';
import styles from "./Sidebar.module.scss";
import { LinkToHome } from "../../../features/navigation/components/LinkToHome/LinkToHome";
import { SidebarNavigation } from "../../../features/navigation/components/SidebarNavigation/SidebarNavigation";
import { filterRoutes } from "../../../features/navigation/utils/navigationUtils";
import { privateRoutes } from "../../../routes/routes";
import { MenuCategory, RouteItemField } from "../../../features/navigation/types";

export const Sidebar = () => {
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );

    return (
        <aside className={ styles.sidebar }>
            <div className="mb-1 py-2 px-2">
                <LinkToHome className="custom-button d-flex w-fit"/>
            </div>
            <SidebarNavigation navigation={ finances }/>
            <SidebarNavigation navigation={ settings }/>
        </aside>
    );
}

