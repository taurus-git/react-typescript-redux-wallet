export type ModalVariant = 'default' | 'fullHeight' | 'fullScreen';

export const MODAL_NAME = {
    MOBILE_MENU: 'mobileMenu',
    FINANCE_FORM: 'financeForm',
    CATEGORY_FIELD: 'categoryField',
} as const;

export type ModalName = (typeof MODAL_NAME)[keyof typeof MODAL_NAME];

export interface ModalItem {
    name: ModalName;
}

