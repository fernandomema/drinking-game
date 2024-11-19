<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { _ } from "$lib/locales";
    
    export let value: string = '';
    export let players: any[] = [];
    export let input: HTMLInputElement | undefined = undefined;

    const eventDispatcher = createEventDispatcher();

    onMount(() => {
        input?.focus();
    });
    
    const focus = (node: HTMLInputElement) => node.focus();

    const keyUp = (e: KeyboardEvent) => {
        value = value.capitalize();
        if (e.key === 'Enter') {
            e.preventDefault();
            const playerName = value;
            if (playerName.length > 0) {
                addPlayer(playerName);
            } else {
                eventDispatcher('play');
            }
            value = '';
            input?.focus();
        }
    };

    const addPlayer = (playerName: string) => {
        if (playerName.length > 0 && !players.find((player) => player.name === playerName)) {
            players.push({
                name: playerName,
            });
            players = players;
        }
    };

    const clickAddPlayer = () => {
        addPlayer(value);
        value = '';
        input?.focus();
    };

    const clickPlay = () => {
        eventDispatcher('play');
    };
    
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
</script>

<div class="mb-[10px] flex h-[60px] w-full animate-fade-in gap-2 p-2">
    <input use:focus on:keyup={keyUp} bind:value={value} bind:this={input} class="mb-0.5 h-[50px] w-full rounded-lg border-2 border-purple-200 bg-[#936ff5] bg-opacity-70 px-3 py-2 text-xl font-medium text-white placeholder-gray-200 outline-none transition-all duration-300 ease-in-out focus:border-purple-400" placeholder={$_('player_name')} />
    <button type="button" class="h-[50px] rounded-lg border-2 border-purple-200 bg-purple-600 px-3 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-purple-700" on:click={() => eventDispatcher('submit', { playerName: '' })}>
        {#if value && value.length > 0}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <svg on:click={clickAddPlayer} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
        {:else}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <svg on:click={clickPlay} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M10 18l6 -6l-6 -6v12"></path>
            </svg>
        {/if}
  </button>
</div>