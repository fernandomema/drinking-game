
<script>
    import { onMount } from "svelte";

    onMount(() => {
        if (window.umami) {
            window.umami.track('visit join-beta-test');
        }
    });
</script>

<svelte:head>
    <title>Únete al Programa de Testers</title>
    <meta name="description" content="Sé de los primeros en probar nuestra aplicación y ayúdanos a mejorar.">
    <link rel="canonical" href="https://tragos-locos.servitimo.net/join-beta-test/" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://tragoslocos.com/join-beta-test">
    <meta property="og:title" content="Únete al Programa de Testers">
    <meta property="og:description" content="Sé de los primeros en probar nuestra aplicación y ayúdanos a mejorar.">
    <meta property="og:image" content="https://tragoslocos.com/og-image.png">
    <meta property="og:site_name" content="Tragos Locos">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://tragoslocos.com/join-beta-test">
    <meta property="twitter:title" content="Únete al Programa de Testers">
    <meta property="twitter:description" content="Sé de los primeros en probar nuestra aplicación y ayúdanos a mejorar.">
    <meta property="twitter:image" content="https://tragoslocos.com/og-image.png">
    <meta name="twitter:site" content="@tu_cuenta">

</svelte:head>

<!-- Header -->
<header class="bg-purple-600 text-white">
    <div class="container mx-auto py-6 px-4 text-center">
        <h1 class="text-3xl font-bold">¡Únete a Nuestro Programa de Testers!</h1>
        <p class="mt-2 text-lg">Sé de los primeros en probar nuestra aplicación y ayúdanos a mejorar.</p>
    </div>
</header>

<!-- Main Content -->
<main class="container mx-auto px-4 py-10">
    <!-- Sección 1: Unirse al Grupo -->
    <section class="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4">1. Únete a nuestro Grupo de Google</h2>
        <p class="text-gray-600 mb-6">
            Accede a actualizaciones, instrucciones y novedades directamente desde nuestro grupo exclusivo.
        </p>
        <a href="https://groups.google.com/forum/#!forum/tragos-locos-testers/join" data-umami-event="join-google-group" class="inline-block bg-purple-600 text-white px-6 py-2 rounded-md shadow hover:bg-purple-700">
            Unirme al Grupo
        </a>
    </section>

    <!-- Sección 2: Descargar la App -->
    <section class="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 class="text-2xl font-semibold mb-4">2. Descarga la App en Play Store</h2>
        <p class="text-gray-600 mb-6">
            Instala nuestra aplicación en tu dispositivo Android y disfruta de las funciones más recientes.
        </p>
        <a href="https://play.google.com/apps/testing/net.servitimo.tragos_locos.twa" data-umami-event="join-playstore-beta" class="inline-block bg-green-500 text-white px-6 py-2 rounded-md shadow hover:bg-green-600">
            Descargar App
        </a>
    </section>

    <!-- Call to Action -->
    <div class="text-center mt-16">
        <h3 class="text-xl font-semibold">¡Gracias por ser parte de nuestra comunidad!</h3>
        <p class="text-gray-600 mt-2">Tu ayuda es clave para mejorar nuestra aplicación.</p>
    </div>
</main>

<!-- Footer -->
<footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">
        <p>&copy; 2024 Byte-Bop. Todos los derechos reservados.</p>
    </div>
</footer>
