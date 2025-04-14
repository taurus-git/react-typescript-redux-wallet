import { lazy } from "react";
import { RouteDefinitions } from "../constants/routes";
import Logout from "../pages/Logout";

const Login = lazy( () => import('../pages/Login') );
const Register = lazy( () => import('../pages/Register') );
const Dashboard = lazy( () => import('../pages/Dashboard') );
const Settings = lazy( () => import('../pages/Settings') );

export const publicRoutes = [
    { path: RouteDefinitions.LOGIN.path, element: <Login/> },
    { path: RouteDefinitions.REGISTER.path, element: <Register/> },
];

export const privateRoutes = [
    { path: RouteDefinitions.DASHBOARD.path, element: <Dashboard/> },
    { path: RouteDefinitions.SETTINGS.path, element: <Settings/> },
    { path: RouteDefinitions.LOGOUT.path, element: <Logout/> },
];
