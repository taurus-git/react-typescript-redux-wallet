import React from 'react';
import { Link, useResolvedPath } from "react-router-dom";

const User = () => {
const logoutPath = useResolvedPath('logout');

    return (
        <>
            <Link to={ logoutPath }>{ 'Logout' }</Link>
        </>
    );
}

export default User;
