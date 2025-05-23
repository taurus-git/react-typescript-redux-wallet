import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageHeader } from "../components/common/PageHeader";
import { ROUTES_MAP } from "../routes/routes";

const Login = () => {
    return (
        <>
            <PageHeader />
            <div>or</div>
            <NavLink to={ ROUTES_MAP.register.path }>
                { ROUTES_MAP.register.label }
            </NavLink>
        </>
    );
}

export default Login;
