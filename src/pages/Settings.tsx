import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { getCategoryRoutes } from "../features/navigation/utils/navigationUtils";
import { privateRoutes } from "../routes/routes";
import { MenuCategory, RouteItemMeta } from "../types/navigation";

const Settings = () => {
    const location = useLocation();
    const settingsRootPath = `/${'settings'}`; //Todo: try to add constant instead inline text
    const isSettingsRoot = location.pathname === settingsRootPath;
    const settings = getCategoryRoutes(privateRoutes, MenuCategory.Settings);
    const settingsChild = settings[0].children;

    return (
        <div>
            <h1>Settings</h1>{/*Todo: try to add constant instead inline text*/}

            <nav>
                <ul>
                    { isSettingsRoot && Array.isArray(settingsChild) &&
                        <>
                            { settingsChild.map( ( item: RouteItemMeta ) =>
                                (
                                    <li key={ item.path }>
                                        <Link to={ item.path }>
                                            { item.label }
                                        </Link>
                                    </li>
                                )
                            ) }
                        </>
                    }
                </ul>
            </nav>

            <Outlet/>
        </div>
    );
}

export default Settings;
