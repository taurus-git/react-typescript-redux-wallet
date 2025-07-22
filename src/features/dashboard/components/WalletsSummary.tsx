import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { WalletType, WalletTypeLabel } from "../../wallets/types";

export const WalletsSummary = () => {
    const bankCard = useSelector( ( state: RootState ) => state[ WalletType.BANK_CARD ].balance )
    const cash = useSelector( ( state: RootState ) => state[ WalletType.CASH ].balance )

    return (
        <div>
            <b>
                <pre>{ WalletTypeLabel[ WalletType.BANK_CARD ] } : { bankCard }</pre>
            </b>
            <b>
                <pre>{ WalletTypeLabel[ WalletType.CASH ] } : { cash }</pre>
            </b>
        </div>
    );
}

