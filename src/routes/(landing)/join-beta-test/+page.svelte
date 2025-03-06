<script>
    import { onMount } from "svelte";
    import { _ } from "$lib/locales";

    onMount(() => {
        if (window.umami) {
            window.umami.track('visit join-beta-test');
        }
    });
</script>

<svelte:head>
    <title>{$_('join_beta.title')}</title>
    <meta name="description" content={$_('join_beta.subtitle')}>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://tragoslocos.com/join-beta-test">
    <meta property="og:title" content={$_('join_beta.title')}>
    <meta property="og:description" content={$_('join_beta.subtitle')}>
    <meta property="og:image" content="https://tragoslocos.com/og-image.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://tragoslocos.com/join-beta-test">
    <meta property="twitter:title" content={$_('join_beta.title')}>
    <meta property="twitter:description" content={$_('join_beta.subtitle')}>
    <meta property="twitter:image" content="https://tragoslocos.com/og-image.png">

</svelte:head>

<!-- Header -->
<header class="bg-purple-600 text-white">
    <div class="container mx-auto py-6 px-4 text-center">
        <h1 class="text-3xl font-bold">{$_('join_beta.title')}</h1>
        <p class="mt-2 text-lg">{$_('join_beta.subtitle')}</p>
    </div>
</header>

<!-- Main Content -->
<main class="container mx-auto px-4 py-10">
    <!-- Sección 1: Unirse al Grupo -->
    <section class="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4">{$_('join_beta.group_title')}</h2>
        <p class="text-gray-600 mb-6">
            {$_('join_beta.group_description')}
        </p>
        <a href="https://groups.google.com/forum/#!forum/tragos-locos-testers/join" data-umami-event="join-google-group" class="inline-block bg-purple-600 text-white px-6 py-2 rounded-md shadow hover:bg-purple-700">
            {$_('join_beta.group_button')}
        </a>
    </section>

    <!-- Sección 2: Descargar la App -->
    <section class="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4">{$_('join_beta.app_title')}</h2>
        <p class="text-gray-600 mb-6">
            {$_('join_beta.app_description')}
        </p>
        <a href="https://play.google.com/apps/testing/net.servitimo.tragos_locos.twa" data-umami-event="join-playstore-beta" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md shadow hover:bg-green-600">
            {$_('join_beta.app_button')}
        </a>
    </section>

    <!-- Call to Action -->
    <div class="text-center mt-16">
        <h3 class="text-xl font-semibold">{$_('join_beta.thanks_title')}</h3>
        <p class="text-gray-600 mt-2">{$_('join_beta.thanks_description')}</p>
    </div>
</main>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
        <p>{$_('join_beta.copyright')}</p>
    </div>
</footer>