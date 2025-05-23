import React from 'react';
import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "../common/Navigation/SidebarNavigation";
import { privateRoutes } from "../../routes/routes";
import { filterRoutes } from "../../features/navigation/utils/navigationUtils";
import { MenuCategory, RouteItemField } from "../../types/navigation";

export const DashboardLayout = () => {
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );

    return (
        <main>
            <div className="main d-flex">
                <aside className="sidebar">
                    <SidebarNavigation navigation={ finances }/>
                    <SidebarNavigation navigation={ settings }/>
                </aside>
                <div className="d-flex flex-col w-full">
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}
