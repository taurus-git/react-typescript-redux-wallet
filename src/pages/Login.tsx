import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteDefinitions } from "../constants/routes";

const Login = () => {
    return (
        <>
            <h1>Login Page</h1>
            <div>or</div>
            <NavLink to={ RouteDefinitions.REGISTER.path }>
                { RouteDefinitions.REGISTER.name }
            </NavLink>
        </>
    );
}

export default Login;
