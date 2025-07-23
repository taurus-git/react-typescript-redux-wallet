import { ReactNode } from "react";

export enum Sizes {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl',
}

export const WidthMediaQueries: Record<Sizes, string> = {
    [ Sizes.xs ]: '(min-width: 480px)',
    [ Sizes.sm ]: '(min-width: 576px)',
    [ Sizes.md ]: '(min-width: 768px)',
    [ Sizes.lg ]: '(min-width: 992px)',
    [ Sizes.xl ]: '(min-width: 1200px)',
    [ Sizes.xxl ]: '(min-width: 1400px)',
}

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
    icon?: ReactNode;
}

export enum RouteItemField {
    Path = "path",
    Element = "element",
    Access = "access",
    MenuCategory = "menuCategory",
    Children = "children",
    Label = "label",
    Icon = "icon",
}
