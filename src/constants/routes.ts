export const RouteDefinitions = {
    /*Finances menu*/
    DASHBOARD: {
        path: "dashboard",
        label: "Журнал"
    },
    ACCOUNTS: {
        path: "accounts",
        label: "Счета"
    },
    INCOME: {
        path: "income",
        label: "Доходы"
    },
    EXPENSES: {
        path: "expenses",
        label: "Расходы"
    },

    /*Settings menu*/
    SETTINGS: { /*Settings*/
        path: "settings",
        label: "Настройки"
    },
    /*settings/user start*/
    USER: { /*Settings sub item*/
        path: "user",
        label: "Пользователь"
    },

    LOGIN: { /*Login sub items*/
        path: "login",
        label: "Логин"
    },
    LOGOUT: {
        path: "logout",
        label: "Выйти"
    },
    REGISTER: {
        path: "register",
        label: "Регистрация"
    },
    /*settings/user end*/

    /*settings/general*/
    GENERAL: {
        path: "general",
        label: "Общие настройки"
    },

} as const;
