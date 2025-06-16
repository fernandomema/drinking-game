<script lang="ts">
    import { _ } from '$lib/locales';
    import { modes } from '$lib/modes';

    const featuredModes = Object.entries(modes)
        .filter(([_, mode]) => (mode.isFeatured ?? false) && (mode.isPublic ?? true) && (!mode.isEnabled || mode.isEnabled()))
        .slice(0, 4);
</script>

<section class="bg-gradient-to-b from-purple-50 to-white py-16">
    <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-purple-900 mb-4">{$_('landingPage.featured_modes_title')}</h2>
        </div>
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each featuredModes as [key, mode]}
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
                    </a>
                </li>
            {/each}
        </ul>
        <div class="text-center mt-8">
            <a href="/modes" class="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:shadow-lg transition-all duration-300">
                {$_('explore_modes')}
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</section>
