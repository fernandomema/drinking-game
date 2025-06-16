<script>
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Página no encontrada | Tragos Locos</title>
</svelte:head>

<div class="min-h-screen flex flex-col justify-center items-center text-center space-y-6 py-16">
  <h1 class="text-6xl font-bold text-purple-700">404</h1>
  <p class="text-xl">Ups! No encontramos lo que buscas.</p>
  <nav class="space-x-4">
    <a href="/" class="text-primary-600 underline">Inicio</a>
    <a href="/sobre-la-app" class="text-primary-600 underline">Sobre la App</a>
    <a href="/blog" class="text-primary-600 underline">Blog</a>
    <a href="/modes" class="text-primary-600 underline">Modos</a>
  </nav>
</div>

<Footer />
