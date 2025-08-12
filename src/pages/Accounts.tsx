import React from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { WalletsSummary } from "../features/wallets/components/WalletsSummary";

const Accounts = () => {

    return (
        <>
            <PageHeader/>
            <div>
                <WalletsSummary/>
            </div>
        </>
    )
        ;
}

export default Accounts;
