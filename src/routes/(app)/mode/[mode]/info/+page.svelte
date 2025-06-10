<script lang="ts">
import { page } from '$app/stores';
import { type Mode, modes } from '$lib/modes';
import { _, getLocale } from '$lib/locales';
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import PageContainer from '$lib/components/PageContainer.svelte';
import { fly, fade } from 'svelte/transition';
    import { questions } from '$lib/questions';

let modeKey: string = '';
let mode: Mode|null = null;
let examples: string[] = [];
let modeStats = {
    duration: '30-60 min',
    players: '3+ jugadores',
    category: 'General',
    color: 'from-purple-500/20 to-blue-500/20'
};

// Usar $page como store reactivo
$: {
    const $pageVal = $page;
    modeKey = $pageVal.params.mode;
    mode = modes[modeKey];
    modeStats = getModeStats(modeKey);
}

// Cargar ejemplos de forma asíncrona cuando cambie el modo
$: if (modeKey && mode) {
    loadExamples();
}

async function loadExamples() {
    examples = await getExampleCards(modeKey);
}

async function getExampleCards(modeKey: string): Promise<string[]> {
    const locale = await getLocale();
    // Evitar modos que requieren localStorage o window en SSR
    if (typeof window === 'undefined') {
        // Devuelve ejemplos simulados si estamos en SSR
        return [
            'Ejemplo de tarjeta 1',
            'Ejemplo de tarjeta 2',
            'Ejemplo de tarjeta 3',
            'Ejemplo de tarjeta 4'
        ];
    }
    const players = JSON.parse(sessionStorage.getItem('players') || '[]');
    console.log(players);
    return (mode?.pickCards(questions, locale, players) || []).map((card) => {
        return card.locales[locale];
    }).slice(2, 6);
}

function getModeStats(modeKey: string) {
    // Buscar el modo real
    const mode = modes[modeKey];
    let stats: any = {
        duration: '15 - 20 min',
        players: '3+ jugadores',
        category: 'General',
        color: 'from-purple-500/20 to-blue-500/20',
        totalCards: 0,
        public: true,
        featured: true
    };
    // Dificultad y categoría por menuPriority
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
        // Color por tipo
        if (modeKey === 'preparty') stats.color = 'from-green-500/20 to-blue-500/20';
        if (modeKey === 'crazy') stats.color = 'from-red-500/20 to-orange-500/20';
        if (modeKey === 'teams') stats.color = 'from-purple-500/20 to-pink-500/20';
        if (modeKey === 'christmas') stats.color = 'from-red-500/20 to-green-500/20';
        // Contar tarjetas del modo
        try {
            const allQuestions: any[] = questions;
            stats.totalCards = allQuestions.filter((q: any) => q.tags && q.tags.includes(modeKey)).length;
        } catch {}
    }
    return stats;
}

onMount(() => {
    if (!mode) {
        goto('/explore-modes');
    }
});
</script>

<PageContainer class="relative flex flex-col items-center overflow-auto pb-5 pb-[50px] p-4">
    <!-- Botón de volver -->
    <button 
        class="self-start mb-6 flex items-center px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow transition-all duration-200 backdrop-blur-sm"
        on:click={() => history.length > 1 ? history.back() : goto('/explore-modes')}
        in:fade={{ duration: 300 }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
    </button>
    
    {#if mode}
        <!-- Header del modo -->
        <div class="flex flex-col items-center w-full max-w-4xl mb-8" in:fly={{ y: 50, duration: 600 }}>
            <div class="relative">
                <!-- Efectos de fondo -->
                <div class="absolute -inset-4 bg-gradient-to-r {modeStats.color} rounded-full blur-xl opacity-30"></div>
                <img src={mode.icon} alt="icono" class="relative w-24 h-24 mb-6 drop-shadow-2xl" />
            </div>
            <h1 class="text-4xl font-bold text-white mb-4 text-center">{$_(`modes.${modeKey}.title`)}</h1>
            <p class="text-xl text-white/80 mb-8 text-center max-w-2xl leading-relaxed">{$_(`modes.${modeKey}.description`)}</p>
        </div>

        <!-- Estadísticas del modo -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-8" in:fly={{ y: 50, duration: 600, delay: 200 }}>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div class="text-2xl mb-2">⏱️</div>
                <div class="text-sm text-white/70 mb-1">Duración</div>
                <div class="text-white font-semibold">{modeStats.duration}</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div class="text-2xl mb-2">👥</div>
                <div class="text-sm text-white/70 mb-1">Jugadores</div>
                <div class="text-white font-semibold">{modeStats.players}</div>
            </div>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div class="text-2xl mb-2">🎯</div>
                <div class="text-sm text-white/70 mb-1">Categoría</div>
                <div class="text-white font-semibold">{modeStats.category}</div>
            </div>
            <!-- Nueva estadística: Total de tarjetas -->
            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20">
                <div class="text-2xl mb-2">🃏</div>
                <div class="text-sm text-white/70 mb-1">Tarjetas</div>
                <div class="text-white font-semibold">{modeStats.totalCards}</div>
            </div>
        </div>

        <!-- Ejemplos de tarjetas -->
        {#if examples.length > 0}
            <div class="w-full max-w-4xl" in:fly={{ y: 50, duration: 600, delay: 400 }}>
                <h2 class="text-2xl font-bold text-white mb-6 text-center">🃏 Ejemplos de tarjetas</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {#each examples as card, index}
                        <div 
                            class="relative group cursor-pointer"
                            in:fly={{ y: 50, duration: 400, delay: 100 * index }}
                        >
                            <!-- Carta con efecto de hover -->
                            <div class="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 min-h-[120px] flex items-center">
                                <!-- Efecto de brillo en hover -->
                                <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <!-- Número de carta -->
                                <div class="absolute top-3 right-3 w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center text-white/70 text-sm font-bold">
                                    {index + 1}
                                </div>
                                
                                <!-- Contenido de la carta -->
                                <div class="relative z-10 flex-1">
                                    <p class="text-white text-lg leading-relaxed">{@html card}</p>
                                </div>
                                
                                <!-- Decoración -->
                                <div class="absolute bottom-3 left-3 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}

        <!-- Botón de acción -->
        <div class="mt-12 w-full max-w-md" in:fly={{ y: 50, duration: 600, delay: 600 }}>
            <button 
                class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-purple-400/50"
                on:click={() => goto(`/play/${modeKey}/`)}
            >
                <div class="flex items-center justify-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-xl">¡Jugar ahora!</span>
                </div>
            </button>
        </div>

    {:else}
        <div class="text-white text-center mt-20" in:fade>
            <div class="text-6xl mb-4">😕</div>
            <h2 class="text-3xl font-bold mb-4">Modo no encontrado</h2>
            <p class="text-xl text-white/70 mb-8">El modo solicitado no existe o no está disponible.</p>
            <button 
                class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
                on:click={() => goto('/explore-modes')}
            >
                Explorar modos
            </button>
        </div>
    {/if}
</PageContainer>

<style>
    /* Mejoras visuales adicionales */
    .backdrop-blur-md {
        backdrop-filter: blur(12px);
    }
    
    /* Animación sutil para las cartas */
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .group:hover .relative {
        animation: float 2s ease-in-out infinite;
    }
</style>
