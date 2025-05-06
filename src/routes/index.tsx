import React from 'react';
import { useRoutes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { HomeLayout } from "../pages/HomeLayout";
import { MainLayout } from "../components/layout/MainLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";

const isAuthenticated = true; //Todo: remove temporary 'true'

export const AppRouter = () => {
    const routes = [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                { index: true, element: <HomeLayout/> },
                {
                    element: <PublicRoute isAuthenticated={ isAuthenticated }/>,
                    children: publicRoutes
                },
                {
                    element: (
                        <PrivateRoute isAuthenticated={ isAuthenticated }>
                            <DashboardLayout />
                        </PrivateRoute>
                    ),
                    children: privateRoutes
                },
                {
                    path: "*",
                    element: <HomeLayout/>
                }
            ]
        }
    ];

    return useRoutes( routes );
}
