<script>
    import { _ } from "$lib/locales";

    const steps = [
        {
            title: $_("landing.steeps.step_1.title"),
            description: $_("landing.steeps.step_1.description"),
            icon: "📲",
        },
        {
            title: $_("landing.steeps.step_2.title"),
            description: $_("landing.steeps.step_2.description"),
            icon: "📂",
        },
        {
            title: $_("landing.steeps.step_3.title"),
            description: $_("landing.steeps.step_3.description"),
            icon: "📝",
        },
        {
            title: $_("landing.steeps.step_4.title"),
            description: $_("landing.steeps.step_4.description"),
            icon: "🎮",
        },
        {
            title: $_("landing.steeps.step_5.title"),
            description: $_("landing.steeps.step_5.description"),
            icon: "🎉",
        },
    ];
</script>

<div class="bg-white py-16 px-6">
    <h2 class="text-center text-3xl font-extrabold text-gray-800 sm:text-4xl">
        {$_("landing.steeps.title")}
    </h2>
    <p class="mt-4 text-center text-lg text-gray-600">
        {$_("landing.steeps.description")}
    </p>

    <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {#each steps as step, index}
            <div class="relative flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl font-bold">
                    {step.icon}
                </div>
                <h3 class="mt-4 text-lg font-semibold text-gray-800">
                    {step.title}
                </h3>
                <p class="mt-2 text-sm text-gray-600 text-center">
                    {step.description}
                </p>
                <span class="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">
                    {index + 1}
                </span>
            </div>
        {/each}
    </div>
</div>
