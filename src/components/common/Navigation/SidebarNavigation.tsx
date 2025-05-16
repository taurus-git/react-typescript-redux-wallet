import React from 'react';
import { renderNavItems } from "../../../features/navigation/utils/navigationUtils";
import { RouteItemMeta } from "../../../types/navigation";

interface SidebarNavigationProps {
    navigation: RouteItemMeta[],
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ( { navigation } ) => {
    const navItems = renderNavItems( navigation );
    return (
        <nav className="sidebar-nav">
            { navItems }
        </nav>
    );
}
