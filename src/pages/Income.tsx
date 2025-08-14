import React from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { useOperations } from "../features/operations/hooks/useOperations";
import { OperationList } from "../features/operations/components/OperationList";

const Income = () => {
    const { incomes } = useOperations();

    return (
        <>
            <PageHeader />
            <OperationList operations={ incomes }/>
        </>
    );
}

export default Income;
