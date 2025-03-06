<script lang="ts">
    import type { PostData } from "$lib/types/PostData";

    export let locale = 'en';
    export let relatedPosts: PostData[] = [];
</script>

<div class="bg-white rounded-lg shadow p-6 mb-6 w-full">
    <h3 class="text-xl font-semibold mb-4 text-center">Posts Relacionados</h3>
    <ul class="space-y-4">
        {#each relatedPosts as post}
            <li class="text-start">
                <a href={`/blog/${locale}/${post.seoTag}`} class="block hover:text-indigo-600 transition-colors">
                    <img src={post.image} alt={post.title} class="w-full rounded-lg mx-auto mb-2" />
                    <span class="block font-medium">{post.title}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>