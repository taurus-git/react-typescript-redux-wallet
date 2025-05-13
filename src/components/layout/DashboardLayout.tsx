import React from 'react';
import { Outlet } from "react-router-dom";
import { sidebarNavigation } from "../../constants/navigation";
import { SidebarNavigation } from "../common/Navigation/SidebarNavigation";

export const DashboardLayout = () => {
    return (
        <>
            <main>
                <div className="main d-flex">
                    <aside className="sidebar">
                        <SidebarNavigation navigation={ sidebarNavigation }/>
                    </aside>
                    <div className="d-flex flex-col w-full">
                        <Outlet/>
                    </div>
                </div>
            </main>
        </>
    );
}
