export interface Expense {
    id: string;
    amount: number;
    categoryId: string;
    date: string;
    comment?: string;
}
