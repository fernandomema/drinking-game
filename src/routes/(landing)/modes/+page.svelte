<script lang="ts">
  import { _ } from '$lib/locales';
  import { modes } from '$lib/modes';
  import Footer from '$lib/components/Footer.svelte';
  import { SchemaGenerator } from '$lib/utils/SchemaGenerator';

  const modeEntries = Object.entries(modes).filter(([key, mode]) => mode.isPublic ?? true);
</script>

<svelte:head>
  <title>{$_('modes_page.title')} | Tragos Locos</title>
  <meta name="description" content={$_('modes_page.description')} />
  <link rel="canonical" href="https://tragos-locos.servitimo.net/modes/" />
  {@html `<script type="application/ld+json">${JSON.stringify(
    SchemaGenerator.getBreadcrumbs([
      { name: 'Tragos Locos', url: 'https://tragos-locos.servitimo.net/' },
      { name: $_('modes_page.title'), url: 'https://tragos-locos.servitimo.net/modes/' }
    ])
  )}</script>`}
</svelte:head>

<header class="flex items-center w-full bg-white justify-between py-4 px-4">
  <a class="flex items-center gap-2" aria-label="Tragos locos" href="/">
    <img src="/favicon.png" class="w-8 h-8" alt="Tragos locos logo" />
    <span class="hidden h-6 text-xl font-semibold sm:block">Tragos Locos</span>
  </a>
  <nav class="flex items-center space-x-4 leading-5">
    <a class="hover:text-primary-500 m-1 font-medium text-gray-900" href="/blog">Blog</a>
    <a class="hover:text-primary-500 m-1 font-medium text-gray-900" href="/sobre-la-app">Sobre la App</a>
  </nav>
</header>

<main class="max-w-5xl mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6 text-center">{$_('modes_page.title')}</h1>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each modeEntries as [key, mode]}
      <li class="border rounded-lg shadow hover:shadow-md transition p-4 text-center">
        <a href={`/modes/${key}/`} class="block">
          <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-16 h-16 mx-auto mb-2" />
          <h2 class="font-semibold">{$_(`modes.${key}.title`)}</h2>
          <p class="text-sm text-gray-600">{$_(`modes.${key}.description`)}</p>
        </a>
      </li>
    {/each}
  </ul>
</main>

<Footer />
