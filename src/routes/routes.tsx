import { lazy } from 'react';
import { AccessType, MenuCategory, RouteItemField, RouteItemMeta } from "../features/navigation/types";
import { filterRoutes } from "../features/navigation/utils/navigationUtils";
import {
    ScanFace,
    UserPen,
    Gauge,
    WalletCards,
    CirclePlus,
    CircleMinus,
    Settings2,
    UserRound,
    LogOut,
    Wrench
} from "lucide-react";

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

const size = 20;

export const ROUTES_MAP: Record<string, RouteItemMeta> = {
    login: {
        path: "/login",
        element: <Login/>,
        access: AccessType.Public,
        menuCategory: MenuCategory.Auth,
        label: "Логин",
        icon: <ScanFace size={ size }/>,
    },
    register: {
        path: "/register",
        element: <Register/>,
        access: AccessType.Public,
        menuCategory: MenuCategory.Auth,
        label: "Регистрация",
        icon: <UserPen size={ size }/>,
    },
    dashboard: {
        path: "/dashboard",
        element: <Dashboard/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Журнал",
        icon: <Gauge size={ size }/>,
    },
    accounts: {
        path: "/accounts",
        element: <Accounts/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Счета",
        icon: <WalletCards size={ size }/>,
    },
    income: {
        path: "/income",
        element: <Income/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Доходы",
        icon: <CirclePlus size={ size }/>,
    },
    expenses: {
        path: "/expenses",
        element: <Expenses/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Finances,
        label: "Расходы",
        icon: <CircleMinus size={ size }/>,
    },
    settings: {
        path: "/settings",
        element: <Settings/>,
        access: AccessType.Private,
        menuCategory: MenuCategory.Settings,
        label: "Настройки",
        icon: <Settings2 size={ size }/>,
        children: [
            {
                path: "user",
                element: <User/>,
                access: AccessType.Private,
                menuCategory: MenuCategory.Settings,
                label: "Пользователь",
                icon: <UserRound size={ size }/>,
                children: [
                    {
                        path: "logout",
                        element: <Logout/>,
                        access: AccessType.Private,
                        menuCategory: MenuCategory.Settings,
                        label: "Выйти",
                        icon: <LogOut size={ size }/>,
                    }
                ]
            },
            {
                path: "general",
                element: <General/>,
                access: AccessType.Private,
                menuCategory: MenuCategory.Settings,
                label: "Общие настройки",
                icon: <Wrench size={ size }/>,
            },
        ]
    }
};

export const ALL_ROUTES = Object.values( ROUTES_MAP );
export const publicRoutes = filterRoutes( ALL_ROUTES, RouteItemField.Access, AccessType.Public );
export const privateRoutes = filterRoutes( ALL_ROUTES, RouteItemField.Access, AccessType.Private );

