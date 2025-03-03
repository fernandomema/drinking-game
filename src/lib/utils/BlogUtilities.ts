import BlogPost from "$lib/components/BlogPost.svelte";
import { Locales } from "$lib/types/Locales";

export class BlogUtilities {
    public static getPosts(locale: Locales) {
        let posts;
        switch (locale) {
            case Locales.en:
                posts = import.meta.glob('$lib/data/blogPosts/en/*/postData.ts', { eager: true });
                break;
            case Locales.es:
                posts = import.meta.glob('$lib/data/blogPosts/es/*/postData.ts', { eager: true });
                break;
            default:
                posts = import.meta.glob('$lib/data/blogPosts/en/*/postData.ts', { eager: true });
                break;
        }

        // return array of posts objects
        posts = Object.entries(posts).map(([path, mod]) => {
            const name = path.split('/').pop()?.replace('.ts', '');
            if (name && mod) return mod.postData;
            return null;
        });

        // sort posts by date
        posts.sort((a, b) => a.date.getTime() - b.date.getTime()).reverse();

        return posts;
    }

    public static getPostBySlug(locale: Locales, slug: string) {
        let posts: BlogPost[] = this.getPosts(locale);
        return posts.find(post => post.seoTag === slug);
    }
}