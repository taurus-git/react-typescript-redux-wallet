import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { filterRoutes } from "../features/navigation/utils/navigationUtils";
import { MenuCategory, RouteItemField, RouteItemMeta } from "../types/navigation";
import { ROUTES_MAP, privateRoutes } from "../routes/routes";
import { PageHeader } from "../components/common/PageHeader";

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
                    <ul>
                        { settingsChild.map( ( item: RouteItemMeta ) =>
                            (
                                <li key={ item.path }>
                                    <Link to={ item.path }>
                                        { item.label }
                                    </Link>
                                </li>
                            )
                        ) }
                    </ul>
                </nav>
            }
            <Outlet/>
        </div>
    );
}

export default Settings;
