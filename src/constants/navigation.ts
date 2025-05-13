import { RouteDefinitions } from "./routes";
import { NavigationItem } from "../types/navigation";

export const NAVIGATION_GROUPS = {
    MAIN: "main",
    FINANCE: "finance",
    SETTINGS: "settings"
};

export const settingsNavItems: NavigationItem[] = [
    RouteDefinitions.USER,
    RouteDefinitions.GENERAL
];

export const financeNavItems: NavigationItem[] = [
    RouteDefinitions.ACCOUNTS,
    RouteDefinitions.INCOME,
    RouteDefinitions.EXPENSES
];

export const mainNavItems: NavigationItem[] = [
    RouteDefinitions.DASHBOARD
];

export const sidebarNavigation = [
    {
        id: NAVIGATION_GROUPS.SETTINGS,
        title: "Настройки",
        items: [ RouteDefinitions.SETTINGS ]
    },
    {
        id: NAVIGATION_GROUPS.FINANCE,
        title: "Финансы",
        items: financeNavItems
    },
    {
        id: NAVIGATION_GROUPS.MAIN,
        title: "Основное",
        items: mainNavItems
    },
];
