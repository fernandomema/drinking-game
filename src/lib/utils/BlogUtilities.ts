import { Locales } from "$lib/types/Locales";
import type { PostData } from "$lib/types/PostData";

export class BlogUtilities {
    public static getPosts(locale: Locales, includeFuture: boolean = false) {
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

        const now = new Date();

        // Remove posts dated in the future unless previewing
        if (!includeFuture) {
            posts = posts.filter((post) => post && post.date <= now);
        }

        // sort posts by date
        posts.sort((a, b) => a.date.getTime() - b.date.getTime()).reverse();

        // generate related posts for posts missing them
        posts.forEach((post) => {
            if (post && (!post.relatedPosts || post.relatedPosts.length === 0)) {
                post.relatedPosts = this.getRelatedPosts(post, posts);
            }
        });

        return posts;
    }

    public static getPostBySlug(locale: Locales, slug: string, includeFuture: boolean = false) {
        let posts: PostData[] = this.getPosts(locale, includeFuture);
        return posts.find(post => post.seoTag === slug);
    }

    private static getRelatedPosts(post: PostData, posts: PostData[], count: number = 3): PostData[] {
        const others = posts.filter(p => p !== post);
        const scored = others.map(p => {
            const score = p.tags.filter(t => post.tags.includes(t)).length;
            return { post: p, score };
        }).sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return b.post.date.getTime() - a.post.date.getTime();
        });

        return scored.slice(0, count).map(s => s.post);
    }
}