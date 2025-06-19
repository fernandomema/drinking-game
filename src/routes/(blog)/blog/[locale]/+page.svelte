<script lang="ts">
    import { page } from "$app/stores";
    import { _ } from "$lib/locales";
    import { getLocaleFromString, Locales } from "$lib/types/Locales";
    import type { PostData } from "$lib/types/PostData";
    import { BlogUtilities } from "$lib/utils/BlogUtilities";

    const locale = getLocaleFromString($page.params.locale);
    const posts: PostData[] = BlogUtilities.getPosts(locale);
    let canonicalUrl: string;
</script>

<svelte:head>
    {canonicalUrl = 'https://tragos-locos.servitimo.net/blog/' + locale + '/', ''}
    <title>Blog - Tragos Locos</title>
    <meta name="description" content={$_('blog.description')} />

    <meta property="og:title" content="Blog - Tragos Locos" />
    <meta property="og:description" content={$_('blog.description')} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content="https://tragos-locos.servitimo.net/og-image.png" />
    
    <!-- language -->
    <meta property="og:locale" content={locale} />
    <meta name="language" content={locale} />
    <meta name="lang:alternate" content={locale} />

    {#each Object.values(Locales) as locale}
        {#if locale !== $page.params.locale}
            <link rel="alternate" hreflang={locale} href="https://tragos-locos.servitimo.net/blog/{locale}" />
        {/if}
    {/each}

    <link rel="canonical" href={canonicalUrl} />

    {@html `<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "headline": "Blog - Tragos Locos",
        "description": "Blog para mostrar cosas divertidas sobre la aplicación Tragos Locos y más.",
        "url": canonicalUrl
    })}</script>`}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Blog - Tragos Locos" />
    <meta name="twitter:description" content={$_('blog.description')} />
    <meta name="twitter:image" content="https://tragos-locos.servitimo.net/og-image.png" />
    <meta name="twitter:url" content={canonicalUrl} />
</svelte:head>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {$_('blog.latest_posts')}
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {$_('blog.description')}
        </p>
    </div>
    <ul class="divide-y divide-gray-300 dark:divide-gray-700">
        {#each posts as post}
            <li class="py-10">
                <article class="flex flex-col sm:flex-row gap-6 items-start">
                    <div class="w-full sm:w-1/3">
                        <img class="w-full h-48 object-cover rounded-lg shadow-md" src={post.image} alt={post.title} />
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <time dateTime={post.date}>{post.date.toLocaleDateString(post.lang, {month: "long", day: "numeric", year: "numeric"})}</time>
                        </p>
                    </div>
                    <div class="flex-1 space-y-4">
                        <h2 class="text-2xl font-bold tracking-tight">
                            <a class="text-gray-900 dark:text-gray-100 hover:underline" href="/blog/{post.lang}/{post.seoTag}">
                                {post.title}
                            </a>
                        </h2>
                        <div class="flex flex-wrap gap-2">
                            {#each post.tags as tag}
                                <a class="text-sm font-medium uppercase px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 dark:bg-primary-500/20 rounded-full" href="#">
                                    {tag}
                                </a>
                            {/each}
                        </div>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{post.description}</p>
                        <a class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline" 
                            aria-label="Read more: &quot;{post.title}&quot;" 
                            href="/blog/{post.lang}/{post.seoTag}">
                            {$_('blog.read_more')} →
                        </a>
                    </div>
                </article>
            </li>
        {/each}
    </ul>

</div>

<!-- <div class="flex justify-end text-base leading-6 font-medium">
  <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts" href="/blog">All Posts →</a>
</div> -->
