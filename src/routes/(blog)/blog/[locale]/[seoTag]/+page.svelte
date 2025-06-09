<script lang="ts">
    import { BlogUtilities } from "$lib/utils/BlogUtilities";
    import { page } from '$app/stores';
    import { getLocaleFromString } from "$lib/types/Locales";
    import BlogPost from "$lib/components/BlogPost.svelte";

    const locale = getLocaleFromString($page.params.locale);
    const seoTag = $page.params.seoTag;
    const post = BlogUtilities.getPostBySlug(locale, seoTag);
</script>

<svelte:head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150780288925197" crossorigin="anonymous"></script>
</svelte:head>

{#if post}
    <BlogPost 
        title={post.title}
        seoTitle={post.seoTag}
        description={post.description}
        date={post.date}
        modifiedDate={post.modifiedDate}
        image={post.image}
        tags={post.tags}
        lang={post.lang}
        relatedBlogPosts={post.relatedPosts}
    >
        <div slot="post">
            <svelte:component this={post.component} />
        </div>
        <div slot="sidebar">
            
        </div>
    </BlogPost>
{/if}