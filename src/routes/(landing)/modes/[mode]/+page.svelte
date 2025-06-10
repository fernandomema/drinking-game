<script lang="ts">
  import { page } from '$app/stores';
  import { type Mode, modes } from '$lib/modes';
  import { _, getLocale } from '$lib/locales';
  import { onMount } from 'svelte';
  let modeKey: string = '';
  let mode: Mode | null = null;
  let examples: string[] = [];
  let modeStats = {
    duration: '30-60 min',
    players: '3+ jugadores',
    category: 'General'
  };

  $: {
    const $pageVal = $page;
    modeKey = $pageVal.params.mode;
    mode = modes[modeKey];
    modeStats = getModeStats(modeKey);
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
    return (mode?.pickCards(require('$lib/questions').questions, locale, players) || []).map(card => card.locales[locale]).slice(2, 6);
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
      }
      try {
        const allQuestions: any[] = require('$lib/questions').questions;
        stats.totalCards = allQuestions.filter((q: any) => q.tags && q.tags.includes(modeKey)).length;
      } catch {}
    }
    return stats;
  }
</script>

<svelte:head>
  {#if mode}
    <title>{$_(`modes.${modeKey}.title`)} | Tragos Locos</title>
    <meta name="description" content={$_(`modes.${modeKey}.description`)} />
    <link rel="canonical" href={`https://tragos-locos.servitimo.net/modes/${modeKey}/`} />
  {/if}
</svelte:head>

{#if mode}
  <div class="max-w-4xl mx-auto p-4">
    <header class="text-center my-8">
      <img src={mode.icon} alt="icono" class="w-24 h-24 mx-auto mb-4" />
      <h1 class="text-3xl font-bold mb-2">{$_(`modes.${modeKey}.title`)}</h1>
      <p class="text-gray-700">{$_(`modes.${modeKey}.description`)}</p>
    </header>

    <section class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center my-8">
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
    <section class="my-8">
      <h2 class="text-2xl font-bold mb-4 text-center">Ejemplos de tarjetas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each examples as card, index}
          <div class="p-4 border rounded-lg shadow">
            <p>{@html card}</p>
          </div>
        {/each}
      </div>
    </section>
    {/if}

    <div class="text-center my-12">
      <a href="/" class="bg-purple-600 text-white px-6 py-3 rounded-lg">Descargar App</a>
    </div>
  </div>
{:else}
  <p class="text-center mt-20">Modo no encontrado</p>
{/if}
