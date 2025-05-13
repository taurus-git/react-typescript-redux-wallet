export interface NavigationItem {
    path: string;
    label: string;
    icon?: string;
}

export interface NavigationGroup {
    id: string;
    title: string;
    items: NavigationItem[];
}
