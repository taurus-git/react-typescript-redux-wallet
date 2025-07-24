import React from 'react';
import { WalletType, WalletTypeLabel } from "../../../wallets/types";

interface OperationWalletFieldProps {
    walletType: WalletType;
}

export const OperationWalletField: React.FC<OperationWalletFieldProps> = ( { walletType } ) => {
    return (
        <p>Счет: { WalletTypeLabel[ walletType ] }</p>
    );
}


