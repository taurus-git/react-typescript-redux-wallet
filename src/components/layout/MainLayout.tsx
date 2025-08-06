import React from 'react';
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="h-100 dh-100 d-flex flex-col">
            <Outlet/>
        </div>
    );
}
