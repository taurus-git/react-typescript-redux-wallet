import React from 'react';
import { RouteItemMeta } from "../../types";
import { RenderNavItems } from "../RenderNavItems/RenderNavItems";

interface SidebarNavigationProps {
    navigation: RouteItemMeta[],
    options?: any,
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ( { navigation, options } ) => {
    return (
        <nav className="sidebar-nav">
            <RenderNavItems navGroup={ navigation } options={ options }/>
        </nav>
    );
}
