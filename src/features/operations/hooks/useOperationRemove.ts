import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { createOperationRemover } from "../utils/createOperationRemover";

export const useOperationRemove = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { removeTransaction, removeTransfer } = createOperationRemover( dispatch );

    return {
        removeTransaction,
        removeTransfer
    }
}
