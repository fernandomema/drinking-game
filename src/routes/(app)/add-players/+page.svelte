<script lang="ts">
    import { onMount } from "svelte";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import PlayerList from "$lib/components/PlayerList.svelte";
    import AddPlayerInput from "$lib/components/AddPlayerInput.svelte";
    import { goto } from "$app/navigation";
    import { _ } from "$lib/locales";
    import { loadPlayers, getPlayers, setPlayers } from "$lib/PlayerStorage";

    let titleCentered = true;
    let titleStopedAnimating = false;
    let inputElement: HTMLInputElement;

    let players: any[] = [];

    onMount(async () => {
        await loadPlayers();
        players = getPlayers();
        const AppSys = (await import('@capacitor/app')).App;
        AppSys.addListener('backButton', (data: any) => {
            AppSys.exitApp();
        });

        await new Promise((resolve) => setTimeout(resolve, 2500));
        titleCentered = false;
        await new Promise((resolve) => setTimeout(resolve, 800));
        titleStopedAnimating = true;
    });

    const play = async () => {
        if (players.length > 0) {
            await setPlayers(players);
            goto('/select-mode');
        }
    };
</script>
<PageContainer class="flex flex-col items-center justify-end">
    <div 
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content absolute flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('add_some_players')}
    </div>
    {#if titleStopedAnimating}
        <div class="max-w-lg flex flex-col items-center justify-center w-full pb-safe">
            <PlayerList bind:players={players} bind:inputToFocus={inputElement} />
            <AddPlayerInput bind:players={players} on:play={play} bind:input={inputElement} />
        </div>
    {/if}
</PageContainer>