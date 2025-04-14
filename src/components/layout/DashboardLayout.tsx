import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { RouteDefinitions } from "../../constants/routes";

export const DashboardLayout = () => {
    return (
        <>
            <main>
                <aside>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={ RouteDefinitions.DASHBOARD.path }>
                                    { RouteDefinitions.DASHBOARD.name }
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={ RouteDefinitions.SETTINGS.path }>
                                    { RouteDefinitions.SETTINGS.name }
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </aside>
                <div className="main">
                    <Outlet/>
                </div>
            </main>
        </>
    );
}
