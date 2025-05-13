import React from 'react';
import { NavigationGroup } from "../../../types/navigation";
import { NavLink } from "react-router-dom";

interface SidebarNavigationProps {
    navigation: NavigationGroup[]
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ( { navigation } ) => {
    return (
        <nav className="sidebar-nav">
            {
                navigation.map( ( group: NavigationGroup ) => (
                        <div key={ group.id } className="nav-group">
                            <h3 className="nav-group-title">{ group.title }</h3>
                            <ul className="nav-items">
                                { group.items.map( ( item ) => (
                                    <li key={ item.path } className="nav-item">
                                        <NavLink to={ item.path } className="nav-link">
                                            <span className="nav-label">
                                                { item.label }
                                            </span>
                                        </NavLink>
                                    </li>
                                ) ) }
                            </ul>
                        </div>
                    )
                )
            }
        </nav>
    );
}
