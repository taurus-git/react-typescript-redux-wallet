import React from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { RouteDefinitions } from "../constants/routes";
import { settingsNavItems } from '../constants/navigation';
import { NavigationItem } from "../types/navigation";


const Settings = () => {
    const location = useLocation();
    const settingsRootPath = `/${ RouteDefinitions.SETTINGS.path }`;
    const isSettingsRoot = location.pathname === settingsRootPath;

    return (
        <div>
            <h1>{ RouteDefinitions.SETTINGS.label }</h1>

            <nav>
                <ul>
                    { isSettingsRoot &&
                        <>
                            { settingsNavItems.map( ( item: NavigationItem ) =>
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
