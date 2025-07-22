import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { MoneyOperation } from "../types";
import { TransactionType } from "../../transactions/types";
import { createOperationRemover } from "../utils/createOperationRemover";

export const useMoneyOperations = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { removeTransaction, removeTransfer } = createOperationRemover( dispatch );
    const expenses = useSelector( ( state: RootState ) => state[ TransactionType.EXPENSE ].items );
    const incomes = useSelector( ( state: RootState ) => state[ TransactionType.INCOME ].items );
    const transfers = useSelector( ( state: RootState ) => state[ TransactionType.TRANSFER ].items );


    //const allTransactions: MoneyOperation[] = [ ...expenses, ...incomes, ...transfers ];

    const handleClick = () => {

    }


    return {
        expenses,
        incomes,
        transfers,
        removeTransaction,
        removeTransfer
    }
}
