import { EntryGenerator } from "./$types";
import { Locales } from "$lib/types/Locales";

export const entries: EntryGenerator = () => {
    return Object.values(Locales).map((locale) => {
        return { locale: locale };
    });
};