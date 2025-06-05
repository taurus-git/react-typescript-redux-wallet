export const MODAL_NAME = {
    MENU1: 'menu1',
    MENU2: 'menu2',
} as const;

export type ModalName = (typeof MODAL_NAME)[keyof typeof MODAL_NAME];

export interface ModalItem {
    name: ModalName;
}

