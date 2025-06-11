import React from 'react';
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const MainLayout = () => {
    return (
        <div className="min-h-screen d-flex flex-column">
            <main className="d-flex flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
