import { WalletType } from "../types";
import { Banknote, CreditCard } from "lucide-react";

interface WalletIconProps {
    walletType: WalletType;
}

export const WalletIcon: React.FC<WalletIconProps> = ( { walletType } ) => {
    const walletIcon = {
        [ WalletType.BANK_CARD ]: <CreditCard/>,
        [ WalletType.CASH ]: <Banknote/>,
    }

    return walletIcon[ walletType ];
}
