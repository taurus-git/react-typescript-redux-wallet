import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES_MAP } from "./routes";

interface Props {
    isAuthenticated: boolean;
}

export const PublicRoute = ( { isAuthenticated }: Props ) => {
    return isAuthenticated ?
        <Navigate to={ ROUTES_MAP.dashboard.path }/> :
        <Outlet/>;
}
