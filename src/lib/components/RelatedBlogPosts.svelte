<script lang="ts">
    export let relatedPosts: { title: string; slug: string; image: string }[] = [];
</script>

<div class="bg-white rounded-lg shadow p-6 mb-6 w-full">
    <h3 class="text-xl font-semibold mb-4 text-center">Posts Relacionados</h3>
    <ul class="space-y-4">
        {#each relatedPosts as post}
            <li class="text-center">
                <a href={`/blog/${post.slug}`} class="block hover:text-indigo-600 transition-colors">
                    <img src={post.image} alt={post.title} class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <span class="block font-medium">{post.title}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>