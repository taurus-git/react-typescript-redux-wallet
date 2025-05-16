import React from 'react';
import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "../common/Navigation/SidebarNavigation";
import { privateRoutes } from "../../routes/routes";
import { getCategoryRoutes } from "../../features/navigation/utils/navigationUtils";
import { MenuCategory } from "../../types/navigation";

export const DashboardLayout = () => {
    const finances = getCategoryRoutes(privateRoutes, MenuCategory.Finances);
    const settings = getCategoryRoutes(privateRoutes, MenuCategory.Settings);

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
