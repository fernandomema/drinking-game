<script lang="ts">
    import { onMount } from "svelte";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import BottomNavbar from "$lib/components/BottomNavbar.svelte";
    import { _ } from "$lib/locales";

    let titleCentered = true;
    let titleStopedAnimating = false;

    const moreModes = Array.from({ length: 20 }, (_, i) => ({
        title: `Mode ${i + 1}`,
        description: 'Coming soon',
        icon: '/preparty.png'
    }));

    onMount(async () => {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        titleCentered = false;
        await new Promise((resolve) => setTimeout(resolve, 800));
        titleStopedAnimating = true;
    });
</script>

<PageContainer class="relative flex flex-col items-center overflow-auto pb-5 pb-[50px]">
    <div
        class:absolute={!titleStopedAnimating}
        class="{titleCentered ? '-translate-y-1/2 top-1/2' : 'translate-y-0 top-0'} h-fit-content flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"
    >
        {$_('explore_modes')}
    </div>
    {#if titleStopedAnimating}
        <div class="flex w-full flex-col items-center justify-center gap-5 p-4 mt-[20px] max-w-lg">
            {#each moreModes as mode, index}
                <div class="justify-space-between flex w-full items-center gap-2 rounded-2xl bg-[794fea] bg-opacity-20 backdrop-blur-lg p-4 border border-solid border-white border-opacity-20">
                    <div class="flex aspect-square h-[90px] w-[90px] items-center justify-center rounded-full bg-white bg-opacity-10 p-2">
                        <img src={mode.icon} alt="" class="h-full w-full" />
                    </div>
                    <div class="flex w-full flex-col justify-center">
                        <div class="text-3xl">{mode.title}</div>
                        <div class="text-md text-justify font-[Ubuntu] font-normal leading-tight">{mode.description}</div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</PageContainer>

{#if titleStopedAnimating}
    <div class="animation-duration-1200 animate-slide-up-fade">
        <BottomNavbar/>
    </div>
{/if}
