import { lazy } from 'react';
import { AccessType, MenuCategory, RouteItemField, RouteItemMeta } from "../types/navigation";
import { filterRoutes } from "../features/navigation/utils/navigationUtils";

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

export const ROUTES_MAP: Record<string, RouteItemMeta> = {
    login: {
        path: "login",
        element: <Login/>,
        access: AccessType.Public,
        menuCategory: MenuCategory.Auth,
        label: "Логин",
        icon: "icon-login",
    },
    register: {
        path: "register",
        element: <Register/>,
        access: AccessType.Public,
        menuCategory: MenuCategory.Auth,
        label: "Регистрация",
        icon: "icon-register",
    },
    dashboard: {
        path: "dashboard",
        element: <Dashboard/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Журнал",
        icon: "icon-dashboard",
    },
    accounts: {
        path: "accounts",
        element: <Accounts/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Счета",
        icon: "icon-accounts",
    },
    income: {
        path: "income",
        element: <Income/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Доходы",
        icon: "icon-income",
    },
    expenses: {
        path: "expenses",
        element: <Expenses/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Расходы",
        icon: "icon-expenses",
    },
    settings: {
        path: "settings",
        element: <Settings/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Settings,
        label: "Настройки",
        icon: "icon-settings",
        children: [
            {
                path: "user",
                element: <User/>,
                access: AccessType.Private,
                menuCategory: MenuCategory.Settings,
                label: "Пользователь",
                icon: "icon-user",
                children: [
                    {
                        path: "logout",
                        element: <Logout/>,
                        access: AccessType.Private,
                        menuCategory: MenuCategory.Settings,
                        label: "Выйти",
                        icon: "icon-user-logout",
                    }
                ]
            },
            {
                path: "general",
                element: <General/>,
                access: AccessType.Private,
                menuCategory: MenuCategory.Settings,
                label: "Общие настройки",
                icon: "icon-general-settings",
            },
        ]
    }
};

export const ALL_ROUTES = Object.values( ROUTES_MAP );
export const publicRoutes = filterRoutes( ALL_ROUTES, RouteItemField.Access, AccessType.Public );
export const privateRoutes = filterRoutes( ALL_ROUTES, RouteItemField.Access, AccessType.Private );

