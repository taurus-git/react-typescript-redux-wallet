import React from 'react';
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ROUTES_MAP } from "../../routes/routes";

export const Header = () => {
    const isAuthenticated = useSelector( ( state: RootState ) => state.auth.isAuthenticated );

    const homeLink = isAuthenticated ? ROUTES_MAP.dashboard.path : "/";
    return (
        <header className={ styles.header }>
            <h6>
                <Link to={ homeLink }>{ 'Главная' }</Link>
            </h6>
        </header>
    );
}
