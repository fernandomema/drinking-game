<script lang="ts">
    let posts = [{
        title: "What is Tragos Locos?",
        description: "Discover the Tragos Locos app. What is it? How does it work? And why should you use it? Post adressed to everyone who is interested in learning more about the Tragos Locos app.",
        date: "2025-02-21",
        url: "/blog/en/what-is-tragos-locos",
        image: "/blog/what-is-tragos-locos/cover.png",
        tags: ["informative"],
    }];
</script>

<svelte:head>
    <title>Blog - Tragos Locos</title>
    <meta name="description" content="Blog to show fun things about Tragos Locos app and more" />

    <meta property="og:title" content="Blog - Tragos Locos" />
    <meta property="og:description" content="Blog to show fun things about Tragos Locos app and more" />
    
    <!-- language -->
    <meta property="og:locale" content="en" />
    <meta name="language" content="en" />
    <meta name="lang:alternate" content="en" />

    <meta property="alternate" hreflang="es" href="https://tragos-locos.servitimo.net/blog/es" />
</svelte:head>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
  <div class="space-y-2 pt-6 pb-8 md:space-y-5">
    <h1 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">Latest</h1>
    <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">Blog to show fun things about Tragos Locos app and more</p>
  </div>
  <ul class="divide-y divide-gray-200 dark:divide-gray-700">
    {#each posts as post}
        <li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                            <time dateTime={post.date}>{post.date}</time>
                        </dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl leading-8 font-bold tracking-tight">
                                    <a class="text-gray-900 dark:text-gray-100" href={post.url}>{post.title}</a>
                                </h2>
                                <div class="flex flex-wrap">
                                    {#each post.tags as tag}
                                        <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase" href="#">{tag}</a>
                                    {/each}
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">{post.description}</div>
                        </div>
                        <div class="text-base leading-6 font-medium">
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read more: &quot;{post.title}&quot;" href={post.url}>Read more →</a>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    {/each}
  </ul>
</div>

<!-- <div class="flex justify-end text-base leading-6 font-medium">
  <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts" href="/blog">All Posts →</a>
</div> -->
