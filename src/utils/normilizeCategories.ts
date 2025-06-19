const FINANCES = {
    EXPENSE: "expense",
    INCOME: "income",
    ASSET: "asset",
} as const;

interface Category {
    name: string;
    parentName: null | string;
    type: string;
    notes: null;
    iconName: string | null;
    iconColor: string | null;
    templateCode: string;
    isArchived: boolean;
}

interface Categories {
    expenses: Category[],
    incomes: Category[],
}

type NormalizedCategory = Omit<Category, "parentName" | "notes" | "templateCode" | "isArchived">;

interface NormalizedCategories {
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


