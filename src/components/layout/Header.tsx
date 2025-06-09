import React from 'react';
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ROUTES_MAP } from "../../routes/routes";
import { Menu, Wallet } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { WidthMediaQueries } from "../../constants/breakpoints";
import { MODAL_NAME } from "../../store/features/ui/types";
import { useModal } from "../../hooks/useModal";
import { Container } from "./Container";

export const Header = () => {
    const isAuthenticated = useSelector( ( state: RootState ) => state.auth.isAuthenticated );
    const isDesktop = useMediaQuery( WidthMediaQueries.md );
    const mobileMenu = MODAL_NAME.MOBILE_MENU;
    const { open } = useModal();

    const homeLink = isAuthenticated ? ROUTES_MAP.dashboard.path : "/";
    return (
        <header className={ `backdrop-blur ${ styles.header }` }>
            <Container>
                <div className="header__wrapper d-flex align-center">
                    { !isDesktop &&
                        <button
                            onClick={ () => open( mobileMenu ) }
                            className={ `${styles.header__menuButton} custom-button`}>
                            <Menu/>
                        </button>
                    }

                    <Link to={ homeLink }
                          className={ `${ styles.header__homeLink } d-flex align-items-center justify-center` }>
                        <Wallet/>
                    </Link>
                </div>
            </Container>
        </header>
    );
}
