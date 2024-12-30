export enum Locales {
    es = 'es',
    en = 'en'
}

export const getLocaleFromString = (locale?: string): Locales => {
    switch (locale) {
        case 'es':
            return Locales.es;
        case 'en':
            return Locales.en;
        default:
            return Locales.en;
    }
}