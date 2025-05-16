import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    isAuthenticated: boolean;
}

export const PublicRoute = ( { isAuthenticated }: Props ) => {
    return isAuthenticated ?
        <Navigate to={ 'dashboard' }/> : //Todo: try to add constant instead inline text
        <Outlet/>;
}
