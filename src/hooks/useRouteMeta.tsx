import { ALL_ROUTES } from "../routes/routes"
import { useLocation, matchRoutes } from "react-router-dom";
import { RouteItemMeta } from "../types/navigation";

export function useRouteMeta() {
    const location = useLocation();
    const matches = matchRoutes( ALL_ROUTES, location );
    const found = matches?.at(-1);

    return found?.route as RouteItemMeta | undefined;
}
