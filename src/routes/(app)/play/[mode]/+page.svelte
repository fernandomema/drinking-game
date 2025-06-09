<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    import PageContainer from "$lib/components/PageContainer.svelte";
    import { onMount } from 'svelte';
    import { incrementDaysPlayed } from "$lib/UserInfo";

    onMount(() => {
        incrementDaysPlayed();
    });
</script>

<svelte:head>
    <script id="aclib" type="text/javascript" src="//acscdn.com/script/aclib.js"></script>
</svelte:head>

<PageContainer>
    <div class="h-dvh max-h-screen min-h-dvh pb-safe">
        <Cards />
    </div>
</PageContainer>