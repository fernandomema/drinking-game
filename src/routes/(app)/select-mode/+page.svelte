<script lang="ts">
    import { goto } from "$app/navigation";
    import { App } from '@capacitor/app';
	import { browser } from '$app/environment';
    import PageContainer from "$lib/components/PageContainer.svelte";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { _ } from "$lib/locales";
    import BottomNavbar from "$lib/components/BottomNavbar.svelte";
    import { modes } from "$lib/modes";

    let titleCentered = true;
    let titleStopedAnimating = false;

    let playerCount = 0;

    const buttons = [{
        text: $_('modes.preparty.title'),
        mode: 'preparty',
        icon: "/preparty.png",
        description: $_('modes.preparty.description'), 
    }, {
        text: $_('modes.best-friends.title'),
        mode: 'best-friends',
        icon: "/high-five.png",
        description: $_('modes.best-friends.description'),
    }, {
        text: $_('modes.hot.title'),
        mode: 'hot',
        icon: "/plus-18-light.png",
        description: $_('modes.hot.description'),
    },{
        text: $_('modes.teams.title'),
        mode: 'teams',
        icon: "/teams.png",
        description: $_('modes.teams.description'),
    }, {
        text: $_('modes.christmas.title'),
        mode: 'christmas',
        icon: "/christmas.png",
        description: $_('modes.christmas.description'),
    }];

    onMount(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        titleCentered = false;
        await new Promise((resolve) => setTimeout(resolve, 800));
        titleStopedAnimating = true;
        
    });

    if (browser) {
	    App.addListener('backButton', async () => {
		    window.history.back();
	    });
        playerCount = JSON.parse(sessionStorage.getItem('players') || '[]').length;
        if (playerCount === 0) goto('/add-players');
    }

    const onClick = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLDivElement;
        const mode = target.getAttribute('data-mode');
        console.log(document.referrer);
        goto(`/play/${mode}`, {
            replaceState: false
        });
    };

</script>

<PageContainer class="flex flex-col items-center pb-5 overflow-auto relative">
    <div 
        class:absolute={!titleStopedAnimating}
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('select_play_mode')}
    </div>
    {#if titleStopedAnimating}
        <div class="flex w-full flex-col items-center justify-center gap-5 p-4 mt-[20px] max-w-lg">
            {#each  Object.entries(modes) as [modeKey, mode], index}
                <button 
                    in:fly|global={{ x: index % 2 === 0 ? -200 : 200, duration: 300, delay: index * 250 }} 
                    class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-white bg-opacity-10 p-4" on:click={onClick} 
                    data-mode={modeKey} 
                    class:flex-row-reverse={index % 2 === 1}
                    data-umami-event="start-game"
                    data-umami-event-players={playerCount}
                    data-umami-event-mode="{modeKey}"
                >
                    <div class="flex aspect-square h-[90px] w-[90px] items-center justify-center rounded-full bg-white bg-opacity-10 p-2">
                        <img in:fly|global={{ x: index % 2 === 0 ? -200 : 200, duration: 300, delay: (index * 300) + 150 }}  src={mode.icon} alt="" class="h-full w-full animate-rubber-band" />
                    </div>
                    <div class="flex w-full flex-col justify-center">
                        <div class="text-3xl">{$_(`modes.${modeKey}.title`)}</div>
                        <div class="text-md text-justify font-[Ubuntu] font-normal leading-tight">{$_(`modes.${modeKey}.description`)}</div>
                    </div>
                </button>
            {/each}
        </div>
    {/if}
</PageContainer>


{#if titleStopedAnimating}
    <div class="animate-slide-up-fade animation-duration-1200">
        <BottomNavbar/>
    </div>
{/if}