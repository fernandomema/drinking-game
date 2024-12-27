<script lang="ts">
    import { fade } from "svelte/transition";

</script>

<div class="bg-[#794fea] w-full h-dvh max-h-screen min-h-dvh absolute">
    <div class="bg-[#794fea] custom-bg w-full h-dvh max-h-screen min-h-dvh absolute"></div>
</div>
<div {...$$restProps} class="safe-h-screen min-safe-h-screen w-full font-[Fredoka] font-bold text-white {$$props.class}"> 
    <slot />
</div>