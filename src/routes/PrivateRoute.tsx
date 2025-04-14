import React from 'react';
import { Navigate } from "react-router-dom";
import { RouteDefinitions } from "../constants/routes";

interface Props {
    children: React.ReactNode;
    isAuthenticated: boolean;
}

export const PrivateRoute = ( { children, isAuthenticated }: Props ) => {
    return isAuthenticated ? <>{ children }</> : <Navigate to={ RouteDefinitions.LOGIN.path }/>;
}


