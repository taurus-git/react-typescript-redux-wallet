import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { filterRoutes } from "../features/navigation/utils/navigationUtils";
import { MenuCategory, RouteItemField } from "../features/navigation/types";
import { ROUTES_MAP, privateRoutes } from "../routes/routes";
import { PageHeader } from "../components/common/PageHeader";
import { RenderNavItems } from "../features/navigation/components/RenderNavItems/RenderNavItems";

const Settings = () => {
    const location = useLocation();
    const isSettingsRoot = location.pathname === ROUTES_MAP.settings.path;
    const settings = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Settings );
    const settingsChild = settings[ 0 ].children;

    return (
        <div>
            <PageHeader/>
            { isSettingsRoot && Array.isArray( settingsChild ) &&
                <nav>
                    <RenderNavItems navGroup={ settingsChild } options={ { className: "list-none" } }/>
                </nav>
            }
            <Outlet/>
        </div>
    );
}

export default Settings;
