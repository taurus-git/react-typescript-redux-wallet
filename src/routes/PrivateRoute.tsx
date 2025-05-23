import React from 'react';
import { Navigate } from "react-router-dom";
import { ROUTES_MAP } from "./routes";

interface Props {
    children: React.ReactNode;
    isAuthenticated: boolean;
}

export const PrivateRoute = ( { children, isAuthenticated }: Props ) => {
    return isAuthenticated ?
        <>{ children }</> :
        <Navigate to={ ROUTES_MAP.login.path }/>;
}


