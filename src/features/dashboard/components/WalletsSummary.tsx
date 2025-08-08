import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import styles from "./Wallet.module.scss";
import { CreditCard, Banknote } from "lucide-react";
import { WalletType, WalletTypeLabel } from "../../wallets/types";
import { WalletCard } from "./WalletCard";

export const WalletsSummary = () => {
    const bankCard = useSelector( ( state: RootState ) => state[ WalletType.BANK_CARD ].balance )
    const cash = useSelector( ( state: RootState ) => state[ WalletType.CASH ].balance )

    return (
        <section className={ `${ styles.walletsSummary } d-flex flex-wrap justify-between my-1` }>
            <WalletCard label={ WalletType.BANK_CARD } amount={ bankCard } icon={ <CreditCard/> }/>
            <WalletCard label={ WalletType.CASH } amount={ cash } icon={ <Banknote/> }/>
        </section>
    );
}

