import React from 'react';
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
    isAuthenticated: boolean;
}

export const PrivateRoute = ( { children, isAuthenticated }: Props ) => {
    return isAuthenticated ?
        <>{ children }</> :
        <Navigate to={ 'login' }/>;  //Todo: try to add constant instead inline text
}


