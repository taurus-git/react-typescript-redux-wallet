import { TransactionType } from "../types";
import { Transaction } from "../types";
import { MoneyOperation } from "../../operations/types";

//Todo: simplify this
export const isTransaction = ( type: MoneyOperation ): type is Transaction => {
    return (
        type.transactionType === TransactionType.EXPENSE ||
        type.transactionType === TransactionType.INCOME
    )
}
