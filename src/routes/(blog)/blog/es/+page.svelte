<script lang="ts">
    import { _ } from "$lib/locales";

    let posts = [{
        title: "Las Mejores Apps y Juegos para una Noche de Fiesta y Bebidas 🍹🎉",
        seoTitle: "mejores-apps-y-juegos-para-noche-de-fiesta-y-bebidas",
        description: "¿Buscas las mejores apps y juegos para animar tu fiesta? Aquí te traemos una lista de las opciones más divertidas para que nadie se aburra. Desde retos alocados hasta preguntas incómodas, estas apps harán que tu noche sea épica. ¡Vamos allá! 🚀",
        date: "2025-02-24",
        url: "/blog/es/mejores-apps-y-juegos-para-noche-de-fiesta-y-bebidas",
        image: "/blog/best-apps-and-games-for-a-night-of-drinking-and-partying/cover.webp",
        tags: ["informative"],
    },{
        title: "Que es Tragos Locos?",
        description: "Descubre la aplicación Tragos Locos. ¿Qué es? ¿Cómo funciona? ¿Y por qué deberías usarla? Publicado para todos los que estén interesados en aprender más sobre la aplicación Tragos Locos.",
        date: "2025-02-21",
        url: "/blog/es/que-es-tragos-locos",
        image: "/blog/what-is-tragos-locos/cover.png",
        tags: ["informative"],
    }];
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
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Read more: &quot;{post.title}&quot;" href={post.url}>
                                {$_('blog.read_more')} →
                            </a>
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
