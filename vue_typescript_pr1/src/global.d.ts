declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'vue-table-component' {
    export const TableComponent: any;
    export const TableColumn: any;
}

declare module 'vue-clipboard2';
declare module 'vuejs-datepicker';
declare module 'moment-timezone';

declare module '*.scss';
declare module '*.css';
declare module '*.json';
declare module '*.js';
declare module 'aes-js' {
    export const utils: any;
    export const ModeOfOperation: any;
}

declare module 'js-cookie' {
    export const getJSON: Function;
    export const set: Function
}
declare module 'core-js/fn/typed/array-buffer';

declare module 'vue-clickaway' {
    export const mixin: any;
}
type OidcConfig = {
    debug: boolean,
    prod: boolean,
    session: boolean,
    clientId: string,
    scope: string,
    redirectUri: string,
    W3ID_PROD_ORIGIN: string
};

type EnvConfig = {
    oidc: OidcConfig
}

interface MyWindow extends Window {
    ENV_CONFIG: EnvConfig;
    CookieWrapper: any;
    W3IdAuthService: any
}

declare var window: MyWindow;
