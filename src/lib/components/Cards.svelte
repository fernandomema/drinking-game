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
    import { OriginChecker } from '$lib/OriginChecker';
    import BottomSheet from '$lib/components/BottomSheet.svelte';

    const mode = $page.params.mode as string;
    const filteredQuestions = modes[mode].pickCards(questions);
	let players: any[] = [];
    let Sentry: any;
    let ended = false;

    let showModal = false;

    let locale = 'en';

	onMount(async () => {
        players = JSON.parse(sessionStorage.getItem('players') || '[]');
        if (!players || players.length == 0) goto('/select-mode');
        locale = await getLocale();
        Sentry = await import('@sentry/capacitor');
	});

	let swipe: (direction?: 'left' | 'right') => void;
	let thresholdPassed = 0;

	function onSwipe(cardInfo: SwipeEventData) {
		console.log('swiped', cardInfo?.direction, 'on card', cardInfo?.data?.question);
        if (cardInfo?.direction == 'left') {
            //Sentry?.captureMessage('Disliked a card: ' + cardInfo?.data?.rawQuestion);
            window.umami?.track('dislike-card', { question: cardInfo?.data?.rawQuestion });
        }
	}

    function weightedRandom() {
        // Define the weights for each number, higher weights mean higher probability.
        // Weights should decrease as numbers increase.
        const weights = [5, 4, 3, 2, 1]; // Corresponding to numbers 1, 2, 3, 4, 5

        // Calculate the total weight
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

        // Generate a random number between 0 and totalWeight
        const random = Math.random() * totalWeight;

        // Determine which number corresponds to the random value
        let cumulativeWeight = 0;
        for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (random < cumulativeWeight) {
                return i + 1; // Numbers start from 1
            }
        }
        return 1;
    }

	function cardData(index: number) {
        if (index >= filteredQuestions.length) return null;
		const shuffledPlayers = players.shuffle();
        const player1 = shuffledPlayers[0];
        const player2 = shuffledPlayers[1];
        const shots: number = weightedRandom();
		return {
			question: filteredQuestions[index]?.locales[locale]?.replace('{player1}', player1.name).replace('{player2}', player2.name).replace('{shots}', shots.toString()).spintax(),
			rawQuestion: filteredQuestions[index]?.locales['en'] || Object.values(filteredQuestions[index]?.locales)[0],
            index: filteredQuestions[index].index,
		};
	}
</script>

{#if players.length > 0 && Sentry}
    <div class="relative flex h-full w-full items-center justify-center overflow-hidden p-2">
        {#if !ended}
            <div transition:fade={{ duration: 200 }} class="relative flex md:flex-row h-full w-full max-w-xl flex-col gap-2">
                <CardSwiper bind:swipe bind:thresholdPassed {cardData} {onSwipe} on:end={() => ended = true} />
                <div class="flex md:flex-col gap-2">

                    <button
                        class="bottom-1 left-1 z-10 rounded-2xl bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => swipe('left')}
                    >
                        👎
                    </button>

                    <button
                        class="bottom-1 left-1 z-10 rounded-2xl bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => showModal = true}
                    >
                        💬 
                    </button>

                    <button
                        class="bottom-1 left-1 z-10 rounded-2xl bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm w-full md:h-full"
                        on:click={() => swipe('right')}
                    >
                        ⏩
                    </button>
                    
                    <!-- <button
                        class="bottom-1 right-1 z-10 rounded-full bg-white/50 p-3 px-4 text-3xl backdrop-blur-sm"
                        on:click={() => swipe('right')}
                    >
                        
                    </button> -->
                </div>
                {#if OriginChecker.isProduction($page.url.href)}
                    <div class="flex items-center justify-center rounded-2xl bg-white/50 p-3 px-4 text backdrop-blur-sm min-h-[50px] min-w-[320px] md:hidden">
                        {#if Math.random() > 0.5}
                            <script type="text/javascript">
                                atOptions = {
                                    'key' : '0ce0fa3ad64acf4687746e67bb37f5b0',
                                    'format' : 'iframe',
                                    'height' : 50,
                                    'width' : 320,
                                    'params' : {}
                                };
                            </script>
                            <script type="text/javascript" src="//www.highperformanceformat.com/0ce0fa3ad64acf4687746e67bb37f5b0/invoke.js"></script>
                        {:else}
                            <script type="text/javascript" src="https://ap.lijit.com/www/delivery/fpi.js?z=1264479&width=320&height=100"></script>
                        {/if}
                    </div>
                {/if}
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
            <div in:fade={{ duration: 200, delay: 200 }} class="flex h-full w-full flex-col">
                <div class="flex h-full w-full flex-col items-center justify-center text-center text-7xl">
                    End of the game!
                </div>
                <div class="h-[60px]">
                    <button
                        transition:fade={{ duration: 600, delay: 2500 }}
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

<BottomSheet isOpen={showModal} onClose={() => (showModal = false)}>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center w-full">
            
            <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
                Suggest a question
            </h2>
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSckWcrvzdB4R4fvBuSBTBg57D7KIivNPnDLQ1PdCAmd4aGnug/viewform?embedded=true" width="100%" height="450" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> 

        </div>
    </div>
</BottomSheet>