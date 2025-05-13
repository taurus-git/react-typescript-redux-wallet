export const RouteDefinitions = {
    DASHBOARD: {
        path: "dashboard",
        label: "Панель управления"
    },
    SETTINGS: {
        path: "settings",
        label: "Настройки"
    },
    LOGIN: {
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
    USER: {
        path: "user",
        label: "Пользователь"
    },
    GENERAL: {
        path: "general",
        label: "Общие настройки"
    },
    ACCOUNTS: { /*Банковские счета, Карты, Наличные*/
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

} as const;
