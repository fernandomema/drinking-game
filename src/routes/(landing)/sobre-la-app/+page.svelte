<script lang="ts">
  import { onMount } from "svelte";
  onMount(() => {
      if (window.umami) {
          window.umami.track('visit sobre-la-app');
      }
  });
</script>

<svelte:head>
    <title>Sobre la App | Tragos Locos</title>
    <meta name="description" content="Conoce las ventajas de Tragos Locos, la aplicaci\u00f3n de juegos de fiesta que no puede faltar en tus reuniones." />
    <meta name="keywords" content="tragos locos, juegos para beber, party game, app de fiestas" />
    <link rel="canonical" href="https://tragos-locos.servitimo.net/sobre-la-app/" />
</svelte:head>

<main class="container mx-auto px-4 py-8 text-gray-800">
    <h1 class="text-3xl font-bold mb-4">\u00bfPor qu\u00e9 elegir Tragos Locos?</h1>
    <p class="mb-4">Tragos Locos es la mejor opci\u00f3n para animar cualquier fiesta. La app incluye preguntas divertidas, retos originales y modos de juego que se actualizan constantemente para que nunca te falten ideas.</p>
    <p class="mb-4">Su dise\u00f1o intuitivo facilita que todos puedan comenzar a jugar en segundos y disfrutar de una experiencia inolvidable sin complicaciones.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-2">Ventajas principales</h2>
    <ul class="list-disc list-inside mb-4">
        <li>Gran variedad de preguntas y desaf\u00edos.</li>
        <li>Interfaz amigable y f\u00e1cil de usar.</li>
        <li>Ideal para reuniones peque\u00f1as o fiestas multitudinarias.</li>
        <li>Contenido gratuito y sin registros obligatorios.</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-6 mb-2">Descarga y empieza a jugar</h2>
    <p class="mb-4">Dir\u00edgete a nuestra <a href="/" class="text-purple-700 underline">p\u00e1gina principal</a> para obtener la app y descubre la forma m\u00e1s sencilla de impulsar la diversi\u00f3n en tus celebraciones.</p>
</main>
