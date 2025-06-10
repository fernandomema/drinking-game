<script lang="ts">
    import { _ } from '$lib/locales';
    import type { Mode } from '$lib/modes';
    export let modesList: [string, Mode][] = [];
</script>

<div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 mb-8 w-full border border-purple-100">
    <div class="text-center mb-8">
        <h3 class="text-2xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 pb-1">{$_('related_modes')}</h3>
        <div class="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-2 rounded-full"></div>
        <p class="text-gray-600 mt-3 max-w-2xl mx-auto">¡Descubre otros modos de juego que podrían interesarte!</p>
    </div>
    
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {#each modesList as [key, mode]}
            <li class="text-center">
                <a href={`/modes/${key}/`} class="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform border border-purple-100 h-full">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full w-24 h-24 mx-auto animate-pulse"></div>
                        <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center p-1 overflow-hidden">
                            <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-14 h-14" />
                        </div>
                    </div>
                    <span class="block font-bold text-lg text-gray-800 mb-2">{$_(`modes.${key}.title`)}</span>
                    <p class="text-sm text-gray-600 line-clamp-3">{$_(`modes.${key}.description`)}</p>
                    <div class="mt-4 pt-3 border-t border-purple-100">
                        <span class="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800">
                            <span>{$_('explore_modes')}</span>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
    
    <div class="text-center mt-8">
        <a href="/modes" class="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:shadow-lg transition-all duration-300">
            Ver todos los modos
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</div>
