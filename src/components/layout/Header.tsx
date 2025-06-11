import React from 'react';
import styles from "./Header.module.scss";
import { Container } from "./Container";

interface HeaderProps {
    children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ( { children } ) => {
    return (
        <header className={ `backdrop-blur ${ styles.header }` } data-location="header">
            <Container>
                <div className="header__wrapper d-flex align-center">
                    { children }
                </div>
            </Container>
        </header>
    );
}
