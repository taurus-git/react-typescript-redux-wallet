import { NavLink } from "react-router-dom";
import { NavigationItem } from "../../../types/navigation";

export const renderNavItems = ( navGroup: any ) => {
    return (
        <ul>
            { navGroup.map( ( item: NavigationItem ) => (
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
