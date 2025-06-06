import React from 'react';
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { publicRoutes, privateRoutes } from "./routes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { HomeLayout } from "../components/layout/HomeLayout";
import { MainLayout, } from "../components/layout/MainLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { getRoutes } from "../features/navigation/utils/navigationUtils";

export const AppRouter = () => {
    const isAuthenticated = useSelector( ( state: RootState ) => state.auth.isAuthenticated );

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
