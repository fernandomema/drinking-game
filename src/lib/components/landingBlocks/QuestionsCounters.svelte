<script lang="ts">
    import { questions } from "$lib/questions";

    let questionsCount = [{
        name: "Pre-Party",
        count: questions.filter(q => q.tags.includes('preparty')).length,
    }, {
        name: "Tragos Locos",
        count: questions.filter(q => q.tags.includes('crazy')).length,
    }, {
        name: "Hot",
        count: questions.filter(q => q.tags.includes('+18')).length,
    }, {
        name: "Teams",
        count: questions.filter(q => q.tags.includes('teams')).length,
    }, {
        name: "Christmas",
        count: questions.filter(q => q.tags.includes('christmas')).length,
    }];
</script>

<section class="mt-10 bg-purple-100">
    <div class="p-6 rounded-lg shadow-md container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-4">Lot of questions</h2>
        <p class="text-center text-gray-600 mb-6">
            We have lot of questions, so you can play again and again and make the party more fun.
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