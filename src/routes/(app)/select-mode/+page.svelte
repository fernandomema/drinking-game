<script lang="ts">
    import { goto } from "$app/navigation";
    import { App } from '@capacitor/app';
	import { browser } from '$app/environment';
    import PageContainer from "$lib/components/PageContainer.svelte";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { _ } from "$lib/locales";

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

<PageContainer class="flex flex-col items-center justify-center pb-5">
    <div 
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content absolute flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('select_play_mode')}
    </div>
    {#if titleStopedAnimating}
        <div class="flex h-screen w-screen flex-col items-center justify-center gap-5 p-4">
            {#each buttons as button, index}
                <button 
                    in:fly|global={{ x: index % 2 === 0 ? -200 : 200, duration: 300, delay: index * 250 }} 
                    class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-white bg-opacity-10 p-4" on:click={onClick} 
                    data-mode={button.mode} 
                    class:flex-row-reverse={index % 2 === 1}
                    data-umami-event="start-game"
                    data-umami-event-players={playerCount}
                    data-umami-event-mode="{button.mode}"
                >
                    <div class="flex aspect-square h-[90px] w-[90px] items-center justify-center rounded-full bg-white bg-opacity-10 p-2">
                        <img src={button.icon} alt="" class="h-full w-full">
                    </div>
                    <div class="flex w-full flex-col justify-center">
                        <div class="text-3xl">{button.text}</div>
                        <div class="text-md text-justify font-[Ubuntu] font-normal leading-tight">{button.description}</div>
                    </div>
                </button>
            {/each}
        </div>
    {/if}
</PageContainer>