<script lang="ts">
import { onMount } from 'svelte';

let questions: any[] = [];
let currentIndex = 0;
let locale = 'en';

onMount(() => {
    questions = JSON.parse(localStorage.getItem('castQuestions') || '[]');
    locale = localStorage.getItem('castLocale') || 'en';
    const channel = new BroadcastChannel('cast');
    channel.onmessage = (event) => {
        const { type, index } = event.data || {};
        if (typeof index === 'number') {
            currentIndex = index;
        }
    };
});
</script>

{#if questions.length === 0}
<div class="flex h-screen items-center justify-center">
    <p class="text-2xl">Waiting for game...</p>
</div>
{:else}
<div class="flex h-screen items-center justify-center p-4 text-center">
    <span class="text-5xl font-medium" data-testid="cast-question">{@html questions[currentIndex]?.locales?.[locale] || questions[currentIndex]?.locales?.en}</span>
</div>
{/if}
