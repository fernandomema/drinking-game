import { EntryGenerator } from "./$types";
import { Locales } from "$lib/types/Locales";
import { BlogUtilities } from "$lib/utils/BlogUtilities";

export const entries: EntryGenerator = () => {
    const posts = [
        ...BlogUtilities.getPosts(Locales.es),
        ...BlogUtilities.getPosts(Locales.en)
    ];

    return posts.map((post) => {
        return { locale: post.lang, seoTag: post.seoTag };
    });
};