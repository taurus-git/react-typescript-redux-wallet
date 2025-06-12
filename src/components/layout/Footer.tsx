import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { WidthMediaQueries } from "../../constants/breakpoints";
import { filterRoutes } from "../../features/navigation/utils/navigationUtils";
import { privateRoutes } from "../../routes/routes";
import { MenuCategory, RouteItemField } from "../../types/navigation";
import { SidebarNavigation } from "../common/Navigation/SidebarNavigation/SidebarNavigation";

export const Footer = () => {
    const isAuthenticated = useSelector( ( state: RootState ) => state.auth.isAuthenticated );
    const isDesktop = useMediaQuery( WidthMediaQueries.md );
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );

    return (
        <footer>
            <>
                { isAuthenticated && !isDesktop ? (
                    <SidebarNavigation
                        navigation={ finances }
                        options={ {
                            className: 'footerNav'
                        } }/>
                ) : (
                    ""
                ) }
            </>
        </footer>
    );
}
