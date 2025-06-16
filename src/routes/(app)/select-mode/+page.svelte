<script lang="ts">
    import { goto } from "$app/navigation";
    import { App } from '@capacitor/app';
	import { browser } from '$app/environment';
    import PageContainer from "$lib/components/PageContainer.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { _ } from "$lib/locales";
    import BottomNavbar from "$lib/components/BottomNavbar.svelte";
    import { modes } from "$lib/modes";
    import { OriginChecker } from "$lib/OriginChecker";
    import { page } from "$app/stores";
    import PremiumFeatureBottomSheet from "$lib/components/BottomSheets/PremiumFeatureBottomSheet.svelte";
    import InGameBanner from "$lib/components/InGameBanner.svelte";
    import { initialize, interstitial, rewardVideo, showConsent } from "$lib/Admob";
    
    let titleCentered = true;
    let titleStopedAnimating = false;

    let playerCount = 0;
    let showPremiumModal = false;

    onMount(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        titleCentered = false;
        await new Promise((resolve) => setTimeout(resolve, 800));
        titleStopedAnimating = true;
        // if url ahs parameter premiumDemo, set ShowPremiumModal to true
        if (window.location.href.includes('premiumDemo')) {
            showPremiumModal = true;
        }
        await initialize();
        showConsent();
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

    // Solo mostrar modos destacados en select-mode
    const modeEntries = Object.entries(modes).filter(e => (e[1].isFeatured !== false) && (!e[1].isEnabled || e[1].isEnabled()));
</script>

<PageContainer class="relative flex flex-col items-center overflow-auto pb-5 pb-[50px]">
    <div 
        class:absolute={!titleStopedAnimating}
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('select_play_mode')}
    </div>
    {#if titleStopedAnimating && modeEntries}
        <div class="flex w-full flex-col items-center justify-center gap-5 p-4 mt-[20px] max-w-lg">
            {#each  modeEntries as [modeKey, mode], index}
                <button
                    in:fly|global={{ x: index % 2 === 0 ? -200 : 200, duration: 300, delay: index * 250 }}
                    class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-[794fea] bg-opacity-20 backdrop-blur-lg p-4 border border-solid border-white border-opacity-20 shadow" on:click={onClick}
                    data-mode={modeKey} 
                    class:flex-row-reverse={index % 2 === 1}
                    data-umami-event="start-game"
                    data-umami-event-players={playerCount}
                    data-umami-event-mode="{modeKey}"
                >
                    <div class="flex aspect-square h-[90px] w-[90px] items-center justify-center rounded-full bg-white bg-opacity-10 p-2">
                        <img in:fly|global={{ x: index % 2 === 0 ? -200 : 200, duration: 300, delay: (index * 300) + 150 }}  src={mode.icon} alt={$_(`modes.${modeKey}.title`)} class="h-full w-full animate-rubber-band" />
                    </div>
                    <div class="flex w-full flex-col justify-center">
                        <div class="text-3xl">{$_(`modes.${modeKey}.title`)}</div>
                        <div class="text-md text-justify font-[Ubuntu] font-normal leading-tight">{$_(`modes.${modeKey}.description`)}</div>
                    </div>
                </button>
            {/each}
            <button class="w-full text-center bg-white bg-opacity-10 rounded-2xl p-4" on:click={() => goto('/explore-modes')}>
                {$_('explore_modes')}
            </button>
            <InGameBanner />
            {#if OriginChecker.isDev($page.url.href)}
                <button class="w-full text-center bg-purple-500" on:click={() => showPremiumModal = true}>
                    Test premium
                </button>
            {/if}

            
        </div>
    {/if}
</PageContainer>


{#if titleStopedAnimating}
    <div class="animation-duration-1200 animate-slide-up-fade">
        <BottomNavbar/>
    </div>
{/if}

<PremiumFeatureBottomSheet showPremiumModal={showPremiumModal} />
