import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { TransactionType } from "../../transactions/types";

export const useOperations = () => {
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
            Number( b.date ) - Number( a.date ) )
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
