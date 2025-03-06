<script lang="ts">
    import { _, getLocale } from "$lib/locales";
    import { questions } from "$lib/questions";
    import { onMount } from "svelte";

    let questionsCount: any[] = [];
    
    onMount(async () => {
        const locale = await getLocale();
        questionsCount = [{
            name: $_("modes.preparty.title"),
            count: questions.filter(q => q.tags.includes('preparty') && q.locales[locale]).length,
        }, {
            name: $_("modes.crazy.title"),
            count: questions.filter(q => q.tags.includes('crazy') && q.locales[locale]).length,
        }, {
            name: $_("modes.hot.title"),
            count: questions.filter(q => q.tags.includes('+18') && q.locales[locale]).length,
        }, {
            name: $_("modes.teams.title"),
            count: questions.filter(q => q.tags.includes('teams') && q.locales[locale]).length,
        }, {
            name: $_("modes.christmas.title"),
            count: questions.filter(q => q.tags.includes('christmas') && q.locales[locale]).length,
        }];
    });
    
</script>

<section class="">
    <div class="p-6 rounded-lg shadow-md container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">
            {$_("landing.question_counts.title")}
        </h2>
        <p class="text-center text-gray-600 mb-6">
            {$_("landing.question_counts.description")}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each questionsCount as { name, count }}
                <div class="flex flex-col items-center justify-center bg-purple-50 p-4 rounded-md shadow-sm hover:shadow-lg transition-shadow">
                    <h3 class="text-lg font-semibold text-gray-800">
                        {name}
                    </h3>
                    <p class="text-2xl font-bold text-purple-600">+{count}</p>
                </div>
            {/each}
        </div>
    </div>
</section>