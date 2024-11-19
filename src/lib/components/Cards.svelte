<script lang="ts">
	import { CardSwiper, type SwipeEventData } from '$lib/components/CardSwiper';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    import { questions } from '$lib/questions';
    import '$lib/Shuffle';
    import '$lib/Spintax';
    import { page } from '$app/stores';
    import { modes } from '$lib/modes';
    import { goto } from '$app/navigation';
    import { getLocale } from '$lib/locales';

    const mode = $page.params.mode as string;
    const filteredQuestions = modes[mode].pickCards(questions);
	let players: any[] = [];
    let Sentry: any;
    let ended = false;

    let locale = 'en';

	onMount(async () => {
        players = JSON.parse(sessionStorage.getItem('players') || '[]');
        locale = await getLocale();
        Sentry = await import('@sentry/capacitor');
	});

	let swipe: (direction?: 'left' | 'right') => void;
	let thresholdPassed = 0;

	function onSwipe(cardInfo: SwipeEventData) {
		console.log('swiped', cardInfo?.direction, 'on card', cardInfo?.data?.question);
        if (cardInfo?.direction == 'left') {
            //Sentry?.captureMessage('Disliked a card: ' + cardInfo?.data?.rawQuestion);
            window.umami.track('dislike-card', { question: cardInfo?.data?.rawQuestion });
        }
	}

	function cardData(index: number) {
        if (index >= filteredQuestions.length) return null;
		const shuffledPlayers = players.shuffle();
        const player1 = shuffledPlayers[0];
        const player2 = shuffledPlayers[1];
        const shots = Math.floor(Math.random() * 5) + 1;
		return {
			question: filteredQuestions[index]?.locales[locale]?.replace('{player1}', player1.name).replace('{player2}', player2.name).replace('{shots}', shots.toString()).spintax(),
			rawQuestion: filteredQuestions[index]?.locales['en'],
		};
	}
</script>

{#if players.length > 0 && Sentry}
    <div class="relative flex h-full w-full items-center justify-center overflow-hidden p-2">
        {#if !ended}
            <div transition:fade={{ duration: 200 }} class="relative flex h-full w-full max-w-xl flex-col gap-2">
                <CardSwiper bind:swipe bind:thresholdPassed {cardData} {onSwipe} on:end={() => ended = true} />
                <div class="flex gap-2">

                    <button
                        class="bottom-1 left-1 z-10 rounded-full bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm"
                        on:click={() => swipe('left')}
                    >
                        👎
                    </button>
                    <!-- <button
                        class="bottom-1 right-1 z-10 rounded-full bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm"
                        on:click={() => swipe('right')}
                    >
                        
                    </button> -->
                </div>
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
        <div in:fade={{ duration: 200, delay: 200 }} class="flex h-full w-full flex-col">
            <div class="flex h-full w-full flex-col items-center justify-center text-center text-7xl">
                End of the game!
            </div>
            <div class="h-[60px]">
                <button
                    class="bottom-1 left-1 z-10 w-full rounded-full bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm"
                    on:click={() => goto('/select-mode')}
                >   
                    Back to mode selection
                </button>
            </div>
        </div>
        {/if}
    </div>
{/if}