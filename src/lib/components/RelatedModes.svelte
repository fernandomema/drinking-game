<script lang="ts">
    import { _ } from '$lib/locales';
    import type { Mode } from '$lib/modes';
    export let modesList: [string, Mode][] = [];
</script>

<div class="bg-white rounded-lg shadow p-6 mb-6 w-full">
    <h3 class="text-xl font-semibold mb-4 text-center">{$_('related_modes')}</h3>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each modesList as [key, mode]}
            <li class="text-center">
                <a href={`/modes/${key}/`} class="block hover:text-indigo-600 transition-colors">
                    <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-16 h-16 mx-auto mb-2" />
                    <span class="block font-medium">{$_(`modes.${key}.title`)}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>
