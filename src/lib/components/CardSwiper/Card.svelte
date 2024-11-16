<script lang="ts">
    import src from "@midudev/tailwind-animations";

	export let element: HTMLElement;

	export let question: string = '';
</script>

<div
class="absolute h-full w-full cursor-grab touch-none select-none rounded-xl border border-black bg-white ease-in-out" class:hidden={!question}
bind:this={element}
>
	{#if question}
		{#key question}
			{#if question}
				<div class="absolute flex h-full w-full items-center justify-center rounded-xl object-cover text-center text-black" >
					<span class="text-4xl">{question}</span> 
				</div>	
			{/if}
		{/key}
		<div class="absolute inset-0 rounded-b-xl bg-gradient-to-t from-white/80 via-white/0"></div>
	{/if}
</div>
