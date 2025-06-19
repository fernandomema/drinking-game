
<script lang="ts">
    import { onMount } from "svelte";
    import { SITE_URL } from "$lib/config";
    import { _ } from "$lib/locales";

    onMount(() => {
        if (window.umami) {
            window.umami.track('visit join-beta-test');
        }
    });
</script>

<svelte:head>
    <title>{$_('join_beta_test.meta_title')}</title>
    <meta name="description" content={$_('join_beta_test.meta_description')}>
    <link rel="canonical" href="{SITE_URL}/join-beta-test/" />
    <link rel="alternate" hreflang="es" href="{SITE_URL}/join-beta-test/?locale=es" />
    <link rel="alternate" hreflang="en" href="{SITE_URL}/join-beta-test/?locale=en" />
    <meta property="og:locale:alternate" content="es" />
    <meta property="og:locale:alternate" content="en" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{SITE_URL}/join-beta-test/">
    <meta property="og:title" content={$_('join_beta_test.meta_title')}>
    <meta property="og:description" content={$_('join_beta_test.meta_description')}>
    <meta property="og:image" content="{SITE_URL}/og-image.png">
    <meta property="og:site_name" content="Tragos Locos">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{SITE_URL}/join-beta-test/">
    <meta property="twitter:title" content={$_('join_beta_test.meta_title')}>
    <meta property="twitter:description" content={$_('join_beta_test.meta_description')}>
    <meta property="twitter:image" content="{SITE_URL}/og-image.png">
    <meta name="twitter:site" content="@tu_cuenta">

</svelte:head>

<!-- Header -->
<header class="bg-purple-600 text-white">
    <div class="container mx-auto py-6 px-4 text-center">
        <h1 class="text-3xl font-bold">{$_('join_beta_test.header_title')}</h1>
        <p class="mt-2 text-lg">{$_('join_beta_test.header_desc')}</p>
    </div>
</header>

<!-- Main Content -->
<main class="container mx-auto px-4 py-10">
    <!-- Sección 1: Unirse al Grupo -->
    <section class="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4">{$_('join_beta_test.section1_title')}</h2>
        <p class="text-gray-600 mb-6">
            {$_('join_beta_test.section1_desc')}
        </p>
        <a href="https://groups.google.com/forum/#!forum/tragos-locos-testers/join" data-umami-event="join-google-group" class="inline-block bg-purple-600 text-white px-6 py-2 rounded-md shadow hover:bg-purple-700">
            {$_('join_beta_test.section1_button')}
        </a>
    </section>

    <!-- Sección 2: Descargar la App -->
    <section class="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4">{$_('join_beta_test.section2_title')}</h2>
        <p class="text-gray-600 mb-6">
            {$_('join_beta_test.section2_desc')}
        </p>
        <a href="https://play.google.com/apps/testing/net.servitimo.tragos_locos.twa" data-umami-event="join-playstore-beta" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md shadow hover:bg-green-600">
            {$_('join_beta_test.section2_button')}
        </a>
    </section>

    <!-- Call to Action -->
    <div class="text-center mt-16">
        <h3 class="text-xl font-semibold">{$_('join_beta_test.thanks_title')}</h3>
        <p class="text-gray-600 mt-2">{$_('join_beta_test.thanks_desc')}</p>
    </div>
</main>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
        <p>{$_('join_beta_test.copyright')}</p>
    </div>
</footer>
