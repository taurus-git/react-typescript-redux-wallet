import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
    return (
        <div className="min-h-screen d-flex flex-column">
            <Header/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
