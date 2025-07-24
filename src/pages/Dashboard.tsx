import React from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { WalletsSummary } from "../features/dashboard/components/WalletsSummary";
import { useOperations } from "../features/operations/hooks/useOperations";
import { OperationList } from "../features/operations/components/OperationList";

const Dashboard = () => {
    const { allOperations } = useOperations();

    return (
        <>
            <PageHeader/>
            <WalletsSummary/>
            <OperationList operations={ allOperations }/>
        </>
    );
}

export default Dashboard;
