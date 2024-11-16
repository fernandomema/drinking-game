<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let players: any[] = []; // [{ name: string }]
    export let inputToFocus: HTMLInputElement | undefined = undefined;
    const eventDispatcher = createEventDispatcher();

    const removePlayer = (player: any) => {
        players = players.filter((p) => p.name !== player.name);
        players = players;
        inputToFocus?.focus();
    };
</script>

<div class="flex h-full w-full animate-fade-in flex-col items-start justify-end gap-2 px-2"> 
    {#each players as player}
        <div class="flex w-full animate-fade-in-left items-center justify-between rounded-lg bg-[#936ff5] bg-opacity-70 p-2 transition-all duration-300 ease-in-out hover:bg-opacity-100"> 
            <div class="text-2xl font-bold text-white">{player.name}</div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <svg on:click={() => removePlayer(player)} xmlns="http://www.w3.org/2000/svg" class="cursor-pointer text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M4 7h16"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                <path d="M10 12l4 4m0 -4l-4 4"></path>
            </svg>
        </div>
    {/each}
</div>