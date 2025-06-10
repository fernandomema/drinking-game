import { addMessages, getLocaleFromNavigator, getLocaleFromQueryString, init, locale } from 'svelte-i18n';
import es from './es.json';
import en from './en.json';

export { _ } from 'svelte-i18n';

addMessages('en', en);
addMessages('es', es);

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromQueryString('locale') || getLocaleFromNavigator(),
});

export const getLocale = async (): Promise<string> => {
    return new Promise((resolve) => {
        locale.subscribe((locale) => {
            resolve(locale?.substring(3, 5).toLowerCase() || 'en');
        });
    });
};

export const setLocale = async (newLocale: any): Promise<void> => {
    return new Promise((resolve) => {
        locale.set(newLocale);
        resolve();
    });
}
