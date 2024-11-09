<script lang="ts">
    import AnimatedHeader from "$lib/components/AnimatedHeader.svelte";
    import Splash from "$lib/components/Splash.svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let container: HTMLDivElement;
    let circleInHesitate = false;

    onMount(async () => {
        container.classList.add('bg-[#794fea]', 'animate-circle-in-hesitate', 'flex', 'flex-col', 'items-center', 'justify-center', 'h-screen', 'w-screen');
        container.innerHTML = `<img src="/icn_mokel_red.png" width="200px" alt="">`;
        await new Promise((resolve) => setTimeout(resolve, 4000));
        container.querySelector('img')?.classList.add('animate-fade-out', 'duration-500');
        await new Promise((resolve) => setTimeout(resolve, 500 + 200));
        container.innerHTML = `<div class="w-screen h-screen flex items-center justify-center font-[Fredoka] text-white text-center font-bold text-6xl transition-all duration-700 animate-fade-in">Let's add some players!</div>`;
        await new Promise((resolve) => setTimeout(resolve, 2500));
        container.querySelector('div')!.style.height = "200px";
        container.classList.remove('items-center', 'justify-center');
        const input = document.createElement('input');
        input.outerHTML = `<div class="w-full absolute bottom-0"><input class="w-full rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400 focus:border-blue-600 py-2 mb-0.5" aria-disabled="false" aria-describedby=":S2:" id="textfield-1" placeholder="Text field"></div>`;
        container.appendChild(input);
    });
    
</script>

<div class="min-h-screen" bind:this={container}></div>