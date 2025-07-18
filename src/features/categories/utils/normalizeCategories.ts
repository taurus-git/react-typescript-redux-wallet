import { FINANCES, Category, Categories } from "../types";

export type NormalizedCategory = Omit<Category, "parentName" | "notes" | "templateCode" | "isArchived">;

export interface NormalizedCategories {
    expenses: NormalizedCategory[],
    incomes: NormalizedCategory[],
}

// Filter would be more readable here, but using reduce to demonstrate
// knowledge of performance optimization (single pass vs double pass)
export const separateCategories = ( categoriesRaw: Category[] ): Categories => {
    return categoriesRaw.reduce<Categories>(
        ( acc, item ) => {
            if ( item.type === FINANCES.EXPENSE ) acc.expenses.push( item );
            else if ( item.type === FINANCES.INCOME ) acc.incomes.push( item );
            return acc;
        },
        { expenses: [], incomes: [] }
    );
}

export const filterByField = ( array: Category[], field: keyof Category ) => {
    return array.filter( ( item ) => item[ field ] === null );
}

export const omitCategory = ( category: Category[] ): NormalizedCategory[] => {
    return category.map( ( item ) => {
        const { parentName, notes, templateCode, isArchived, ...rest } = item;
        return rest;
    } );
}

export const normalizeCategories = ( categoriesRaw: Category[] ): NormalizedCategories => {
    const separated = separateCategories( categoriesRaw );
    const expensesWithoutParent = filterByField( separated.expenses, 'parentName' );
    const incomesWithoutParent = filterByField( separated.incomes, 'parentName' );

    return {
        expenses: omitCategory( expensesWithoutParent ),
        incomes: omitCategory( incomesWithoutParent )
    };
}


