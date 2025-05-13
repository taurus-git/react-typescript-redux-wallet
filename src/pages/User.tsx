import React from 'react';
import { Link } from "react-router-dom";
import { RouteDefinitions } from "../constants/routes";

const User = () => {
    return (
        <>
            <h1>Страница настроек пользователя</h1>
            <Link to={ RouteDefinitions.LOGOUT.path }>{ RouteDefinitions.LOGOUT.label }</Link>
        </>
    );
}

export default User;
