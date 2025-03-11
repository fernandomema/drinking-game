<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import { spring } from 'svelte/motion';
    
    export let players: any[] = [];
    
    const dispatch = createEventDispatcher();
    let rotation = spring(0, {
        stiffness: 0.05,
        damping: 0.15
    });
    
    let selectedPlayer: any = null;
    let isSpinning = false;
    
    function spin() {
        if (isSpinning) return;
        
        isSpinning = true;
        const spins = 5; // Number of full rotations
        const randomDegrees = Math.random() * 360;
        const totalDegrees = (spins * 360) + randomDegrees;
        
        rotation.set(totalDegrees);
        
        setTimeout(() => {
            isSpinning = false;
            const playerIndex = Math.floor((randomDegrees / 360) * players.length);
            selectedPlayer = players[playerIndex];
            dispatch('playerSelected', { player: selectedPlayer });
        }, 3000);
    }
</script>

<div class="flex flex-col items-center justify-center h-full w-full">
    <div class="relative w-64 h-64">
        <div 
            class="absolute w-full h-full rounded-full border-4 border-purple-500"
            style="transform: rotate({$rotation}deg)"
        >
            {#each players as player, i}
                <div 
                    class="absolute w-full h-full"
                    style="transform: rotate({(i * 360) / players.length}deg)"
                >
                    <div 
                        class="absolute top-0 left-1/2 -translate-x-1/2 origin-bottom"
                        style="height: 50%"
                    >
                        {player.name}
                    </div>
                </div>
            {/each}
        </div>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-purple-500"></div>
    </div>
    
    {#if selectedPlayer && !isSpinning}
        <div class="mt-8 text-2xl font-bold text-purple-700">
            {selectedPlayer.name} bebe 2 tragos! 🍻
        </div>
    {/if}
    
    <button 
        class="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg"
        on:click={spin}
        disabled={isSpinning}
    >
        {isSpinning ? 'Girando...' : 'Girar ruleta'}
    </button>
</div>