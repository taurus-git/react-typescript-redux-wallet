import React from 'react';
import { renderNavItems } from "../../../features/navigation/utils/navigationUtils";
import { NavigationItem } from "../../../types/navigation";

interface SidebarNavigationProps {
    navigation: NavigationItem[],
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ( { navigation } ) => {
    const navItems = renderNavItems( navigation );
    return (
        <nav className="sidebar-nav">
            { navItems }
        </nav>
    );
}
