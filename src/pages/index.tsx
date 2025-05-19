import { lazy } from "react";

export const lazyLoad = (pageName: string) => {
    return lazy(() => import(`./${pageName}`));
}

// Модули аутентификации
export const Login = lazyLoad('Login');
export const Register = lazyLoad('Register');
export const Logout = lazyLoad('Logout');

// Модули финансов
export const Dashboard = lazyLoad('Dashboard');
export const Accounts = lazyLoad('Accounts');
export const Income = lazyLoad('Income');
export const Expenses = lazyLoad('Expenses');

// Модули настроек
export const Settings = lazyLoad('Settings');
export const User = lazyLoad('User');
export const General = lazyLoad('General');
