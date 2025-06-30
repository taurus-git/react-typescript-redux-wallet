export const FINANCES = {
    EXPENSE: "expense",
    INCOME: "income",
    ASSET: "asset",
} as const;

export interface Category {
    name: string;
    parentName: null | string;
    type: string;
    notes: null;
    iconName: string | null;
    iconColor: string;
    templateCode: string;
    isArchived: boolean;
}

export interface Categories {
    expenses: Category[],
    incomes: Category[],
}
