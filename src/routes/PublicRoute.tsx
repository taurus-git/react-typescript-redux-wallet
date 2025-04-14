import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { RouteDefinitions } from "../constants/routes";

interface Props {
    isAuthenticated: boolean;
}

export const PublicRoute = ( { isAuthenticated }: Props ) => {
    return isAuthenticated ?
        <Navigate to={ RouteDefinitions.DASHBOARD.path }/> :
        <Outlet/>;
}
