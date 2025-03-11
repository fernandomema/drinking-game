<script lang="ts">
	import { CardSwiper, type SwipeEventData } from '$lib/components/CardSwiper';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    import { questions, type Question } from '$lib/questions';
    import '$lib/Shuffle';
    import '$lib/Spintax';
    import { page } from '$app/stores';
    import { modes } from '$lib/modes';
    import { goto } from '$app/navigation';
    import { getLocale } from '$lib/locales';
    import BottomSheet from '$lib/components/BottomSheet.svelte';
    import InGameBanner from './InGameBanner.svelte';
    import PremiumFeatureBottomSheet from './BottomSheets/PremiumFeatureBottomSheet.svelte';
    import { shareApp } from '$lib/utils/Share';
    import type { Team } from '$lib/types/Team';
    import { _ } from '$lib/locales';
    import RouletteCard from './RouletteCard.svelte';

    const mode = $page.params.mode as string;
    let filteredQuestions: Question[] = [];
	let players: any[] = [];
    let ended = false;

    let showSuggestModal = false;
    let showContextModal = false;
    let showPremiumModal = false;
    let showTeamsModal = false;

    let locale = 'en';

    let teams: Team[] = [];
    let umami: umami.umami | undefined;

	onMount(async () => {
        players = JSON.parse(sessionStorage.getItem('players') || '[]');
        if (!players || players.length == 0) goto('/select-mode');
        locale = await getLocale();
        filteredQuestions = modes[mode].pickCards(questions, locale, players);
        teams = JSON.parse(localStorage.getItem('teams') || '[]');
        umami = window.umami;
	});

	let swipe: (direction?: 'left' | 'right') => void;
    let undoSwipe: () => void;
	let thresholdPassed = 0;
    let lastStatus: any;

	function onSwipe(cardInfo: SwipeEventData) {
        if (cardInfo?.direction == 'left') {
            umami?.track('dislike-card', { question: cardInfo?.data?.rawQuestion });
        }
	}

	function cardData(index: number) {
        if (!filteredQuestions[index]) return null;
        return {
            question: filteredQuestions[index]?.locales[locale],
            rawQuestion: filteredQuestions[index]?.locales['en'] || Object.values(filteredQuestions[index]?.locales || [])[0],
            index: filteredQuestions[index].index,
            tags: filteredQuestions[index].tags,
            type: filteredQuestions[index].type
        };
	}

    function clickShareApp() {
        shareApp();
        umami?.track('share-game', {origin: 'context-menu'});
    }
