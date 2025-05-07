export interface Expense {
    id: string;
    accountId: string;
    categoryId: string;
    amount: number;
    date: string;
    comment?: string;
}
