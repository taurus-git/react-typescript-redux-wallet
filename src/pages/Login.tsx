import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from "../components/common/PageHeader";
import { ROUTES_MAP } from "../routes/routes";

const Login = () => {
    return (
        <>
            <PageHeader />
            <div>or</div>
            <Link to={ ROUTES_MAP.register.path }>
                { ROUTES_MAP.register.label }
            </Link>
        </>
    );
}

export default Login;
