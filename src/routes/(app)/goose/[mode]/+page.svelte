<script lang="ts">
    import GooseBoard from '$lib/components/GooseBoard.svelte';
    import PageContainer from '$lib/components/PageContainer.svelte';
    import { onMount } from 'svelte';
    import { incrementDaysPlayed } from '$lib/UserInfo';

    onMount(() => {
        incrementDaysPlayed();
    });
</script>

<PageContainer>
    <div class="h-dvh max-h-screen min-h-dvh pb-safe relative">
        <GooseBoard />
    </div>
</PageContainer>
