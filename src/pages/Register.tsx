import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES_MAP } from "../routes/routes";
import { PageHeader } from "../components/common/PageHeader";

const Register = () => {
    return (
        <>
            <PageHeader />
            <div>Already have an account?</div>
            <NavLink to={ ROUTES_MAP.login.path }>
                { ROUTES_MAP.login.label }
            </NavLink>
        </>
    );
}

export default Register;

