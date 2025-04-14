import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteDefinitions } from "../constants/routes";

const Register = () => {
    return (
        <>
            <h1>Register Page</h1>
            <div>Already have an account?</div>
            <NavLink to={ RouteDefinitions.LOGIN.path }>
                { RouteDefinitions.LOGIN.name }
            </NavLink>
        </>
    );
}

export default Register;

