import { TransactionType } from "../types";
import { Transaction } from "../types";
import { MoneyOperation } from "../../operations/types";

export const isTransaction = ( type: MoneyOperation ): type is Transaction => {
    return [
        TransactionType.EXPENSE,
        TransactionType.INCOME
    ].includes( type.transactionType );
}
