<script lang="ts">
    import { onMount } from "svelte";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import BottomNavbar from "$lib/components/BottomNavbar.svelte";
    import { _ } from "$lib/locales";
    import { modes } from "$lib/modes";
    import { fly, fade } from "svelte/transition";

    let titleCentered = true;
    let titleStopedAnimating = false;
    let search = "";
    let selectedFilter = "todos";

    // Generar lista de modos igual que en /select-mode, pero solo los públicos para explore-modes
    const modeEntries = Object.entries(modes).filter(e => (e[1].isPublic ?? true));
    
    // Categorías para el filtro
    const categorias = [
        { id: "todos", nombre: "Todos" },
        { id: "general", nombre: "General" },
        { id: "especiales", nombre: "Especiales" }
    ];

    onMount(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        titleCentered = false;
        await new Promise((resolve) => setTimeout(resolve, 800));
        titleStopedAnimating = true;
    });

    // Filtrar por categoría y búsqueda
    $: filteredModes = modeEntries.filter(([modeKey, mode]) => {
        const title = $_(`modes.${modeKey}.title`).toLowerCase();
        const desc = $_(`modes.${modeKey}.description`).toLowerCase();
        const searchMatch = !search || title.includes(search.toLowerCase()) || desc.includes(search.toLowerCase());
        
        if (selectedFilter === "todos") return searchMatch;
        if (selectedFilter === "general") return searchMatch && mode.menuPriority === 0;
        if (selectedFilter === "especiales") return searchMatch && (mode.menuPriority === 1 || mode.menuPriority === 2);
        
        return searchMatch;
    });
</script>

<PageContainer class="relative flex flex-col items-center overflow-auto pb-5 pb-[50px]">
    <!-- Buscador con fondo y efectos visuales -->
    <div class="w-full flex flex-col items-center mt-4 relative px-4" in:fade={{ duration: 500, delay: 200 }}>
        <div class="relative w-full max-w-md z-10">
            <input
                type="text"
                placeholder="Buscar modo..."
                bind:value={search}
                class="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all shadow-lg"
            />
            <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        
        <!-- Filtros por categorías -->
        <div class="flex space-x-2 mt-4 mb-4">
            {#each categorias as categoria}
                <button 
                    class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
                          {selectedFilter === categoria.id 
                            ? 'bg-purple-600 text-white border-purple-400' 
                            : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/20'}"
                    on:click={() => selectedFilter = categoria.id}
                >
                    {categoria.nombre}
                </button>
            {/each}
        </div>

        <!-- Botón de volver debajo del buscador y filtros -->
        <button
            class="mt-2 flex items-center px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow transition-all duration-200"
            on:click={() => history.length > 1 ? history.back() : window.location.href = '/'}
            aria-label="Volver"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Volver
        </button>
    </div>

    <!-- Mensaje cuando no hay resultados -->
    {#if filteredModes.length === 0}
        <div class="w-full p-8 text-center text-white/80 mt-8" in:fade>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-purple-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-bold mb-2">No se encontraron modos</h3>
            <p>Intenta con otra búsqueda o selecciona otra categoría</p>
        </div>
    {:else}
        <!-- Grid layout mejorado -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-7xl">
            {#each filteredModes as [modeKey, mode], index}
                <a href="/mode/{modeKey}/info" class="block group transform transition-all duration-500 hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-3xl">
                    <div class="relative h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-[#794fea]/50 to-[#9969F8]/50 backdrop-blur-lg border border-white/20 hover:border-white/40 p-6 transition-all duration-500 flex flex-col items-center text-center shadow-xl hover:shadow-2xl">
                        <!-- Fondo decorativo animado -->
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
                        
                        <!-- Contenido -->
                        <div class="relative z-10 flex flex-col items-center">
                            <!-- Icono con efecto de brillo -->
                            <div class="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 mb-4 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-500 shadow-lg relative overflow-hidden">
                                <div class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>
                                <img src={mode.icon} alt="" class="w-12 h-12" />
                            </div>
                            
                            <!-- Contenido centrado con mejor espaciado -->
                            <div class="flex-1 flex flex-col justify-center items-center space-y-3 mb-6">
                                <h3 class="text-2xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300">
                                    {$_(`modes.${modeKey}.title`)}
                                </h3>
                                <p class="text-sm text-white/80 font-[Ubuntu] group-hover:text-white transition-all duration-300 line-clamp-3">
                                    {$_(`modes.${modeKey}.description`)}
                                </p>
                            </div>
                        </div>
                        
                        <!-- Decoración esquina -->
                        <div class="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 group-hover:bg-purple-300 transition-all duration-500 shadow-lg shadow-purple-500/20"></div>
                        
                        <!-- Pill de categoría (movida a la esquina superior) -->
                        <div class="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-black/30 backdrop-blur-sm text-white/90 border border-white/20 z-20 shadow-md">
                            {mode.menuPriority === 0 ? 'Modo General' : mode.menuPriority === 1 ? 'Estacional' : 'Especial'}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    {/if}
</PageContainer>

<BottomNavbar/>

<style>
    /* ...existing code... */
</style>