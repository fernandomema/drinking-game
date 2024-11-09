<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    /**
     * @type {HTMLDivElement}
     */
    let element;

    onMount( async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        element.style.height = "200px";
    });
</script>

<div class="flex flex-col items-center justify-center h-full w-full text-white text-6xl font-[Fredoka] font-bold text-center transition-all duration-700" bind:this={element}>
    <slot></slot>
</div>
