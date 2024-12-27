<script lang="ts">
    import { onMount } from "svelte";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import PlayerList from "$lib/components/PlayerList.svelte";
    import AddPlayerInput from "$lib/components/AddPlayerInput.svelte";
    import { goto } from "$app/navigation";
    import { _ } from "$lib/locales";

    let titleCentered = true;
    let titleStopedAnimating = false;
    let inputElement: HTMLInputElement;

    let players: any[] = [];

    onMount(async () => {
        players = JSON.parse(sessionStorage.getItem('players') || '[]');
        const AppSys = (await import('@capacitor/app')).App;
        AppSys.addListener('backButton', (data: any) => {
            AppSys.exitApp();
        });

        await new Promise((resolve) => setTimeout(resolve, 2500));
        titleCentered = false;
        await new Promise((resolve) => setTimeout(resolve, 800));
        titleStopedAnimating = true;
    });

    const play = () => {
        if (players.length > 0) {
            sessionStorage.setItem('players', JSON.stringify(players));
            goto('/select-mode');
        }
    };
</script>
<PageContainer class="flex flex-col items-center justify-center pb-5">
    <div 
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content absolute flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('add_some_players')}
    </div>
    {#if titleStopedAnimating}
        <PlayerList bind:players={players} bind:inputToFocus={inputElement} />
        <AddPlayerInput bind:players={players} on:play={play} bind:input={inputElement} />
    {/if}
</PageContainer>