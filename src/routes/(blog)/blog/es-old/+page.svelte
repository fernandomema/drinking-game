<script lang="ts">
    import { _ } from "$lib/locales";
    import { Locales } from "$lib/types/Locales";
    import type { PostData } from "$lib/types/PostData";
    import { BlogUtilities } from "$lib/utils/BlogUtilities";

    let posts: PostData[] = BlogUtilities.getPosts(Locales.es);
</script>

<svelte:head>
    <title>Blog - Tragos Locos</title>
    <meta name="description" content="Blog para mostrar cosas divertidas sobre la aplicación Tragos Locos y más" />

    <meta property="og:title" content="Blog - Tragos Locos" />
    <meta property="og:description" content="Blog para mostrar cosas divertidas sobre la aplicación Tragos Locos y más" />
    
    <!-- language -->
    <meta property="og:locale" content="es" />
    <meta name="language" content="es" />
    <meta name="lang:alternate" content="es" />

    <meta property="alternate" hreflang="en" href="https://tragos-locos.servitimo.net/blog/en" />
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
