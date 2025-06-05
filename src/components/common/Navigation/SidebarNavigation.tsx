import React from 'react';
import { renderNavItems } from "../../../features/navigation/utils/navigationUtils";
import { RouteItemMeta } from "../../../types/navigation";

interface SidebarNavigationProps {
    navigation: RouteItemMeta[],
    options?: any,
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ( { navigation, options } ) => {
    const navItems = renderNavItems( navigation, options );
    return (
        <nav className="sidebar-nav">
            { navItems }
        </nav>
    );
}
