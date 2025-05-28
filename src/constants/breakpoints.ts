export enum Sizes {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
    xxl = 'xxl',
}

export const WidthMediaQueries: Record<Sizes, string> = {
    [ Sizes.xs ]: '(min-width: 480px)',
    [ Sizes.sm ]: '(min-width: 576px)',
    [ Sizes.md ]: '(min-width: 768px)',
    [ Sizes.lg ]: '(min-width: 992px)',
    [ Sizes.xl ]: '(min-width: 1200px)',
    [ Sizes.xxl ]: '(min-width: 1400px)',
}
