import React from 'react';
import styles from './Wallet.module.scss';
import { WalletType, WalletTypeLabel } from "../../wallets/types";

interface WalletCardProps {
    label: WalletType;
    amount: number;
    icon: React.ReactNode;
    className?: string;
}

export const WalletCard: React.FC<WalletCardProps> = ( { label, amount, icon, className = "" } ) => {
    return (
        <div className={ `d-flex flex-col px-1 py-1 ${ styles.walletsSummary__wallet } ${className}` }>
            <div className={`d-flex justify-between`}>
                { icon }
                <p className={ `ml-1 long-text ${ styles.walletsSummary__amount }` }>{ amount } ₽</p>
            </div>
            <p className={ `long-text ${ styles.walletsSummary__walletLabel }` }>
                { WalletTypeLabel[ label ] }
            </p>
        </div>
    );
};
