<script lang="ts">
    export let activeItem = 'modes';

    const items = [{
        id: 'players',
        text: 'Players',
        href: '/add-players',
    }, {
        id: 'modes',
        text: 'Modes',
        href: '/select-mode',
    }, {
        id: 'settings',
        text: 'Settings',
        href: '/settings',
    }]
</script>


<div class="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-[#794fea]} border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div class="w-full">
        <div class="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-white bg-opacity-10 rounded-lg dark:bg-gray-600" role="group">
            {#each items as item}
                {#if item.id === activeItem}
                    <a href={item.href} class="text-center px-5 py-1.5 text-xs font-medium text-white bg-white bg-opacity-20 rounded-lg">
                        {item.text}
                    </a>
                {:else}
                    <a href={item.href} class="text-center px-5 py-1.5 text-xs font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-lg">
                        {item.text}
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</div>
