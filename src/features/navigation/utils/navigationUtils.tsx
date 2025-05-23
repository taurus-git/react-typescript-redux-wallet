import { NavLink } from "react-router-dom";
import { RouteItem, RouteItemMeta } from "../../../types/navigation";

export const renderNavItems = ( navGroup: any ) => {
    return (
        <ul>
            { navGroup.map( ( item: RouteItemMeta ) => (
                <li key={ item.path }>
                    { item.icon &&
                        <span className={ item.icon }></span>
                    }
                    <NavLink to={ item.path }>{ item.label }</NavLink>
                </li>
            ) ) }
        </ul>
    )
}

export function filterRoutes<T extends keyof RouteItemMeta> (
    routes: RouteItemMeta[],
    key: T,
    value: RouteItemMeta[T]
): RouteItemMeta[] {
    return routes.filter( ( route ) => route[ key ] === value );
}

export const getRoutes = (routes: RouteItemMeta[]): RouteItem[] => {
    return routes.map(({ path, element, children }) => ({
        path,
        element,
        ...(children && { children: getRoutes(children) })
    }));
};



