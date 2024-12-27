<script lang="ts">
    import { fade } from "svelte/transition";

</script>

<div {...$$restProps} class="h-dvh max-h-screen min-h-dvh w-full bg-[#794fea] custom-bg font-[Fredoka] font-bold text-white {$$props.class}" > 
    <slot />
</div>