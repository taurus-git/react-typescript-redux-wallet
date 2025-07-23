import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TransactionType } from "../../transactions/types";

export const useAllOperations = () => {
    const expenses = useSelector( ( state: RootState ) => state[ TransactionType.EXPENSE ].items );
    const incomes = useSelector( ( state: RootState ) => state[ TransactionType.INCOME ].items );
    const transfers = useSelector( ( state: RootState ) => state[ TransactionType.TRANSFER ].items );

    const allOperations = useMemo( () => {
        const operations = [
            ...expenses,
            ...incomes,
            ...transfers
        ];

        return operations.sort( ( a, b ) =>
            new Date( b.date ).getTime() - new Date( a.date ).getTime() );
    }, [
        expenses,
        incomes,
        transfers,
    ] );

    return {
        expenses,
        incomes,
        transfers,
        allOperations
    }
}
