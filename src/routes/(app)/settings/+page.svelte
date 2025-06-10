<script lang="ts">
    import { goto } from "$app/navigation";
    import { App } from '@capacitor/app';
	import { browser } from '$app/environment';
    import PageContainer from "$lib/components/PageContainer.svelte";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { _ } from "$lib/locales";
    import BottomNavbar from "$lib/components/BottomNavbar.svelte";
    import Featurebase from "$lib/components/Featurebase.svelte";
    import BottomSheet from "$lib/components/BottomSheet.svelte";
    import LanguageSelector from "$lib/components/BottomSheets/LanguageSelector.svelte";
    import { ttsEnabled } from '$lib/stores/tts';

    let titleCentered = true;
    let titleStopedAnimating = false;

    const modals = {
        suggestQuestion: false,
        sendFeedback: false,
        languageSelector: false
    };

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
    }

</script>

<PageContainer class="flex flex-col items-center pb-5 overflow-auto relative">
    <div 
        class:absolute={!titleStopedAnimating}
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('adjust_settings')}
    </div>
    {#if titleStopedAnimating}
        <div class="flex w-full flex-col items-center justify-center gap-5 p-4 mt-[20px] animate-fade-in font-semibold max-w-lg">
            <button on:click={() => modals.suggestQuestion = true} class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-white bg-opacity-10 p-4">
                <div class="flex w-full flex-col justify-center text-left">
                    <div class="text-3xl">Suggest new questions</div>
                </div>
            </button>
            <button on:click={() => modals.sendFeedback = true} class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-white bg-opacity-10 p-4">
                <div class="flex w-full flex-col justify-center text-left">
                    <div class="text-3xl">Send feedback</div>
                </div>
            </button>
            <!-- Language -->
            <button on:click={() => modals.languageSelector = true} class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-white bg-opacity-10 p-4">
                <div class="flex w-full flex-col justify-center text-left">
                    <div class="text-3xl">Language</div>
                </div>
            </button>
            <!-- Text to Speech -->
            <button on:click={() => ttsEnabled.update(v => !v)} class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-white bg-opacity-10 p-4">
                <div class="flex w-full flex-col justify-center text-left">
                    <div class="text-3xl">{ $ttsEnabled ? 'Disable voice' : 'Enable voice' }</div>
                </div>
            </button>
        </div>
    {/if}
</PageContainer>


{#if titleStopedAnimating}
    <div class="animate-slide-up-fade animation-duration-1200">
        <BottomNavbar activeItem="settings"/>
    </div>
{/if}

<BottomSheet isOpen={modals.suggestQuestion} onClose={() => (modals.suggestQuestion = false)}>
    <div class="flex flex-col items-center">
        <div class="flex flex-col items-center w-full">
            
            <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
                Suggest a question
            </h2>
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSckWcrvzdB4R4fvBuSBTBg57D7KIivNPnDLQ1PdCAmd4aGnug/viewform?embedded=true" width="100%" height="450" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe> 

        </div>
    </div>
</BottomSheet>

<BottomSheet isOpen={modals.sendFeedback} onClose={() => (modals.sendFeedback = false)}>
    <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
        Suggest a question
    </h2>

    <iframe height="450" style="border:none;width:100%;" id="feedback-tragos-locos-1ass6s" src="https://noteforms.com/forms/feedback-tragos-locos-1ass6s"></iframe><script type="text/javascript" onload="initEmbed('feedback-tragos-locos-1ass6s')" src="https://noteforms.com/widgets/iframe.min.js"></script>
</BottomSheet>

<LanguageSelector
    isOpen={modals.languageSelector}
    onClose={() => (modals.languageSelector = false)}
    onLanguageSelected={(language) => {
        // Handle the language selection
        console.log("Selected language:", language);
        modals.languageSelector = false;
    }}
/>