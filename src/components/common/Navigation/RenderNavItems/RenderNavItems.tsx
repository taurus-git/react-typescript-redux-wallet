import React from 'react';
import { RouteItemMeta } from "../../../../types/navigation";
import { NavLink } from "react-router-dom";

interface RenderNavItemsProps {
    navGroup: any,
    options?: {
        onItemClick?: () => void,
        className?: string,
    }
}

export const RenderNavItems: React.FC<RenderNavItemsProps> = ( { navGroup, options } ) => {
    return (
        <ul>
            { navGroup.map( ( item: RouteItemMeta ) => (
                <li key={ item.path }
                    onClick={ options?.onItemClick }
                    className={ `${options?.className}` }>
                    <NavLink to={ item.path }>
                        { item.icon &&
                            <span>{ item.icon }</span>
                        }
                        <span>{ item.label }</span>
                    </NavLink>
                </li>
            ) ) }
        </ul>
    )
}
