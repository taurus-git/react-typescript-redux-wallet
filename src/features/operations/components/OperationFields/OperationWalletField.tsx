import React from 'react';
import { WalletType } from "../../../wallets/types";
import { WalletIcon } from "../../../wallets/components/WalletIcon";

interface OperationWalletFieldProps {
    walletType: WalletType;
}

export const OperationWalletField: React.FC<OperationWalletFieldProps> = ( { walletType } ) => {

    return (
        <span>
            <WalletIcon walletType ={ walletType }/>
        </span>
    );
}


