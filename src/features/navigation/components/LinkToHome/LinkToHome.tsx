import React from 'react';
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES_MAP } from "../../../../routes/routes";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import styles from "./LinkToHome.module.scss";

interface LinkToHomeProps {
    className?: string;
}

export const LinkToHome: React.FC<LinkToHomeProps> = ( { className = "" } ) => {
    const isAuthenticated = useSelector( ( state: RootState ) => state.auth.isAuthenticated );
    const homeLink = isAuthenticated ? ROUTES_MAP.dashboard.path : "/";
    return (
        <Link to={ homeLink }
              className={ `homeLink ${ className || '' } ${ styles.homeLink }` }>
            <Wallet/>
        </Link>
    );
}

