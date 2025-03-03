<script lang="ts">
    import { BlogUtilities } from "$lib/utils/BlogUtilities";
    import { page } from '$app/stores';
    import { getLocaleFromString } from "$lib/types/Locales";
    import BlogPost from "$lib/components/BlogPost.svelte";

    const locale = getLocaleFromString($page.params.locale);
    const seoTag = $page.params.seoTag;

    const post = BlogUtilities.getPostBySlug(locale, seoTag);
</script>

{#if post}
    <BlogPost 
        title={post.title}
        seoTitle={post.seoTag}
        description={post.description}
        date={post.date}
        image={post.image}
        tags={post.tags}
        lang={post.lang}
    >
        <div slot="post">
            <svelte:component this={post.component} />
        </div>
        <div slot="sidebar">
            
        </div>
    </BlogPost>
{/if}