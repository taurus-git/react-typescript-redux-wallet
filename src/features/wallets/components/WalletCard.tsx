import React from 'react';
import styles from './Wallet.module.scss';
import { WalletType, WalletTypeLabel } from "../types";
import { WalletIcon } from "./WalletIcon";

interface WalletCardProps {
    walletType: WalletType;
    amount: number;
    icon: React.ReactNode;
    className?: string;
}

export const WalletCard: React.FC<WalletCardProps> = ( { walletType, amount, icon, className = "" } ) => {
    return (
        <div className={ `d-flex flex-col px-1 py-1 ${ styles.walletsSummary__wallet } ${className}` }>
            <div className={`d-flex justify-between`}>
                <WalletIcon walletType ={ walletType }/>
                <p className={ `ml-1 long-text ${ styles.walletsSummary__amount }` }>{ amount } ₽</p>
            </div>
            <p className={ `long-text ${ styles.walletsSummary__walletLabel }` }>
                { WalletTypeLabel[ walletType ] }
            </p>
        </div>
    );
};
