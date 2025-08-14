import React from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { useOperations } from "../features/operations/hooks/useOperations";
import { OperationList } from "../features/operations/components/OperationList";

const Expenses = () => {
    const { expenses } = useOperations();

    return (
        <>
            <PageHeader/>
            <OperationList operations={ expenses }/>
        </>
    );
}

export default Expenses;
