import { NavLink } from "react-router-dom";
import { RouteItem, RouteItemMeta } from "../../../types/navigation";

export function filterRoutes<T extends keyof RouteItemMeta>(
    routes: RouteItemMeta[],
    key: T,
    value: RouteItemMeta[T]
): RouteItemMeta[] {
    return routes.filter( ( route ) => route[ key ] === value );
}

export const getRoutes = ( routes: RouteItemMeta[] ): RouteItem[] => {
    return routes.map( ( { path, element, children } ) => ({
        path,
        element,
        ...(children && { children: getRoutes( children ) })
    }) );
};



