<script lang="ts">
  import { page } from '$app/stores';
  import { type Mode, modes } from '$lib/modes';
import { _, getLocale } from '$lib/locales';
import { onMount } from 'svelte';
import RelatedModes from '$lib/components/RelatedModes.svelte';
import Footer from '$lib/components/Footer.svelte';
import { SchemaGenerator } from '$lib/utils/SchemaGenerator';
import { questions } from '$lib/questions';
import '$lib/Shuffle';
  let modeKey: string = '';
  let mode: Mode | null = null;
  let examples: string[] = [];
  let modeStats = {
    duration: '30-60 min',
    players: '3+ jugadores',
    category: 'General',
    totalCards: 0
  };
  let relatedModes: [string, Mode][] = [];

  $: {
    const $pageVal = $page;
    modeKey = $pageVal.params.mode;
    mode = modes[modeKey];
    modeStats = getModeStats(modeKey);
    relatedModes = getRelatedModes(modeKey);
  }

  $: if (modeKey && mode) {
    loadExamples();
  }

  async function loadExamples() {
    examples = await getExampleCards(modeKey);
  }

  async function getExampleCards(modeKey: string): Promise<string[]> {
    const locale = await getLocale();
    if (typeof window === 'undefined') {
      return [
        'Ejemplo de tarjeta 1',
        'Ejemplo de tarjeta 2',
        'Ejemplo de tarjeta 3',
        'Ejemplo de tarjeta 4'
      ];
    }
    const players = JSON.parse(sessionStorage.getItem('players') || '[]');
    return (mode?.pickCards(questions, locale, players) || []).map(card => card.locales[locale]).slice(2, 6);
  }

  function getModeStats(modeKey: string) {
    const mode = modes[modeKey];
    let stats: any = {
      duration: '15 - 20 min',
      players: '3+ jugadores',
      category: 'General',
      totalCards: 0
    };
    if (mode) {
      if (mode.menuPriority === 0) {
        stats.category = 'General';
      } else if (mode.menuPriority === 1) {
        stats.category = 'Estacional';
      } else if (mode.menuPriority === 2) {
        stats.category = 'Especial';
      } else if (mode.menuPriority === 3) {
        stats.category = 'Beta';
      }
      try {
        const allQuestions: any[] = questions;
        stats.totalCards = allQuestions.filter((q: any) => q.tags && q.tags.includes(modeKey)).length;
      } catch {}
    }
    return stats;
  }

  function getRelatedModes(currentKey: string): [string, Mode][] {
    const current = modes[currentKey];
    if (!current) return [];
    let pool = Object.entries(modes).filter(([key, m]) => key !== currentKey && (m.isPublic ?? true) && m.menuPriority === current.menuPriority);
    if (pool.length < 3) {
      pool = Object.entries(modes).filter(([key, m]) => key !== currentKey && (m.isPublic ?? true));
    }
    return pool.sort(() => Math.random() - 0.5).slice(0, 3);
  }
</script>

<svelte:head>
  {#if mode}
    <title>{$_(`modes.${modeKey}.title`)} | Tragos Locos</title>
    <meta name="description" content={$_(`modes.${modeKey}.description`)} />
    <link rel="canonical" href={`https://tragos-locos.servitimo.net/modes/${modeKey}/`} />
    <meta name="robots" content="index,follow" />
    {@html `<script type="application/ld+json">${JSON.stringify(
      SchemaGenerator.getBreadcrumbs([
        { name: 'Tragos Locos', url: 'https://tragos-locos.servitimo.net/' },
        { name: $_('modes_page.title'), url: 'https://tragos-locos.servitimo.net/modes/' },
        { name: $_(`modes.${modeKey}.title`), url: `https://tragos-locos.servitimo.net/modes/${modeKey}/` }
      ])
    )}</script>`}
  {/if}
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

{#if mode}
  <div class="max-w-4xl mx-auto p-4">
    <header class="text-center my-8">
      <img src={mode.icon} alt="icono" class="w-24 h-24 mx-auto mb-4" />
      <h1 class="text-3xl font-bold mb-2">{$_(`modes.${modeKey}.title`)}</h1>
      <p class="text-gray-700">{$_(`modes.${modeKey}.description`)}</p>
      <div class="mt-2">{@html $_(`modes.${modeKey}.seo_html`)}</div>
    </header>

    <section class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-8 mb-24">
      <div>
        <div class="text-xl">⏱️</div>
        <div class="text-sm text-gray-500">Duración</div>
        <div class="font-semibold">{modeStats.duration}</div>
      </div>
      <div>
        <div class="text-xl">👥</div>
        <div class="text-sm text-gray-500">Jugadores</div>
        <div class="font-semibold">{modeStats.players}</div>
      </div>
      <div>
        <div class="text-xl">🎯</div>
        <div class="text-sm text-gray-500">Categoría</div>
        <div class="font-semibold">{modeStats.category}</div>
      </div>
      <div>
        <div class="text-xl">🃏</div>
        <div class="text-sm text-gray-500">Tarjetas</div>
        <div class="font-semibold">{modeStats.totalCards}</div>
      </div>
    </section>

    {#if examples.length > 0}
    <section class="mb-16">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 pb-1">Ejemplos de tarjetas</h2>
        <div class="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-2 rounded-full"></div>
        <p class="text-gray-600 mt-3 max-w-2xl mx-auto">Aquí tienes algunas de las tarjetas que encontrarás en el modo {$_(`modes.${modeKey}.title`)}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each examples as card, index}
          <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div class="flex items-start">
              <div class="bg-purple-100 rounded-full p-3 mr-4 flex-shrink-0">
                <span class="text-xl">{index === 0 ? '🍸' : index === 1 ? '🎮' : index === 2 ? '🎯' : '🔥'}</span>
              </div>
              <div>
                <p class="text-gray-800 leading-relaxed">{@html card}</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
              <span class="text-sm text-gray-500">Tarjeta de ejemplo</span>
              <span class="text-sm font-medium text-purple-600">#{index + 1}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>
    {/if}

    <!-- Call to Action -->
    <div class="my-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-xl overflow-hidden">
      <div class="relative p-8 md:p-12">
        <!-- Fondo decorativo -->
        <div class="absolute inset-0 bg-[url('/tiles/christmas-colour.webp')] opacity-10 mix-blend-overlay"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-center md:text-left">
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">¿Listo para empezar a jugar?</h2>
            <p class="text-white/90 text-lg max-w-xl">Descarga ahora y disfruta de {$_(`modes.${modeKey}.title`)} y muchos más modos de juego con tus amigos. ¡La diversión está garantizada!</p>
            
            <div class="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <!-- Estadísticas atractivas -->
              <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                <span class="text-2xl mr-2">🎮</span>
                <div>
                  <span class="block text-white font-bold text-xl">{Object.keys(modes).length}+</span>
                  <span class="text-white/80 text-sm">Modos de juego</span>
                </div>
              </div>
              
              <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                <span class="text-2xl mr-2">🔥</span>
                <div>
                  <span class="block text-white font-bold text-xl">1000+</span>
                  <span class="text-white/80 text-sm">Preguntas y retos</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center md:text-right">
            <a 
              href="/" 
              class="inline-flex items-center px-8 py-4 text-lg font-bold text-purple-700 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar App
            </a>
            <p class="text-white/80 text-sm mt-3">Disponible para iOS, Android y Web</p>
          </div>
        </div>
      </div>
    </div>

    {#if relatedModes.length > 0}
        <RelatedModes modesList={relatedModes} />
    {/if}

  </div>
{:else}
  <p class="text-center mt-20">Modo no encontrado</p>
{/if}

<Footer />
