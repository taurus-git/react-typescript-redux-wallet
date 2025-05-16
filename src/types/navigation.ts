import { ReactNode } from "react";

export enum AccessType {
    Public = "public",
    Private = "private",
}

export enum MenuCategory {
    Auth = "auth",
    Finances = "finances",
    Settings = "settings",
}

export interface RouteItem {
    path: string;
    element: ReactNode;
}

export interface RouteItemMeta extends RouteItem {
    access: AccessType;
    menuCategory: MenuCategory;
    children?: RouteItemMeta[];
    label?: string;
    icon?: string;
}
