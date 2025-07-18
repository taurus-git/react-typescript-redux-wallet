import React from 'react';
import { RouteItemMeta } from "../../types";
import { NavLink } from "react-router-dom";
import styles from "./RenderNavItems.module.scss";

interface RenderNavItemsProps {
    navGroup: any,
    options?: {
        onItemClick?: () => void,
        className?: string,
    }
}

export const RenderNavItems: React.FC<RenderNavItemsProps> = ( { navGroup, options } ) => {
    return (
        <ul className={ `${ styles.navList } ${ options?.className ? options?.className : "" } ` }>
            { navGroup.map( ( item: RouteItemMeta ) => (
                <li key={ item.path }
                    onClick={ options?.onItemClick }>
                    <NavLink to={ item.path }>
                        { item.icon &&
                            <span className={ styles.navList__icon }>{ item.icon }</span>
                        }
                        <p>{ item.label }</p>
                    </NavLink>
                </li>
            ) ) }
        </ul>
    )
}
