import { TransactionType } from "../../transactions/types";
import { MoneyOperation } from "../../operations/types";
import { Transfer } from "../types";

export const isTransfer = (type: MoneyOperation): type is Transfer => (
    type.transactionType === TransactionType.TRANSFER
)
