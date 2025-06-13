export const MODAL_NAME = {
    MOBILE_MENU: 'mobileMenu',
    FINANCE_FORM: 'financeForm',
} as const;

export type ModalName = (typeof MODAL_NAME)[keyof typeof MODAL_NAME];

export interface ModalItem {
    name: ModalName;
}

