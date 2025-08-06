import React from 'react';
import styles from './Footer.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from "../../store";
import { useMediaQuery } from "../../features/navigation/hooks/useMediaQuery";
import { WidthMediaQueries } from "../../features/navigation/types";
import { filterRoutes } from "../../features/navigation/utils/navigationUtils";
import { privateRoutes } from "../../routes/routes";
import { MenuCategory, RouteItemField } from "../../features/navigation/types";
import { SidebarNavigation } from "../../features/navigation/components/SidebarNavigation/SidebarNavigation";

export const Footer = () => {
    const isAuthenticated = useSelector( ( state: RootState ) => state.auth.isAuthenticated );
    const isDesktop = useMediaQuery( WidthMediaQueries.md );
    const finances = filterRoutes( privateRoutes, RouteItemField.MenuCategory, MenuCategory.Finances );

    return (
        <footer className={ `backdrop-blur d-flex ${ styles.footer }` }>
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