</script>
{#if filteredQuestions && filteredQuestions.length > 0}
    <div class="relative flex h-full w-full items-center justify-center overflow-hidden p-2">
        {#if !ended}
            <div transition:fade={{ duration: 200 }} class="relative flex md:flex-row h-full w-full max-w-xl flex-col gap-2">
                {#if mode === 'roulette'}
                    <RouletteCard {players} />
                {:else}
                    <CardSwiper bind:swipe bind:undoSwipe bind:thresholdPassed bind:lastStatus {cardData} {onSwipe} on:end={() => ended = true} />
                {/if}
                
                <div class="flex md:flex-col gap-2">

                    <button
                        class="app-icon-mask flex items-center justify-center bottom-1 left-1 z-10 rounded-2xl bg-white/75 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => swipe('left')}
                    >
                        <span class="iconify-mask solar--dislike-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    </button>

                    <button
                        class="app-icon-mask flex items-center justify-center bottom-1 left-1 z-10 rounded-2xl bg-white/75 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => undoSwipe()}
                    >
                        {#if lastStatus}
                            <span class="iconify-mask solar--double-alt-arrow-left-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                        {:else}
                            <span class="iconify-mask solar--lock-keyhole-minimalistic-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                        {/if}
                    </button>

                    <button
                        class="app-icon-mask flex items-center justify-center bottom-1 left-1 z-10 rounded-2xl bg-white/75 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => swipe('right')}
                    >
                        <span class="iconify-mask solar--double-alt-arrow-right-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    </button>

                    <button
                        class="app-icon-mask flex items-center justify-center bg-white bottom-1 left-1 z-10 rounded-2xl bg-white/75 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => showContextModal = true}
                    >
                        <span class="iconify-mask solar--menu-dots-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    </button>

                </div>
                <InGameBanner />
            </div>

            {#if thresholdPassed < 0}
                <div
                    transition:fade={{ duration: 200 }}
                    class="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-white/20 text-9xl backdrop-blur-sm"
                >
                    {thresholdPassed > 0 ? '👍' : '👎'}
                </div>
            {/if}
        {:else}
            <script>(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8640489,document.createElement('script'))</script>
            <div in:fade={{ duration: 200, delay: 200 }} class="flex h-full w-full flex-col gap-4">
                <div class="rounded-3xl flex h-full w-full flex-col items-center justify-center text-center text-7xl bg-[794fea] backdrop-blur-lg border-2 border-solid border-white border-opacity-20 shadow">
                    {$_('end_of_game')}
                </div>
                <div class="h-[60px] mb-2">
                    <button
                        transition:fade={{ duration: 600, delay: 2500 }}
                        class="w-full rounded-3xl p-3 px-4 text-3xl bg-[794fea] backdrop-blur-lg border-2 border-solid border-white border-opacity-20 shadow"
                        on:click={() => goto('/select-mode')}
                    >   
                        Back to mode selection
                    </button>
                </div>
            </div>
        {/if}
    </div>
{/if}

<BottomSheet isOpen={showSuggestModal} onClose={() => (showSuggestModal = false)}>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center w-full">
            
            <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
                Suggest a question
            </h2>
            
            <iframe title="suggest a question iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSckWcrvzdB4R4fvBuSBTBg57D7KIivNPnDLQ1PdCAmd4aGnug/viewform?embedded=true" width="100%" height="450" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> 

        </div>
    </div>
</BottomSheet>
<BottomSheet isOpen={showContextModal} onClose={() => (showContextModal = false)}>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center w-full">
            
            <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
                More options
            </h2>

            <div class="flex flex-col items-center w-full gap-2 mt-4">
                {#if teams.length > 0}
                    <button on:click={() => {showContextModal = false; showTeamsModal = true;umami?.track('open-teams-modal')}} class="flex items-center w-full">
                        <span class="iconify iconify-mask solar--users-group-two-rounded-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                        <span class="text-xl text-gray-700 font-normal ml-2">Team Players</span>
                    </button>
                {/if}
                <button on:click={() => {showContextModal = false; showSuggestModal = true;}} class="flex items-center w-full">
                    <span class="iconify iconify-mask solar--chat-round-dots-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    <span class="text-xl text-gray-700 font-normal ml-2">Suggest a question</span>
                </button>
                <button on:click={() => {showContextModal = false; showPremiumModal = true;}} class="flex items-center w-full">
                    <span class="iconify iconify-mask solar--screencast-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    <span class="text-xl text-gray-700 font-normal ml-2">Cast to screen</span>
                </button>
                <!-- Share -->
                <button on:click={clickShareApp} class="flex items-center w-full">
                    <span class="iconify iconify-mask solar--share-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    <span class="text-xl text-gray-700 font-normal ml-2">Share this game</span>
                </button>
                <!-- Rate -->
                <button class="flex items-center w-full">
                    <span class="iconify iconify-mask solar--star-bold-duotone block w-[40px] h-[40px] bg-purple-700"></span>
                    <span class="text-xl text-gray-700 font-normal ml-2">Rate this game</span>
                </button>
            </div>
            
        </div>
    </div>
</BottomSheet>

<PremiumFeatureBottomSheet bind:showPremiumModal={showPremiumModal} />

<BottomSheet isOpen={showTeamsModal} onClose={() => (showTeamsModal = false)}>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center w-full">
            <!-- Title -->
            <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
                Team Players
            </h2>
    
            <!-- Teams and Players -->
            <div class="flex flex-col items-center w-full gap-4 mt-4">
                {#each teams as team}
                    <div class="w-full bg-purple-100 p-2 rounded-lg">
                        <h3 class="text-xl font-semibold text-center font-semibold text-gray-800 mb-4 underline decoration-${team.color}-500">{team.name}</h3>
                        <ul class="list-none">
                            {#each team.players as player}
                                <li class="text-gray-700 text-md flex items-center gap-2 flex justify-between">
                                    <div class="flex gap-2 items-center">
                                        <span class="bg-glass iconify iconify-mask solar--user-rounded-bold-duotone block w-[40px] h-[40px]"></span> 
                                        <span class="text-lg">{player.name}</span>
                                    </div>
                                    <div class="bg-purple-200 rounded-lg p-2">
                                        <span class="bg-glass iconify iconify-mask solar--card-transfer-bold-duotone block w-[40px] h-[40px]"></span> 
                                    </div>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>

            <div class="flex flex-col items-center justify-center gap-2 mt-4 w-full">
                <button class="bg-purple-700 text-white px-6 py-2 rounded-md w-full flex items-center justify-center gap-2">
                    <span class="iconify iconify-mask solar--shuffle-bold-duotone block w-[40px] h-[40px]"></span>
                    <span>Randomize teams</span>
                </button>
                <div class="flex gap-2 w-full">
                    <button class="bg-purple-700 text-white px-6 py-2 rounded-md w-full flex items-center justify-center gap-2">
                        <span class="iconify iconify-mask solar--cloud-upload-bold-duotone block w-[40px] h-[40px]"></span>
                        Save Team
                    </button>
                    <button class="bg-purple-700 text-white px-6 py-2 rounded-md w-full flex items-center justify-center gap-2">
                        <span class="iconify iconify-mask solar--cloud-download-bold-duotone block w-[40px] h-[40px]"></span>
                        Load team
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</BottomSheet>