<script lang="ts">
    import { onMount } from "svelte";

    export let title: string;
    export let seoTitle: string;
    export let lang;
    export let date: date;
    export let description: string;
    export let image: string;
    export let tags: string[];
    export let author: {
        name: string;
        avatar: string;
    }| undefined = undefined;

    let showDisqus = false;

    const url = "https://tragps-locos.serviitmo.net/blog/" + lang + '/' + seoTitle;
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "datePublished": "2023-08-05T00:00:00.000Z",
        "dateModified": "2023-08-05T00:00:00.000Z",
        "description": description,
        "image": "/static/images/twitter-card.png",
        "url": url,
        "author": [{
            "@type": "Person",
            "name": "Tails Azimuth"
        }]
    }

    onMount(() => {
        window.disqus = {
            url: url,
            idenfitier: seoTitle
        }
        showDisqus = true;
    })
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Tragos Locos" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:url" content={url} />
    
    <meta name="description" content={description} />
    <meta name="keywords" content="Tragos Locos, Tragos, Locos, Drinking Game, Game, Drinking, Games, Gaming, Gamification, Fun, Funny, Funny Games, Social Gaming, Social Games, Social Networking, Social Networks" />

    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />

    <link rel="canonical" href={url} />

    <!-- language -->
    <meta property="og:locale" content={lang} />
    <meta name="language" content={lang} />
    <meta name="lang:alternate" content={lang} />

</svelte:head>

<section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="fixed right-8 bottom-8 hidden flex-col gap-3 md:hidden">
      <button aria-label="Scroll To Comment" class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <button aria-label="Scroll To Top" class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <article>
      <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header class="pt-6 xl:pb-6">
          <div class="space-y-1 text-center">
            <dl class="space-y-10">
              <div>
                <dt class="sr-only">Published on</dt>
                <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                  <time datetime="2023-08-05T00:00:00.000Z">{date.toLocaleDateString(lang, {month: "long", day: "numeric", year: "numeric"})}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">{title}</h1>
            </div>
          </div>
        </header>
        <div class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            {#if author}
                <dl class="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                    <dt class="sr-only">Authors</dt>
                    <dd>
                        <ul class="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
                            <li class="flex items-center space-x-2">
                            <img alt="avatar" loading="lazy" width="38" height="38" decoding="async" data-nimg="1" class="h-10 w-10 rounded-full" srcset="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&amp;w=96&amp;q=75" style="color: transparent;">
                            <dl class="text-sm leading-5 font-medium whitespace-nowrap">
                                <dt class="sr-only">Name</dt>
                                <dd class="text-gray-900 dark:text-gray-100">Tails Azimuth</dd>
                                <dt class="sr-only">Twitter</dt>
                                <dd>
                                <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" target="_blank" rel="noopener noreferrer" href="https://twitter.com/Twitter">@Twitter</a>
                                </dd>
                            </dl>
                            </li>
                        </ul>
                    </dd>
                </dl>
            {/if}   
          <div class="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
            <div class="prose dark:prose-invert max-w-none pt-10 pb-8">
              <slot></slot>
            </div>
            <div class="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <a class="break-words" target="_blank" rel="noopener noreferrer" href="https://github.com/fernandomema/drinking-game/blob/master/src/routes/(blog)/blog/{seoTitle}/%2Bpage.svelte">View on GitHub</a>
            </div>
            <div class="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <div id="disqus_thread"></div>
                {#if showDisqus}
                    <script>
                        /**
                        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
                        /*
                        var disqus_config = function () {
                        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
                        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                        };
                        */
                        var disqus_config = function () {
                            this.page.url = window.disqus.url;  // Replace PAGE_URL with your page's canonical URL variable
                            this.page.identifier = window.disqus.idenfitier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                        };
                        (function() { // DON'T EDIT BELOW THIS LINE
                        var d = document, s = d.createElement('script');
                        s.src = 'https://tragos-locos.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                        })();
                    </script>
                    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                {/if}
            </div>
          </div>
          <footer>
            <div class="pt-4 xl:pt-8">
              <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Back to the blog" href="/blog">← Back to the blog</a>
            </div>
          </footer>
        </div>
      </div>
    </article>
  </section>