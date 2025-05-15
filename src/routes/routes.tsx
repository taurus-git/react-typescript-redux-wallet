import { lazy } from "react";
import { RouteDefinitions } from "../constants/routes";

/*Todo: try to improve this huge list of imports*/
const Login = lazy( () => import('../pages/Login') );
const Register = lazy( () => import('../pages/Register') );
const Dashboard = lazy( () => import('../pages/Dashboard') );
const Settings = lazy( () => import('../pages/Settings') );
const User = lazy( () => import('../pages/User') );
const Logout = lazy( () => import('../pages/Logout') );
const General = lazy( () => import('../pages/General') );
const Accounts = lazy( () => import('../pages/Accounts') );
const Income = lazy( () => import('../pages/Income') );
const Expenses = lazy( () => import('../pages/Expenses') );

export const publicRoutes = [
    { path: RouteDefinitions.LOGIN.path, element: <Login/> },
    { path: RouteDefinitions.REGISTER.path, element: <Register/> },
];

export const privateRoutes = [
    { path: RouteDefinitions.DASHBOARD.path, element: <Dashboard/> },
    { path: RouteDefinitions.ACCOUNTS.path, element: <Accounts/> },
    { path: RouteDefinitions.INCOME.path, element: <Income/> },
    { path: RouteDefinitions.EXPENSES.path, element: <Expenses/> },
    {
        path: RouteDefinitions.SETTINGS.path,
        element: <Settings/>,
        children: [
            {
                path: RouteDefinitions.USER.path, element: <User/>,
                children: [
                    {
                        path: RouteDefinitions.LOGOUT.path, element: <Logout/>
                    },
                ]
            },
            {
                path: RouteDefinitions.GENERAL.path, element: <General/>
            },
        ],
    },
];
