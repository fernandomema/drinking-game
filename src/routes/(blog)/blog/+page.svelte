<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    onMount(async () => {
        const browserLang = navigator.language;
        if (browserLang.includes('es')) {
            goto('/blog/es');
        } else {
            goto('/blog/en');
        }
    });
</script>