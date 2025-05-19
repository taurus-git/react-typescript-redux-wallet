import { lazy } from "react";
import { NavLink } from "react-router-dom";
import { MenuCategory, RouteItem, RouteItemMeta } from "../../../types/navigation";

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

export const getRoutes = (routes: RouteItemMeta[]): RouteItem[] => {
    return routes.map(({ path, element, children }) => ({
        path,
        element,
        ...(children && { children: getRoutes(children) })
    }));
};


export const getCategoryRoutes = (routes:RouteItemMeta[], category: MenuCategory) => {
    return routes.filter( ( { menuCategory }) =>  menuCategory === category );
}



export const lazyLoad = (pageName: string) => {
    return lazy(() => import(`./${pageName}`));
}
