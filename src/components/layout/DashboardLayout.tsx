import React from 'react';
import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "../common/Navigation/SidebarNavigation";
import { NAVIGATION } from "../../constants/navigation";

export const DashboardLayout = () => {
    return (
        <main>
            <div className="main d-flex">
                <aside className="sidebar">
                    <SidebarNavigation navigation={ NAVIGATION.FINANCES }/>
                    <SidebarNavigation navigation={ NAVIGATION.SETTINGS }/>
                </aside>
                <div className="d-flex flex-col w-full">
                    <Outlet/>
                </div>
            </div>
        </main>
    );
}
