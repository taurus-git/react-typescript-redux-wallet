import React from 'react';
import { useRoutes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { HomeLayout } from "../components/layout/HomeLayout";
import { MainLayout, } from "../components/layout/MainLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { getRoutes } from "../features/navigation/utils/navigationUtils";

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
                    children: getRoutes( publicRoutes )
                },
                {
                    element: (
                        <PrivateRoute isAuthenticated={ isAuthenticated }>
                            <DashboardLayout/>
                        </PrivateRoute>
                    ),
                    children: getRoutes( privateRoutes )
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
